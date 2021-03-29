import React from 'react';

import { PanelProps, getFieldDisplayName, formattedValueToString, Field, FormattedValue, DataFrame, ThresholdsConfig, Vector } from '@grafana/data';
import { VTableOptions } from './types';
import { css, cx } from 'emotion';
import { CustomScrollbar, getTextColorForBackground, useTheme } from '@grafana/ui';
import { BarGauge, BarGaugeDisplayMode } from '@grafana/ui';
import { VizOrientation, ThresholdsMode, FieldType, getDisplayProcessor, DisplayValueAlignmentFactors } from '@grafana/data';
import moment from 'moment';

const defaultGaugeScale: ThresholdsConfig = {
  mode: ThresholdsMode.Absolute,
  steps: [
    {
      color: 'blue',
      value: -Infinity,
    },
    {
      color: 'green',
      value: 20,
    },
  ],
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
}


const VTableGaugeValsRow: React.FC<VTableCellProps> = ({ field, values, show_unit }) => {

  let config = field.config;

  if (!config.thresholds)
    config = { ...config, thresholds: defaultGaugeScale };

  const theme = useTheme();

  field.display = getDisplayProcessor({ field });

  return values.toArray().map((v) => {

    let dv = field.display(v);
    if (!show_unit)
      dv = { ...dv, suffix: null };

    return (
      <td>
        <BarGauge width={200} field={config} value={dv} theme={theme} orientation={VizOrientation.Horizontal} text={{ valueSize: 14 }}
          displayMode={BarGaugeDisplayMode.Gradient} />
      </td>
    )
  })
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

const VTableSimpleValsRow: React.FC<VTableCellProps> = ({ field, values, show_unit }) => {

  if (!field.display)
    return values.toArray().map((v) => <td className={styles.valcol}>{v}</td>)

  return values.toArray().map((v) => {
    const dv = field.display(v);
    let text = show_unit ? formattedValueToString(dv) : dv.text;
    const color = colorize_cell(field.config.custom ?.display_mode, dv.color);

    text = hack_presentation(field, v, text);


    return <td className={cx(color, styles.valcol)}>{text}</td>
  })
}

interface VTableRowProps {
  field: Field;
  df: DataFrame;
}

const VTableRow: React.FC<VTableRowProps> = ({ field, df }) => {

  const field_name = getFieldDisplayName(field, df);
  let unit = field.config ?.unit;
  if (unit == 'none')
    unit = null;

  const use_gauge = field.config.custom ?.display_mode == 'gradient';

  return (<tr>
    <td className={styles.namecol}>{field_name}{unit ? `, ${unit}` : ''}</td>
    {
      use_gauge ? <VTableGaugeValsRow field={field} values={field.values} show_unit={false} />
        : <VTableSimpleValsRow field={field} values={field.values} show_unit={false} />

    }
  </tr>)
}


export const VTable: React.FC<Props> = ({ data }) => {
  const count = data.series ?.length;
  const df = data.series[0];

  const has_fields = df ?.fields.length;

  // TBD: add some memoization ?

  if (!count || !has_fields) {
    return <div>No data</div>;
  }

  return (
    <CustomScrollbar autoHide>
      <table className={styles.table}>
        <tbody>
          {df.fields.map((field, i) => <VTableRow field={field} df={df} />)}
        </tbody>
      </table>
    </CustomScrollbar>
  )
};

// style this
const styles = {
  table: css`
  {
    margin-top: 4px;
    margin-bottom: 4px;

    /*
    tbody {
      tr:nth-child(odd) {
        background: #1f1f20;
      }
    }
    */

    td {
      padding: 4px 8px;
      border: 1px solid #1f1f20;
    }
  }`,
  namecol: css`
  {
    color: #33a2e5;
  }
  `,
  valcol: css`
  {
    text-align: right;
  }
  `,
  unitcol: css`
  {

  }
  `
};