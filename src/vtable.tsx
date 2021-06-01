import React from 'react';

import { PanelProps, getFieldDisplayName, formattedValueToString, Field, FormattedValue, DataFrame, ThresholdsConfig, Vector } from '@grafana/data';
import { VTableOptions } from './types';
import { css, cx } from 'emotion';
import { getTextColorForBackground, useTheme } from '@grafana/ui';
import { getDisplayProcessor } from '@grafana/data';
import moment from 'moment';

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


function get_styles(options) {

  const namecol_size = options.namecol_width ? options.namecol_width + 'px' : 'max-content';
  const valcol_size = options.valcol_width ? options.valcol_width + 'px' : 'max-content';


  const styles = ! options.is_horizontal ?
  {
    table: css`
    {
      display: grid;
      grid-template-columns: ${namecol_size} repeat(${options.nvalues}, ${valcol_size});
      grid-auto-rows: 40px;
      height: ${options.height}px;
      width: ${options.width}px;
      overflow: auto;
    }`,
    corner: css`
    {
        position: sticky;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: ${HEADER_BG};
        border-bottom: 1px solid ${BORDER_BG};
        border-right: 1px solid ${BORDER_BG};
        color: #33a2e5;
        padding: 16px;
        text-align: right;
    }`,
    namecol: css`
    {
      position: sticky;
      left: 0;
      border-right: 1px solid ${BORDER_BG};
      border-bottom: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
      /* color: #33a2e5; */
      color: #9fa7b3;
      padding: 16px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }`,
    groupcol: css`
    {
      position: sticky;
      left: 0;
      border-bottom: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
      color: #33a2e5;
      padding: 16px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      grid-column: 1 / -1; /* this is fantastic option but should be debugged */
      align-self: end;
    }`,
    header: css`
    {
      position: sticky;
      top: 0;
      border-bottom: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
      color: #33a2e5;
      text-align: right;
      padding: 16px;
    }
    `,
    valcol: css`
    {
      text-align: right;
      padding: 16px;
      border-bottom: 1px solid ${BORDER_BG};
    }
    `
  } :
  // horizontal
  {
    table: css`
    {
      display: grid;
      grid-template-columns: repeat(${options.nfields}, ${valcol_size});
      grid-template-rows: ${namecol_size} repeat(${options.nvalues}, 40px);
      grid-auto-flow: column;
      height: ${options.height}px;
      width: ${options.width}px;
      overflow: auto;
    }`,
    corner: css`
    {
        position: sticky;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: ${HEADER_BG};
        border-bottom: 1px solid ${BORDER_BG};
        border-right: 1px solid ${BORDER_BG};
        color: #33a2e5;
        padding: 16px;
    }`,
    namecol: css`
    {
      position: sticky;
      top: 0;
      border-bottom: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
      color: #33a2e5;
      text-align: right;
      padding: 16px;
    }`,
    header: css`
    {
      position: sticky;
      left: 0;
      border-right: 1px solid ${BORDER_BG};
      border-bottom: 1px solid ${BORDER_BG};
      background-color: ${HEADER_BG};
      color: #33a2e5;
      text-align: left;
      padding: 16px;
    }
    `,
    valcol: css`
    {
      text-align: right;
      padding: 16px;
      border-bottom: 1px solid ${BORDER_BG};
    }
    `
  }

  return styles;
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

  height: number;
  width: number;

  children: any[];
}

function Grid({ widths, height, width, children: rows }: GridProps) {

  // compose heights
  const gtc = widths.map(e => { return e ?? 'minmax(max-content, 1fr)' }).join(' ');
  const gtr = rows.map(e => { return e.height ?? 'max-content' }).join(' ');

  const style = css`
  {
    display: grid;
    grid-template-columns: ${gtc};
    grid-template-rows: ${gtr};
    height: ${height}px;
    width: ${width}px;
    overflow: auto;
  }`;

  const cells = rows.flatMap(r => r.cols);

  return (
    <div className={style}>
      {cells}
    </div>)
}


function create_row(field, df, options, is_header) {

  const cells = [];

  const field_name = getFieldDisplayName(field, df);
  let unit_at_name;
  unit_at_name = options.show_unit == 'name' && field.config?.unit;

  if (unit_at_name == 'none')
    unit_at_name = undefined;

  const style = is_header ? STYLES.corner : STYLES.namecell;
  const text = unit_at_name ? `${field_name}, ${unit_at_name}` : field_name;
  const namecell = <span key={field.name} className={style}>{text}</span>

  cells.push(namecell);

  if (! field.display)
    field.display = getDisplayProcessor({ field });

  const show_unit = options.show_unit == 'eachcol';

  for (var i=0; i < field.values.length; i++) {

    const key = field.name + '.' + i;

    let v = field.values.get(i);
    if (v == null)
      v = undefined;
    let dv = field.display(v);

    let text = show_unit ? formattedValueToString(dv) : dv.text;
    const color = colorize_cell(field.config.custom?.display_mode, dv.color);

    text = hack_presentation(field, v, text);
    const style = is_header ? STYLES.headercell : cx(color, STYLES.valcell);
    const cell = <span key={key} className={style}>{text}</span>;

    cells.push(cell);
  }

  return { height: '40px', cols: cells}
}

function create_group(name, fields, df, options) {
  const groupcell = <span key={'__group.' + name} className={STYLES.groupcell}>{name}</span>;
  const rows = fields.map(f => create_row(f, df, options, false));

  return [{height: '40px', cols:[groupcell]}, ...rows]
}

function create_custom_header(str: string) {

  const names = str.split(',').map(s => s.trim());

  const cells = names.map((c, i) => {
    const style = i == 0  ? STYLES.corner : STYLES.headercell;
    return <span key={'__custom_header.' + i} className={style}>{c}</span>;
  })

  return { height: '40px', cols: cells }
}

export function VTable({ data, options, height, width }: Props) {
  const count = data.series?.length;
  const df = data.series[0];

  const has_fields = df?.fields.length;

  if (!count || !has_fields)
    return <div>No data</div>;

  let widths = Array(df.fields[0].values.length + 1);

  widths[0] = options.namecol_width ? options.namecol_width + 'px' : undefined;
  widths.fill(options.valcol_width ? options.valcol_width + 'px' : undefined, 1)

  let fields = df.fields;
  let rows = [];

  if (options.show_header == 'custom' && options.custom_header) {
    rows.push(create_custom_header(options.custom_header));
  }
  else if (options.show_header == 'firstfield') {
    rows.push(create_row(fields[0], df, options, true));
    fields = fields.slice(1);
  }

  // ok, grouping here

  if (options.group_by_label) {

    const label = options.group_by_label;
    // find all the groups
    let groups = [];

    const ungrouped = fields.filter(f => f?.labels?.[label] == undefined)

    fields.forEach(f => {
      const l = f?.labels?.[label];
      if (l != undefined && ! groups.includes(l))
        groups.push(l);
    })

    rows = rows.concat(ungrouped.map(f => create_row(f, df, options, false)))

    groups.forEach(g => {
      const group = create_group(g, fields.filter(f => f?.labels?.[label] == g), df, options)
      rows = rows.concat(group);
    })
  }
  else {
      rows = rows.concat(fields.map(f => create_row(f, df, options, false)))
  }

  return (<Grid
    height={height}
    width={width}
    widths={widths}
  >
    {rows}
  </Grid>)
};


const STYLES = {
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
    /* align-self: end; */
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