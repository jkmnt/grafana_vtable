import React from 'react';

import { PanelProps, getFieldDisplayName, formattedValueToString, Field, FormattedValue, DataFrame, ThresholdsConfig, Vector } from '@grafana/data';
import { VTableOptions } from './types';
import { css } from 'emotion';
import { getTextColorForBackground, useTheme } from '@grafana/ui';
import { getDisplayProcessor } from '@grafana/data';
import moment from 'moment';

import {VGrid, HGrid, GridField, GridGroup} from './grid';
import { hstyle, vstyle, GridStyle } from './styles'

var rce = React.createElement;

interface Props extends PanelProps<VTableOptions> {
}

function colorize_cell(mode: string, color: string) {

  if (!color) return '';
  if (mode == 'fg') return css`color: ${color};`;
  if (mode == 'bg') return css`background: ${color}; color: ${getTextColorForBackground(color)};`;
  return '';
}

// temporary hacks here just for test
function hack_presentation(field, v, text) {
  if (!field.config.pr || field.config.pr == 'number')
    return text;

  if (v == null)
    return text;

  // this ugly line handles the case of text being mapped to some value
  if (text != v.toString())
    return text;

  const pr = field.config.pr;


  if (pr == 'ts_m') {
    const m = moment.unix(v * 60);
    text = m.format('YY-MM-DD HH:mm');
  }

  if (pr == 'time_hm') {
    const m = moment.unix(v * 60);
    text = m.utc().format('HH:mm');
  }

  if (pr == 'time_hms') {
    const m = moment.unix(v);
    text = m.format('HH:mm:ss');
  }

  if (pr == 'date_dmy') {
    const m = moment.unix(v * 1440 * 60);
    text = m.format('YY-MM-DD HH:mm');
  }

  return text;
}



function create_field(field, df, options: VTableOptions, style: {name, value}): GridField {
  const field_name = getFieldDisplayName(field, df);
  let common_unit = options.show_common_unit && field.config?.unit;
  if (common_unit == 'none')
    common_unit = undefined;

  const namecell = rce(
    'div',
    {
      key: field.name,
      className: style.name,
    },
    common_unit ? `${field_name}, ${common_unit}` : field_name
  );

  const cells = [namecell];

  if (! field.display)
    field.display = getDisplayProcessor({ field });

  for (var i=0; i < field.values.length; i++) {

    const key = field.name + '.' + i;

    let v = field.values.get(i);
    if (v == null)
      v = undefined;
    let dv = field.display(v);

    let text = options.show_common_unit ? dv.text : formattedValueToString(dv);
    const color = colorize_cell(field.config.custom?.display_mode, dv.color);

    text = hack_presentation(field, v, text);

    const cell = rce(
      'div',
      {
        key,
        className: css(style.value, color)
      },
      text);
    cells.push(cell);
  }

  return {values: cells}
}

function extract_groups(fields, df, label:string, options:VTableOptions, style: GridStyle) : GridGroup[] {

  const groups = [];
  const ungrouped = fields.filter(f => f?.labels?.[label] == undefined)

  fields.forEach(f => {
    const l = f?.labels?.[label];
    if (l != undefined && ! groups.includes(l))
      groups.push(l);
  })

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
              .map(f => create_field(f, df, options, style.field))
    }
  })

  if (! ungrouped.length)
    return grouped;

  // ugly
  return [
    {
      label: undefined,
      fields:ungrouped.map(f => create_field(f, df, options, style.field))
    },
    ...grouped
  ]
}

function parse_sizes(str: string) {
  return str.split(';').map(f => Number.parseInt(f) || 0)
}

export function VTable({ data, options, height, width }: Props) {
  const count = data.series?.length;
  const df = data.series[0];

  const has_fields = df?.fields.length;

  if (!count || !has_fields)
    return rce('div', null, 'No data');

  const is_hor = options.is_horizontal;

  const style = is_hor ? hstyle : vstyle;

  const colws = options.custom_widths ? parse_sizes(options.custom_widths) : undefined

  console.log('here');

    // ok, grouping here
  const label = options.group_by_label;

  // const attributes = options.first_value_is_category ? create_row({field:df.fields[0], df, options, plaintext:true}) : undefined;

  let header;
  let fields = df.fields;

  const groups: GridGroup[] = []

  if (options.first_value_is_category) {
    header = create_field(fields[0], df, options, style.catfield);
    groups.push({fields: [header]})
    fields = fields.slice(1);
  }

  if (label) {
    groups.push(...extract_groups(fields, df, label, options, style))
  }
  else
    groups.push({fields: fields.map((f, i) =>
      create_field(f, df, options, style.field))});


  return rce(options.is_horizontal ? HGrid : VGrid, {
    className: css`{width: ${width}px; height: ${height}px; overflow: auto;}`,
    groups,
    colws,
  })
};