import React from 'react';

import { PanelProps, getFieldDisplayName, formattedValueToString, Field, FormattedValue, DataFrame, ThresholdsConfig, Vector } from '@grafana/data';
import { VTableOptions } from './types';
import { css, cx } from 'emotion';
import { getTextColorForBackground, useTheme } from '@grafana/ui';
import { getDisplayProcessor } from '@grafana/data';
import moment from 'moment';

import {Grid, GridProps, GridData, GridField, GridGroup} from './grid';

var rce = React.createElement;

//const HEADER_BG = 'rgb(32, 34, 38)';
const HEADER_BG = '#141619';
const BORDER_BG = `rgb(44, 50, 53)`

interface Props extends PanelProps<VTableOptions> {
}

function colorize_cell(mode: string, color: string) {

  if (!color) return '';
  if (mode == 'fg') return css`color: ${color};`;
  if (mode == 'bg') return css`background: ${color}; color: ${getTextColorForBackground(color)};`;
  return '';
}

const STYLES = {
  valcell: css`
  {
    text-align: right;
    padding: 8px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }`,
  groupcell: css`
  {
    position: sticky;
    left: 0;
    /* border-bottom: 1px solid ${BORDER_BG}; */
    background-color: ${HEADER_BG};
    color: #33a2e5;
    padding: 8px;
    padding-left: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    grid-column: 1 / -1;
    justify-self: start;  /* this is a must for full row to be sticky */
    /* align-self: end; */
  }`,
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



function create_field(field, df, options): GridField {
  const field_name = getFieldDisplayName(field, df);
  let common_unit = options.show_common_unit && field.config?.unit;
  if (common_unit == 'none')
    common_unit = undefined;

  const namecell = rce('div', {key: field.name, className: {}}, common_unit ? `${field_name}, ${common_unit}` : field_name)

  const vcells = [];

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

    const cell = rce('div', {key: field.name + '.' + i, className: `${color} } ${STYLES.valcell}`}, text);
    vcells.push(cell);
  }

  return {name: namecell, values: vcells}
}

function extract_groups(fields, df, options, label) : GridGroup[] {

  const groups = [];
  const ungrouped = fields.filter(f => f?.labels?.[label] == undefined)

  fields.forEach(f => {
    const l = f?.labels?.[label];
    if (l != undefined && ! groups.includes(l))
      groups.push(l);
  })

  const res2 = groups.map(g => {
    return {
      name: rce('div', {key: `__group${g}`, className: STYLES.groupcell}, g),
      fields: fields.filter(f => f?.labels?.[label] == g).map(f => create_field(f, df, options))
    }
  })

  return [
    {name: undefined, fields:ungrouped.map(f => create_field(f, df, options))},
    ...res2]
}

export function VTable({ data, options: opts, height, width }: Props) {
  const count = data.series?.length;
  const df = data.series[0];

  const has_fields = df?.fields.length;

  if (!count || !has_fields)
    return rce('div', null, 'No data');

  const is_hor = opts.is_horizontal;

  const options = {...opts, style: is_hor ? get_hstyles() : get_vstyles()}

  let widths;

  widths = Array(df.fields[0].values.length + 1);

  widths.fill(undefined);
  const custom_widths = options.custom_widths?.split(';').map(f => f.trim()) ?? [];

  if (custom_widths.length) {
    const cwl = custom_widths.length;
    widths = widths.map((_, i) => {
      const cw = Number.parseInt(custom_widths[(i < cwl) ? i : (cwl - 1)]);
      return (Number.isFinite(cw) && cw) ? cw + 'px' : undefined;
    })
  }

  console.log('here');

    // ok, grouping here
  const label = options.group_by_label;

  // const attributes = options.first_value_is_category ? create_row({field:df.fields[0], df, options, plaintext:true}) : undefined;

  let header;
  let fields = df.fields;

  if (options.first_value_is_category) {
    header = create_field(fields[0], df, options);
    fields = fields.slice(1);
  }

  let groups;

  if (label) {
    groups = extract_groups(fields, df, options, label);
  }
  else
    groups = [ {fields: fields.map(f => create_field(f, df, options))} ]

  const gd: GridData = {
    header: header,
    groups: groups,
  }

  return rce(Grid, {
    height,
    width,
    widths,
    horizontal:is_hor,
    data: gd,
    stickyheader: options.first_value_is_category,
    stickynames: true,
  })
};


function get_vstyles() {
  return  {
    corner: css`
    {
        position: sticky;
        left: 0;
        top: 0;
        z-index: 2;
        background-color: ${HEADER_BG};
        border-bottom: 1px solid ${BORDER_BG};
    }`,
    namecell: css`
    {
      position: sticky;
      left: 0;
      border-bottom: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
    }`,
    groupcell: css`
    {
      position: sticky;
      left: 0;
      /* border-bottom: 1px solid ${BORDER_BG}; */
      background-color: ${HEADER_BG};
      color: #33a2e5;
      padding: 8px;
      padding-left: 4px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      grid-column: 1 / -1;
      justify-self: start;  /* this is a must for full row to be sticky */
      /* align-self: end; */
    }`,
    headercell: css`
    {
      position: sticky;
      top: 0;
      border-bottom: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
      z-index: 1;
    }
    `,
    valcell: css`
    {
      border-bottom: 1px solid ${BORDER_BG};
    }
    `
  }
}


function get_hstyles() {
  return  {
    corner: css`
    {
        position: sticky;
        left: 0;
        top: 32px;
        z-index: 2;
        background-color: ${HEADER_BG};
        border-bottom: 1px solid ${BORDER_BG};
        /* border-right: 1px solid ${BORDER_BG}; */
        color: #33a2e5;
        padding: 8px;
        /* align-self: end; */
        text-overflow: ellipsis;
        text-align: right;
        white-space: nowrap;
    }`,
    namecell: css`
    {
      position: sticky;
      top: 32px;
      /* border-right: 1px solid ${BORDER_BG}; */
      border-bottom: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
      /* color: #33a2e5; */
      color: #33a2e5;
      padding: 8px;
      padding-left: 8px;
      text-align: right;
    }`,
    headercell: css`
    {
      position: sticky;
      left: 0;
      border-bottom: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
      color: #9fa7b3;
      text-align: right;
      padding: 8px;
      z-index: 1;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    `,
    valcell: css`
    {
      text-align: right;
      padding: 8px;
      border-bottom: 1px solid ${BORDER_BG};
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    `
  }
}