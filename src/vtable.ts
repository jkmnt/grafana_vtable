import React from 'react';

import { PanelProps, getFieldDisplayName, formattedValueToString, Field, FormattedValue, DataFrame, ThresholdsConfig, Vector } from '@grafana/data';
import { VTableOptions } from './types';
import { css, cx } from 'emotion';
import { getTextColorForBackground, useTheme } from '@grafana/ui';
import { getDisplayProcessor } from '@grafana/data';
import moment from 'moment';

var e = React.createElement;

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

interface GridProps {
  widths: string[];

  height?: number;
  width?: number;

  horizontal?: boolean;

  nrows?: number;

  cells: any[];
}

function Grid({ widths, height, width, cells, horizontal, nrows }: GridProps) {

  // compose heights
  const gtc = widths.map(e => { return e ?? 'minmax(max-content, 1fr)' }).join(' ');

  const style = ! horizontal ?
    css`
    {
      display: grid;
      grid-template-columns: ${gtc};
      grid-auto-rows: minmax(max-content, 40px);
      height: ${height ? height + 'px' : '100%'};
      width: ${width ? width + 'px' : '100%'};
      overflow: auto;
    }`
    :
    css`
    {
      display: grid;
      grid-template-rows: 32px max-content repeat(${nrows}, 1fr);
      /* grid-auto-columns: minmax(max-content, 1fr); */
      grid-auto-flow: column;
      height: ${height ? height + 'px' : '100%'};
      width: ${width ? width + 'px' : '100%'};
      overflow: auto;
    }`

  const groupcorn = css`
    {
      position: sticky;
      top: 0;
      left: 0;
      grid-row: 1 / 2;
      grid-column: 1 / 2;
      text-align: center;
      border-right: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
      padding: 8px;
      z-index: 4;
    }
    `;

  const group0 = css`
  {
    position: sticky;
    top: 0;
    grid-row: 1 / 2;
    grid-column: 2 / 4;
    text-align: center;
    border-right: 1px solid ${BORDER_BG};
    background-color: ${HEADER_BG};
    padding: 8px;
  }
  `;

  const group1 = css`
  {
    position: sticky;
    top: 0;
    grid-row: 1 / 2;
    grid-column: 4 / 7;
    text-align: center;
    border-right: 1px solid ${BORDER_BG};
    background-color: ${HEADER_BG};
    padding: 8px;
  }
  `;

  return e('div', {className:style}, cells);
}


function create_row(field, df, options, is_header) {

  const cells = [];

  const field_name = getFieldDisplayName(field, df);
  let common_unit = options.show_common_unit && field.config?.unit;
  if (common_unit == 'none')
    common_unit = undefined;

  const style = is_header ? options.style.corner : options.style.namecell;
  const text = common_unit ? `${field_name}, ${common_unit}` : field_name;
  const namecell = e('div', {key: field.name, className: style}, text);

  cells.push(namecell);

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
    const style = is_header ? options.style.headercell : cx(color, options.style.valcell);
    const cell = e('div', {key:key, className: style}, text);

    cells.push(cell);
  }

  return cells;
}

function create_group(name, fields, df, options) {
  const groupcell = e('div', {key:'__group.' + name, className:options.style.groupcell}, name);
  const cells = fields.map(f => create_row(f, df, options, false));

  return [groupcell, ...cells];
}


// ugly, but at least extracted here from the main flow
function create_groups(fields, df, options, label) {
    const cells = [];
    const groups = [];

    const ungrouped = fields.filter(f => f?.labels?.[label] == undefined)

    fields.forEach(f => {
      const l = f?.labels?.[label];
      if (l != undefined && ! groups.includes(l))
        groups.push(l);
    })

    cells.push(
      ungrouped.map(f => create_row(f, df, options, false))
    )

    groups.forEach(g => {
      cells.push(
        create_group(g, fields.filter(f => f?.labels?.[label] == g), df, options)
      )
    })

    return cells;
}

export function VTable({ data, options: opts, height, width }: Props) {
  const count = data.series?.length;
  const df = data.series[0];

  const has_fields = df?.fields.length;

  if (!count || !has_fields)
    return e('div', null, 'No data');

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

  let fields = df.fields;
  let cells = [];

  if (options.first_value_is_category) {
    cells.push(create_row(fields[0], df, options, true));
    fields = fields.slice(1);
  }

  // ok, grouping here
  const label = options.group_by_label;

  if (label) {
    cells.push(
      create_groups(fields, df, options, label)
    );
  }
  else {
      cells.push(
        fields.map(f => create_row(f, df, options, false))
      )
  }

  return e(Grid, {
    height,
    width,
    widths,
    horizontal:is_hor,
    nrows:df.fields[0].values.length,
    cells: cells,
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
        /* border-right: 1px solid ${BORDER_BG}; */
        color: #33a2e5;
        padding: 8px;
        /* align-self: end; */
    }`,
    namecell: css`
    {
      position: sticky;
      left: 0;
      /* border-right: 1px solid ${BORDER_BG}; */
      border-bottom: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
      /* color: #33a2e5; */
      color: #9fa7b3;
      padding: 8px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding-left: 8px;
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
      color: #33a2e5;
      text-align: right;
      padding: 8px;
      z-index: 1;
    }
    `,
    valcell: css`
    {
      text-align: right;
      padding: 8px;
      border-bottom: 1px solid ${BORDER_BG};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
    groupcell: css`
    {
      position: sticky;
      left: 0;
      /* border-bottom: 1px solid ${BORDER_BG}; */
      background-color: ${HEADER_BG};
      color: #9fa7b3;
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