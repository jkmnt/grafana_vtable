import React from 'react';
import moment from 'moment';

import { css } from 'emotion';
import { PanelProps, getFieldDisplayName, getDisplayProcessor, Field as DfField, DataFrame, FieldType } from '@grafana/data';
import { getTextColorForBackground } from '@grafana/ui';


import { VGrid, HGrid, GridField, GridGroup } from './grid';
import { useGridStyle, GridStyle} from './styles'

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
  name: string;
  value: (i: number) => string;
}

type Formatter = (value: ValueSpec, field: DfField, context: any) => void;

interface FieldCtx {
  df: DataFrame,
  formatter?: Formatter,
  style: GridStyle;
  order?: number[],
}

interface ValueSpec {
    raw: any,
    i: number,
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

  if (!field.display)
    field.display = getDisplayProcessor({ field });

  let common_unit = undefined;

  // try to render the field with the sample input == 1 to obtain the unit.
  // probing with 0 may be wrong since it may be special.
  // mappings are detached while probing and reattached later.
  // this is done only if field is numeric
  if (options.show_common_unit && field.type == FieldType.number) {
    const saved_mappings = field.config.mappings;
    field.config.mappings = undefined;
    common_unit = getDisplayProcessor({ field })(1).suffix;
    field.config.mappings = saved_mappings;
  }

  const namecell = rce(
    'div',
    {
      key: field.name,
      className: style.name,
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

    const dv = field.display(v);
    const spec: ValueSpec = {
      raw: v,
      i,
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
          className: style.value(i),
          dangerouslySetInnerHTML: { __html: spec.html },
        });
    }
    else {
      cell = rce(
        'div',
        {
          key,
          style: spec.style,
          className: style.value(i),
        },
        spec.text);
    }

    cells.push(cell);
  }

  return { values: cells }
}

interface GroupSpec {
  name?: string;
  fields: DfField[];
  is_dim?: boolean;
}


function fields_to_groups(fields: DfField[], options: VTableOptions): GroupSpec[] {
  const { dimension_field: dim, group_by_label: label } = options;

  const groups: GroupSpec[] = [];

  if (dim && dim.length) {
    const dimfield = fields.find(f => f.name == dim);
    if (dimfield) {
      groups.push({ fields: [dimfield], is_dim: true })
      fields = fields.filter(f => f != dimfield);
    }
  }

  if (label && label.length) {
    const gm = new Map<string | undefined, DfField[]>();
    gm.set(undefined, []);

    fields.forEach(f => {
        const lab = f?.labels?.[label];
        if (!gm.has(lab))
          gm.set(lab, [])
        gm.get(lab)?.push(f)  // '?' just to calm down the linter
      }
    );

    if (! gm.get(undefined)?.length)
      gm.delete(undefined);

    groups.push(...[...gm].map(([name, fields]) => { return { name, fields } }))
  }
  else {
    groups.push({ fields }) // shortcut if no grouping
  }

  return groups;
}


function create_gridgroups(gss: GroupSpec[], options: VTableOptions, ctx: FieldCtx, aligns: (string | undefined)[]): GridGroup[] {

  const field_style = (field_idx: number, is_dimension: boolean) => {
    const base = is_dimension ? ctx.style.dimfield : ctx.style.field;
    return options.is_horizontal ? {
      name: css(base.name, aligns[field_idx]),
      value: (i: number) => css(base.value, aligns[field_idx]),
    } : {
      name: css(base.name, aligns[0]),
      value: (i: number) => css(base.value, aligns[i + 1]),
    }
  }

  var field_idx = 0;

  const gridgroups = gss.map(g => {
    return {
      label: g.name ? rce('div', { key: `__group.${g.name}`, className: ctx.style.grouplabel }, g.name) : undefined,
      fields: g.fields.map(f => create_field(f, options, ctx, field_style(field_idx++, !! g.is_dim)))
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

function parse_colspec(str: string, size: number): { a: string | undefined, w: number }[] {
  const re = /\s*([r|c|l]?)\s*([0-9]*)\s*/;

  const specs = str.split(',').map(f => {
    const m = f.match(re);
    const a = m && m[1] != '' ? m[1] : undefined;
    const w = m && m[2] != '' ? Number.parseInt(m[2]) : 0;

    return {a, w}
  });

  const len = specs.length;

  if (len && len < size) {
    specs.length = size;
    specs.fill(specs[len - 1], len);
  }

  return specs;
}

// this returns the maximum of rows or columns regardless of the orientation
function estimate_maxcols(fields: DfField[]) {
  return Math.max(fields.length, fields?.[0].values.length + 1 ?? 1);
}


function get_colspecs(spec: string | undefined, maxcols: number) {
  if (!(spec && spec.length))
    return [];

  return parse_colspec(spec, maxcols);
}

export function VTable({ data, options, height, width }: PanelProps<VTableOptions>) {
  const is_empty = !(data.series && data.series.length && data.series[0]?.fields?.length);

  if (is_empty)
    return rce('div', null, 'No data');

  const df = data.series[0];
  const fields = df.fields;
  const style = useGridStyle(!! options.is_horizontal);

  const maxcols = estimate_maxcols(fields);
  const colspecs = get_colspecs(options.custom_columns, maxcols);

  let formatter: Formatter | undefined;

  if (options.use_formatcode && options.formatcode) {
    try {
      const f = Function('value', 'field', 'context', 'lib', options.formatcode);
      formatter = (value, field, context) => f(value, field, { df, ...context }, { moment })
    }
    catch (e) {
      console.log('failed to compile formatter', e)
    }
  }

  const ctx: FieldCtx = {
    formatter,
    df,
    style,
    order: get_order(fields, options),
  }

  const groups = fields_to_groups(fields, options);
  const gridgroups = create_gridgroups(groups, options, ctx, colspecs.map(c => c.a));

  return rce(options.is_horizontal ? HGrid : VGrid, {
    className: css`
                width: ${width}px;
                height: ${height}px;
                overflow: auto;
              `,
    groups: gridgroups,
    colws: colspecs.length ? colspecs.map(c => c.w) : undefined,
  })
};