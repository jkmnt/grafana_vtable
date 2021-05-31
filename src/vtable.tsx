import React from 'react';

import { PanelProps, getFieldDisplayName, formattedValueToString, Field, FormattedValue, DataFrame, ThresholdsConfig, Vector } from '@grafana/data';
import { VTableOptions } from './types';
import { css, cx } from 'emotion';
import { Button, CustomScrollbar, getTextColorForBackground, useTheme } from '@grafana/ui';
import { BarGauge, BarGaugeDisplayMode } from '@grafana/ui';
import { VizOrientation, ThresholdsMode, FieldType, getDisplayProcessor, DisplayValueAlignmentFactors } from '@grafana/data';
import moment from 'moment';

const defaultGaugeScale: ThresholdsConfig = {
  mode: ThresholdsMode.Absolute,
  steps: [
    { color: 'blue', value: -Infinity },
    { color: 'green', value: 20 }
  ]
};

//const HEADER_BG = 'rgb(32, 34, 38)';
const HEADER_BG = '#141619';

interface Props extends PanelProps<VTableOptions> {
}

function colorize_cell(mode: string, color: string) {

  if (!color) return '';
  if (mode == 'fg') return css`color: ${color};`;
  if (mode == 'bg') return css`background: ${color}; color: ${getTextColorForBackground(color)};`;
  return '';
}


interface VTableCellProps {
  field: Field;
  values: Vector;
  show_unit: boolean;
  is_header?: boolean;
  styles: any;
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
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        color: #33a2e5;
        padding: 4px;
        text-align: right;
    }`,
    namecol: css`
    {
      position: sticky;
      left: 0;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      background-color: ${HEADER_BG};
      /* color: #33a2e5; */
      color: #9fa7b3;
      padding: 4px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding-left: 16px;
    }`,
    groupcol: css`
    {
      position: sticky;
      left: 0;
      border-bottom: 1px solid black;
      background-color: ${HEADER_BG};
      color: #33a2e5;
      padding: 4px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      grid-column: 1 / -1; /* this is fantastic option but should be debugged */
      justify-self: start;
    }`,
    header: css`
    {
      position: sticky;
      top: 0;
      border-bottom: 1px solid black;
      background-color: ${HEADER_BG};
      color: #33a2e5;
      text-align: right;
      padding: 4px;
    }
    `,
    valcol: css`
    {
      text-align: right;
      padding: 4px;
      border-bottom: 1px solid black;
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
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        color: #33a2e5;
        padding: 4px;
    }`,
    namecol: css`
    {
      position: sticky;
      top: 0;
      border-bottom: 1px solid black;
      background-color: ${HEADER_BG};
      color: #33a2e5;
      text-align: right;
      padding: 4px;
    }`,
    header: css`
    {
      position: sticky;
      left: 0;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
      background-color: ${HEADER_BG};
      color: #33a2e5;
      text-align: left;
      padding: 4px;
    }
    `,
    valcol: css`
    {
      text-align: right;
      padding: 4px;
      border-bottom: 1px solid black;
    }
    `
  }

  return styles;
}

function VTableGaugeValsRow({ field, values, show_unit }: VTableCellProps) {

  let config = field.config;

  if (!config.thresholds)
    config = { ...config, thresholds: defaultGaugeScale };

  const theme = useTheme();

  field.display = getDisplayProcessor({ field });

  const row = values.toArray().map((v, i) => {

    let dv = field.display(v);
    if (!show_unit)
      dv = { ...dv, suffix: null };

    return (
        <BarGauge key={i} width={200} field={config} value={dv} theme={theme} orientation={VizOrientation.Horizontal} text={{ valueSize: 14 }}
          displayMode={BarGaugeDisplayMode.Gradient} />
    )
  })

  return <>{row}</>
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

interface VTableCoreProps {
  widths: string[];

  height: number;
  width: number;

  children: any[];
}

function VTableCore({widths, height, width, children: rows}: VTableCoreProps) {

  // compose heights
  const gtc = widths.map(e => {return e ?? 'max-content'}).join(' ');
  const gtr = rows.map(e => {return e.height ?? 'max-content'}).join(' ');

  const style =  css`
  {
    display: grid;
    grid-template-columns: ${gtc};
    grid-template-rows: ${gtr};
    height: ${height}px;
    width: ${width}px;
    overflow: auto;
  }`;

  console.log('here');

  var cells = [];

  rows.forEach(c => {
    cells = cells.concat(c.cols)
  })

  return (<div className={style}>
      {cells}
  </div>)
}


function create_row(field, df, options, is_header) {

  const show_unit = false;

  const field_name = getFieldDisplayName(field, df);
  let unit = field.config?.unit;
  if (unit == 'none')
    unit = null;

  const namecell = <span
      key={field.name}
      className={is_header ? STYLES.corner : STYLES.namecell}
      >
      {field_name}{unit ? `, ${unit}` : ''}
      </span>

  let printer;

  if (!field.display)
  {
    printer = (v) => {return {text: v, color: undefined}}
  }
  else
  {
    printer = (v) => {
      const dv = field.display(v);
      let text = show_unit ? formattedValueToString(dv) : dv.text;
      const color = colorize_cell(field.config.custom?.display_mode, dv.color);

      text = hack_presentation(field, v, text);

      return {text, color}
    }
  }

  const valcells = field.values.toArray().map((v, i) => {
    const {text, color} = printer(v);
    return (<span
            key={field.name + '.' + i}
            className={cx(color, is_header ? STYLES.headercell : STYLES.valcell) }>
            {text}
            </span>);
  })

  return {height: '40px', cols:[namecell, ...valcells]}
}

function create_group(name, fields, df, options) {
  const groupcell = <span
    key={'__group.' + name}
    className={STYLES.groupcell}
  >
    {name}
  </span>

  const rows = fields.map(f => create_row(f, df, options, false));

  return [{height: '40px', cols:[groupcell]}, ...rows]
}

export function VTable({ data, options, height, width, onOptionsChange }: Props) {
  const count = data.series?.length;
  const df = data.series[0];

  const has_fields = df?.fields.length;

  if (!count || !has_fields)
    return <div>No data</div>;

  /*
  const styles = get_styles(
      {
        is_horizontal:options.is_horizontal,
        nfields:df.fields.length,
        nvalues:df.fields[0].values.length,
        namecol_width: options.namecol_width,
        height: height,
        width: width,
        valcol_width: options.valcol_width
      }
  )
  */

  //grid-auto-flow: row;

  //grid-template-columns: repeat(${df.fields[0].values.length + 1}, 1fr);

  //<div style={{width: width, height: height, overflow: 'auto'}}></div>

  let widths = Array(df.fields[0].values.length + 1);

  widths[0] = options.namecol_width ? options.namecol_width + 'px' : undefined;
  widths.fill(options.valcol_width ? options.valcol_width + 'px' : undefined, 1)

  const rows = df.fields.map((f, i) =>
    create_row(f, df, options, i == 0 && options.first_field_is_header)
  )

  const g = create_group('Fofofo', df.fields.slice(0, 10), df, options);

  const allrows = rows.concat(g);

  return (<VTableCore
    height={height}
    width={width}
    widths={widths}
  >
    {allrows}
  </VTableCore>)
};


const STYLES = {
  corner: css`
  {
      position: sticky;
      left: 0;
      top: 0;
      z-index: 1;
      background-color: ${HEADER_BG};
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      color: #33a2e5;
      padding: 4px;
      text-align: right;
  }`,
  namecell: css`
  {
    position: sticky;
    left: 0;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    background-color: ${HEADER_BG};
    /* color: #33a2e5; */
    color: #9fa7b3;
    padding: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 16px;
  }`,
  groupcell: css`
  {
    position: sticky;
    left: 0;
    border-bottom: 1px solid black;
    background-color: ${HEADER_BG};
    color: #33a2e5;
    padding: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    grid-column: 1 / -1; /* this is fantastic option but should be debugged */
    justify-self: start;
  }`,
  headercell: css`
  {
    position: sticky;
    top: 0;
    border-bottom: 1px solid black;
    background-color: ${HEADER_BG};
    color: #33a2e5;
    text-align: right;
    padding: 4px;
  }
  `,
  valcell: css`
  {
    text-align: right;
    padding: 4px;
    border-bottom: 1px solid black;
  }
  `
}