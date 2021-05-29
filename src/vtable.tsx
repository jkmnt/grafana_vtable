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
  use_inputs: boolean;
  is_header?: boolean;
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
      <td key={i}>
        <BarGauge width={200} field={config} value={dv} theme={theme} orientation={VizOrientation.Horizontal} text={{ valueSize: 14 }}
          displayMode={BarGaugeDisplayMode.Gradient} />
      </td>
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

function VTableSimpleValsRow({ field, values, show_unit, use_inputs, is_header }: VTableCellProps) {

  let row;

  // XXX: the key attributes are likely needed here for react ?

  if (!field.display) {
    row = values.toArray().map((v, i) =>
      {!use_inputs ? <span key={i} className={styles.valcol}>{v}</span>
        :
        <input value={v}></input>}
      )
  }
  else {
    row = values.toArray().map((v, i) => {
      const dv = field.display(v);
      let text = show_unit ? formattedValueToString(dv) : dv.text;
      const color = colorize_cell(field.config.custom?.display_mode, dv.color);

      text = hack_presentation(field, v, text);

      return (
        !use_inputs ? <span key={i} className={cx(color, !is_header ? styles.valcol: styles.header)}>{text}</span>
        : <input className={styles.input} value={text}></input>
      )
    })
  }

  return <>{row}</>
}

interface VTableRowProps {
  field: Field;
  df: DataFrame;
  use_inputs: boolean;
  is_header?: boolean;
}

function VTableRow({ field, df, use_inputs, is_header }: VTableRowProps) {

  const field_name = getFieldDisplayName(field, df);
  let unit = field.config?.unit;
  if (unit == 'none')
    unit = null;

  const use_gauge = field.config.custom?.display_mode == 'gradient';

  return (
    <>
      <span className={!is_header ? styles.namecol: styles.corner}>{field_name}{unit ? `, ${unit}` : ''}</span>
      { use_gauge ?
        <VTableGaugeValsRow field={field} values={field.values} show_unit={false}
        use_inputs={use_inputs}
        />
        :
        <VTableSimpleValsRow field={field} values={field.values} show_unit={false}
        use_inputs={use_inputs}
        is_header={is_header}/>
      }
    </>
    )
}


export function VTable({ data, width, height }: Props) {
  const count = data.series?.length;
  const df = data.series[0];

  const has_fields = df?.fields.length;

  // TBD: add some memoization ?

  const [show_inputs, set_show_inputs] = React.useState(false);
  const [is_horizontal, set_is_horizontal] = React.useState(false);

  const toggle_inputs = () => {
    set_show_inputs(!show_inputs);
  }

  const toggle_is_horizontal = () => {
    set_is_horizontal(!is_horizontal);
  }

  if (!count || !has_fields)
    return <div>No data</div>;

  const table_style = ! is_horizontal ?  css`
  {
    display: grid;
    grid-template-columns: 128px repeat(${df.fields[0].values.length}, 1fr);
    grid-template-rows: repeat(${df.fields.length}, 32px);
    width: ${width}px;
    height: ${height - 32}px;
    overflow: auto;
  }`:
  css`{
    display: grid;
    grid-template-columns: repeat(${df.fields.length}, 120px);
    grid-template-rows: 128px repeat(${df.fields[0].values.length}, 32px);
    grid-auto-flow: column;
    width: ${width}px;
    height: ${height - 32}px;
    overflow: auto;
  }`;


  //grid-auto-flow: row;

  //grid-template-columns: repeat(${df.fields[0].values.length + 1}, 1fr);

  //<div style={{width: width, height: height, overflow: 'auto'}}></div>

  return (
    <>
    <div>
      <Button onClick={toggle_inputs}> Toggle !</Button>
      <Button onClick={toggle_is_horizontal}> H/V !</Button>

    </div>
      <div className={table_style}>
          {df.fields.map((field, i) =>
          <VTableRow key={field.name} field={field} df={df}
          use_inputs={show_inputs} is_header={! i}
          />)}
    </div>
    </>
  )
};

// TODO: add sticky ?
// style this
const styles = {
  table: css`
  {
    display: grid;
    grid-template-columns: repeat(31, 1fr);
  }`,
  corner: css`
  {
      position: sticky;
      left: 0;
      top: 0;
      z-index: 1;
      background-color: #141619;
      color: #33a2e5;
  }`,
  namecol: css`
  {
    position: sticky;
    left: 0;
    border-right: 1px solid black;
    background-color: #141619;
    color: #33a2e5;
    padding: 4px;
  }`,
  header: css`
  {
    position: sticky;
    top: 0;
    border-bottom: 1px solid black;
    background-color: #141619;
    color: #33a2e5;
    padding: 4px;
  }
  `,
  valcol: css`
  {
    text-align: right;
    padding: 4px;
  }
  `,
  unitcol: css`
  {

  }
  `,
  input: css`
  {
    margin: 4px;
    width: 64px;
  }
  `
};