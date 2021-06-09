import React from 'react';

import { PanelProps, getFieldDisplayName, formattedValueToString, Field as DfField, FormattedValue, DataFrame, ThresholdsConfig, Vector, FieldType } from '@grafana/data';
import { css } from 'emotion';
import { getTextColorForBackground } from '@grafana/ui';
import { getDisplayProcessor, textUtil } from '@grafana/data';
import moment from 'moment';

import { VGrid, HGrid, GridField, GridGroup } from './grid';
import { useGridStyle, GridStyle, alignstyles } from './styles'

var rce = React.createElement;

export interface VTableOptions {
  custom_columns?: string;
  dimension_field?: string;
  is_horizontal?: boolean;
  show_common_unit?: boolean;
  group_by_label?: string;
  sort: {
    field?: string;
    zeronull?: boolean;
    nullfirst?: boolean;
    desc?: boolean;
  }
  formatcode?: string;
}

interface FieldCtx {
  df: DataFrame,
  val_formatter?: (value: {}, field:DfField, context: any) => void,
  style: { name: string, value: (i: number) => string },
  order?: number[],
}

interface Props extends PanelProps<VTableOptions> {
}

function colorize_cell(mode: string, color: string) {

  if (!color) return {};
  if (mode == 'fg') return {'color': color};
  if (mode == 'bg') return {'background': color, 'color': getTextColorForBackground(color)};
  return {};
}

interface Formatters {
  name (field: DfField) : string;
  val (value: {}, field:DfField, context: any) : void;
}

function create_field(field: DfField, options: VTableOptions, ctx: FieldCtx): GridField {
  const {df, val_formatter, style, order} = ctx;
  const field_name = getFieldDisplayName(field, df);

  if (!field.display)
    field.display = getDisplayProcessor({ field });

  let common_unit = undefined;

  // try to render the field with the sample input == 1
  // to obtain the unit. probing with 0 may be wrong since it may be special.
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

    const key = field.name + '.' + i;

    let v = field.values.get(order ? order[i] : i);
    if (v == null)
      v = undefined;

    const dv = field.display(v);
    const spec = {
      raw: v,
      text: options.show_common_unit ? dv.text : formattedValueToString(dv),
      style: colorize_cell(field.config.custom?.display_mode, dv.color),
      html: undefined,
    }

    if (val_formatter) {
      try { val_formatter(spec, field, {})}
      catch(e) { }
    }

    let cell;

    if (spec?.html) {
      cell = rce(
        'div',
        {
          key,
          style: spec.style,
          className: style.value(i),
          dangerouslySetInnerHTML: {__html: textUtil.sanitize(spec.html)},
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

interface GroupMap {
  name?: string;
  fields: DfField[];
  is_dim?: boolean;
}

function group_fields(fields: DfField[], options: VTableOptions) : GroupMap[] {

  const groups: GroupMap[] = [];

  const {dimension_field: dim, group_by_label: label} = options;
  if (dim && dim.length) {
    const dimfield = fields.find(f => f.name == dim);
    if (dimfield) {
      groups.push({fields: [dimfield], is_dim:true})
      fields = fields.filter(f => f != dimfield);
    }
  }

  if (label && label.length) {
    const gm = new Map([[undefined, []]]);

    fields.forEach(f => {
        const lab = f?.labels?.[label];
        if (! gm.has(lab))
          gm.set(lab, [])
        gm.get(lab).push(f)
      }
    );

    if (! gm.get(undefined).length)
      gm.delete(undefined);

    groups.push(...[...gm].map(([name, fields]) => {return {name, fields}}))
  }
  else {
    groups.push({fields}) // shortcut if no grouping
  }

  return groups;
}

function groups_to_cells(gm: GroupMap[], val_formatter, options: VTableOptions, style: GridStyle, next_field_style, order, df): GridGroup[] {

  const ctx: FieldCtx = {
    df: df,
    val_formatter: val_formatter,
    style: undefined,
    order,
  }

  const groups = gm.map(g => {
      return {
        label: g.name ? rce('div',
          {
            key: `__group${g.name}`,
            className: style.grouplabel
          },
          g.name) : undefined,
        fields: g.fields.map(f => create_field(f, options, {...ctx, style: next_field_style(g.is_dim)}))
      }
    }
  )

  return groups;
}


function num_comparer(a: number, b: number, nullfirst?:boolean, desc?:boolean): number {
  if (a == null && b == null) return 0;
  if (a == null) return nullfirst ? -1 : 1;
  if (b == null) return nullfirst ? 1 : -1;

  return desc ? (b - a) : (a - b);
}

function str_comparer(a: string, b: string, nullfirst?:boolean, desc?:boolean): number {
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

function get_order(fields: DfField[], options: VTableOptions) : number[] | undefined {
  const {sort} = options;

  if (! (sort.field && sort.field.length)) return undefined;

  const field = fields.find(f => f.name == options.sort.field);
  if (! field) return undefined;

  const ordermap = field.values.toArray().map((v, i)=> {
    return {v: (v == 0 && sort.zeronull) ? null : v, i}
  });

  if (field.type == FieldType.number)
    ordermap.sort((a, b) => num_comparer(a.v, b.v, sort.nullfirst, sort.desc));
  else
    ordermap.sort((a, b) => str_comparer(a.v, b.v, sort.nullfirst, sort.desc));

  return ordermap.map(v => v.i);
}


function parse_colspec(str: string, size: number) : {as:string[], ws:number[]} {
  const re = /\s*([r|c|l]?)\s*([0-9]*)\s*/;

  const specs = str.split(',').map(f =>
    {
      const m = f.match(re);
      const a = m ? alignstyles[m[1]] : undefined;
      const w = m && m[2].length ? m[2] : 0;

      return [a, w]
    }
  );
  const len = specs.length;

  if (len && len < size) {
    specs.length = size;
    specs.fill(specs[len - 1], len);
  }

  return {as: specs.map(s => s[0] as string), ws: specs.map(s => s[1] as number)}
}


export function VTable({ data, options, height, width }: Props) {
  const is_empty = ! (data.series && data.series.length && data.series[0]?.fields?.length);

  if (is_empty)
    return rce('div', null, 'No data');

  const df = data.series[0];
  const style = useGridStyle(options.is_horizontal);

  let colws : number[];
  let aligns = [];

  if (options.custom_columns) {
    let ncols = 0;
    if (options.is_horizontal)
      ncols = df.fields.length;
    else
      ncols = (df.fields?.[0].values.length ?? 0) + 1;
    const res = parse_colspec(options.custom_columns, ncols);
    aligns = res.as
    colws = res.ws;
  }

  let next_field_style;

  // TODO: refactor this ugliness outside the base function
  if (! options.is_horizontal) {
    next_field_style = (is_dimension:boolean) => {
      const base = is_dimension ? style.dimfield : style.field;
      return {
        name: css(base.name, aligns[0]),
        value: (i) => css(base.value, aligns[i + 1]),
      }
    }
  }
  else {
    next_field_style = (is_dimension:boolean) => {
      const base = is_dimension ? style.dimfield : style.field;
      const align = aligns.shift()
      return {
        name: css(base.name, align),
        value: (i) => css(base.value, align),
      }
    }
  }

  let val_formatter;

  if (options.formatcode) {
    try {
      const f = Function('value', 'field', 'context', 'lib', options.formatcode);
      val_formatter = (value, field, context) => f(value, field, {df, ...context}, { moment })
    }
    catch(e) {
      console.log('failed to compile formatter', e)
    }
  }

  const fields = df.fields;

  const ctx: FieldCtx = {
    val_formatter,
    df,
    style: undefined,
    order: get_order(fields, options);
  }

  const gm = group_fields(fields, options);
  const groups = groups_to_cells(gm, val_formatter, options, style, next_field_style, ctx.order, df);

  return rce(options.is_horizontal ? HGrid : VGrid, {
    className: css`
                width: ${width}px;
                height: ${height}px;
                overflow: auto;
              `,
    groups,
    colws,
  })
};