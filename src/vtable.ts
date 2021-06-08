import React from 'react';

import { PanelProps, getFieldDisplayName, formattedValueToString, Field as DfField, FormattedValue, DataFrame, ThresholdsConfig, Vector, FieldType } from '@grafana/data';
import { css } from 'emotion';
import { getTextColorForBackground } from '@grafana/ui';
import { getDisplayProcessor, textUtil } from '@grafana/data';
import moment from 'moment';

import { VGrid, HGrid, GridField, GridGroup } from './grid';
import { useGridStyle, GridStyle } from './styles'

var rce = React.createElement;

export interface VTableOptions {
  custom_widths?: string;
  dimension_field?: string;
  is_horizontal?: boolean;
  show_common_unit?: boolean;
  group_by_label?: string;
  formatcode?: string;
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

function create_field(field: DfField, formatters: Formatters, options: VTableOptions, style: { name: string, value: string }): GridField {
  const field_name = formatters.name(field);

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

    let v = field.values.get(i);
    if (v == null)
      v = undefined;

    const dv = field.display(v);
    const spec = {
      raw: v,
      text: options.show_common_unit ? dv.text : formattedValueToString(dv),
      style: colorize_cell(field.config.custom?.display_mode, dv.color),
      html: undefined,
    }

    if (formatters.val) {
      try { formatters.val(spec, field, {})}
      catch(e) { }
    }

    let cell;

    if (spec?.html) {
      cell = rce(
        'div',
        {
          key,
          style: spec.style,
          className: style.value,
          dangerouslySetInnerHTML: {__html: textUtil.sanitize(spec.html)},
        });
    }
    else {
      cell = rce(
        'div',
        {
          key,
          style: spec.style,
          className: style.value,
        },
        spec.text);
    }

    cells.push(cell);
  }

  return { values: cells }
}

function extract_groups(fields: DfField[], formatters: Formatters, label: string, options: VTableOptions, style: GridStyle): GridGroup[] {

  const ungrouped = fields.filter(f => f?.labels?.[label] == undefined)

  const groups: string[] = [];

  fields.forEach(f => {
    const lab = f?.labels?.[label];
    if (lab != undefined && ! groups.includes(lab))
      groups.push(lab);
  });

  const grouped = groups.map(g => {
    return {
      label: rce('div',
        {
          key: `__group${g}`,
          className: style.grouplabel
        },
        g),
      fields: fields
        .filter(f => f?.labels?.[label] == g)
        .map(f => create_field(f, formatters, options, style.field))
    }
  })

  if (!ungrouped.length)
    return grouped;

  // ugly
  return [
    {
      label: undefined,
      fields: ungrouped.map(f => create_field(f, formatters, options, style.field))
    },
    ...grouped
  ]
}

function parse_sizes(str: string) {
  return str.split(';').map(f => Number.parseInt(f) || 0)
}

export function VTable({ data, options, height, width }: Props) {
  const is_empty = ! (data.series && data.series.length && data.series[0]?.fields?.length);

  if (is_empty)
    return rce('div', null, 'No data');

  const df = data.series[0];
  const style = useGridStyle(options.is_horizontal);

  const colws = options.custom_widths ? parse_sizes(options.custom_widths) : undefined

  console.log('here');

  const name_formatter = (field: DfField) => getFieldDisplayName(field, df);

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

  const formatters = {
    name: name_formatter,
    val: val_formatter,
  }

  let fields = df.fields;
  const groups: GridGroup[] = []

  const dimfield = options.dimension_field && fields.find(f => f.name == options.dimension_field);
  if (dimfield) {
    groups.push(
      {
        fields: [create_field(dimfield, formatters, options, style.catfield)]
      })
    fields = fields.filter(f => f.name != options.dimension_field)
  }

  const label = options.group_by_label;
  if (label && label.length) {
    groups.push(...extract_groups(fields, formatters, label, options, style))
  }
  else
    groups.push({
      fields: fields.map(f =>
        create_field(f, formatters, options, style.field))
    });


  return rce(options.is_horizontal ? HGrid : VGrid, {
    className: css`{width: ${width}px; height: ${height}px; overflow: auto;}`,
    groups,
    colws,
  })
};