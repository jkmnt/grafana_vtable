import React from 'react';
import moment from 'moment';

import { css } from 'emotion';
import { PanelProps, getFieldDisplayName, getDisplayProcessor, Field as DfField, DataFrame, FieldType } from '@grafana/data';
import { getTextColorForBackground } from '@grafana/ui';

import { config as gf_config} from "@grafana/runtime"

import { VGrid, HGrid, GridField, GridGroup } from './grid';
import { get_style, GridStyle} from './styles'
import { discover_unit, fields_to_groups, get_colspecs, GroupSpec } from './utils';

var rce = React.createElement;

export interface VTableOptions {
  custom_columns?: string;
  dimension_field?: string;
  is_horizontal?: boolean;
  show_common_unit?: boolean;
  group_by_label?: string;
  use_formatcode?: boolean;
  formatcode?: string;
  sort: {
    field?: string;
    zeronull?: boolean;
    nullfirst?: boolean;
    desc?: boolean;
  }
}

interface FieldStyle {
  nameclass: string;
  get_valueclass: (i: number) => string;
}

type Formatter = (value: ValueSpec, field: DfField, context: any) => void;

interface FieldCtx {
  df: DataFrame,
  formatter?: Formatter,
  style: GridStyle,
  order?: number[],
}

interface ValueSpec {
    raw: any,
    i: number,
    name: string,
    text: string;
    style: {},
    html: string | undefined,
}

function colorize_cell(mode: string | undefined, color: string | undefined) {
  if (!color) return {};
  if (mode == 'fg') return { 'color': color };
  if (mode == 'bg') return { 'background': color, 'color': getTextColorForBackground(color) };
  return {};
}

function create_field(field: DfField, options: VTableOptions, ctx: FieldCtx, style: FieldStyle): GridField {
  const { df, formatter, order } = ctx;
  const field_name = getFieldDisplayName(field, df);

  const display = field.display ?? getDisplayProcessor({ field });

  const common_unit = (options.show_common_unit && field.type == FieldType.number)
                      ? discover_unit(field) : undefined

  const namecell = rce(
    'div',
    {
      key: field.name,
      className: style.nameclass,
    },
    common_unit ? `${field_name}, ${common_unit}` : field_name
  );

  const cells = [namecell];

  // the index loop here instead of map is for easily attaching the sorting feature
  // should it be needed someday
  for (var i = 0; i < field.values.length; i++) {

    const key = `${field.name}.${i}`

    let v = field.values.get(order ? order[i] : i);
    if (v == null)
      v = undefined;

    const dv = display(v);
    const spec: ValueSpec = {
      raw: v,
      i,
      name: field.name,
      text: options.show_common_unit ? dv.text : `${dv.prefix ?? ''}${dv.text}${dv.suffix ?? ''}`,
      style: colorize_cell(field.config.custom?.display_mode, dv.color),
      html: undefined,
    }

    if (formatter) {
      try { formatter(spec, field, {}) }
      catch (e) { }
    }

    let cell;

    if (spec?.html) {
      cell = rce(
        'div',
        {
          key,
          style: spec.style,
          className: style.get_valueclass(i),
          dangerouslySetInnerHTML: { __html: spec.html },
        });
    }
    else {
      cell = rce(
        'div',
        {
          key,
          style: spec.style,
          className: style.get_valueclass(i),
        },
        spec.text);
    }

    cells.push(cell);
  }

  return { values: cells }
}


function create_gridgroups(gss: GroupSpec[], options: VTableOptions, ctx: FieldCtx, aligns: (string | undefined)[]): GridGroup[] {

  const field_style = (field_idx: number, is_dimension: boolean) => {
    const fieldstyle = ctx.style.get_fieldstyle(is_dimension)
    return options.is_horizontal ? {
      nameclass: fieldstyle.get_nameclass(aligns[field_idx]),
      get_valueclass: (i: number) => fieldstyle.get_valueclass(aligns[field_idx]),
    } : {
      nameclass: fieldstyle.get_nameclass(aligns[0]),
      get_valueclass: (i: number) => fieldstyle.get_valueclass(aligns[i + 1]),
    }
  }

  var field_idx = 0;

  const gridgroups = gss.map(g => {
    const key = `__group.${g?.name}`;
    return {
      label: g.name ? rce('div', { key, className: ctx.style.grouplabel }, g.name) : undefined,
      fields: g.fields.map(f => create_field(f as DfField, options, ctx, field_style(field_idx++, !! g.is_dim)))
    }
  }
  )

  return gridgroups;
}


function num_comparer(a: number, b: number, nullfirst?: boolean, desc?: boolean): number {
  if (a == null && b == null) return 0;
  if (a == null) return nullfirst ? -1 : 1;
  if (b == null) return nullfirst ? 1 : -1;

  return desc ? (b - a) : (a - b);
}

function str_comparer(a: string, b: string, nullfirst?: boolean, desc?: boolean): number {
  if (a == null && b == null) return 0;
  if (a == null) return nullfirst ? -1 : 1;
  if (b == null) return nullfirst ? 1 : -1;

  if (desc) {
    if (a > b) return -1;
    if (a < b) return 1;
  } else {
    if (a < b) return -1;
    if (a > b) return 1;
  }
  return 0;
}

function get_order(fields: DfField[], options: VTableOptions): number[] | undefined {

  const { sort } = options;

  if (!(sort.field && sort.field.length)) return undefined;

  const field = fields.find(f => f.name == sort.field);
  if (!field) return undefined;

  const ordermap = field.values.toArray().map((v, i) => {
    return { v: (v == 0 && sort.zeronull) ? null : v, i }
  });

  if (field.type == FieldType.number)
    ordermap.sort((a, b) => num_comparer(a.v, b.v, sort.nullfirst, sort.desc));
  else
    ordermap.sort((a, b) => str_comparer(a.v, b.v, sort.nullfirst, sort.desc));

  return ordermap.map(v => v.i);
}


// this returns the maximum of rows or columns regardless of the orientation
function estimate_maxcols(fields: DfField[]) {
  return Math.max(fields.length, fields?.[0].values.length + 1 ?? 1);
}



export function VTable({ data, options, height, width, transparent }: PanelProps<VTableOptions>) {
  const is_empty = !(data.series && data.series.length && data.series[0]?.fields?.length);

  if (is_empty)
    return rce('div', null, 'No data');

  const df = data.series[0];
  const fields = df.fields;
  const style = get_style(options.is_horizontal, transparent);

  const maxcols = estimate_maxcols(fields);
  const colspecs = get_colspecs(options.custom_columns, maxcols);

  let formatter: Formatter | undefined;

  if (gf_config.disableSanitizeHtml && options.use_formatcode && options.formatcode) {
    try {
      const f = Function('value', 'field', 'context', 'lib', options.formatcode);
      formatter = (value, field, context) => f(value, field, { df, ...context }, { moment })
    }
    catch (e) {
      console.log('failed to compile formatter', e)
    }
  }

  console.log('render');

  const ctx: FieldCtx = {
    formatter,
    df,
    style,
    order: get_order(fields, options),
  }

  const groups = fields_to_groups(fields, options.dimension_field, options.group_by_label);
  const gridgroups = create_gridgroups(groups, options, ctx, colspecs.map(c => c.a));

  const grid = (options.is_horizontal ? HGrid : VGrid)(gridgroups,
    { colws: colspecs.length ? colspecs.map(c => c.w) : undefined},
  )

  const container = rce(
    'div',
    {
      style: {
        'width': width,
        'height': height
      },
      className: css`
        display: flex;
        flex-direction: column;
      `
    },
    rce(
      'div',
      {
        className: css(css`
          overflow: auto;
        `, style.scrollbars)
        , ...grid})
    // TODO: add series picker after the grid if there are multiple queries
  );

  return container;
};