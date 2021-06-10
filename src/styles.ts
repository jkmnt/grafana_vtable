import { GrafanaTheme } from '@grafana/data';
import { useTheme } from '@grafana/ui';
import { css } from 'emotion';

//const HEADER_BG = 'rgb(32, 34, 38)';
const STICKY_BG = '#141619';
//const BORDER_BG = 'rgb(44, 50, 53)'
const BORDER_BG = '#202020'
const HL = 'rgb(51, 162, 229)'
const DIM = 'rgb(123, 128, 135)'

const base = {
    cell: css`
        padding: 8px;
        white-space: nowrap;
    `,
    lsticky: css`
        position: sticky;
        left: 0;
    `,
    tsticky: css`
        position: sticky;
        top: 0;
    `,
}

export interface GridStyle {
    field: {
        name: string;
        value: string;
    },
    dimfield: {
        name: string;
        value: string;
    },
    grouplabel: string;
}

interface Theme {
    dim: string;
    hl: string;
    sticky_bg: string
    border_bg: string;
}

let styles:{h: GridStyle, v: GridStyle}|undefined = undefined;
let gtheme: GrafanaTheme;

// TODO: make all styles static ? init on both themes once.
// and compose 'em from small styles w/o redundancy

export function useGridStyle(is_horizontal: boolean): GridStyle {
    const gft = useTheme();

    if (! styles || gtheme != gft) {
        const theme : Theme = {
            dim: gft.colors.textWeak,
            hl: gft.colors.textBlue,
            sticky_bg: gft.colors.panelBg,
            border_bg: gft.colors.border1,
        }
        styles = {h: build_hstyle(theme), v:build_vstyle(theme)};
        gtheme = gft;

        console.log('building style');
    }

    return is_horizontal ? styles.h : styles.v;
}

function build_vstyle(theme: Theme): GridStyle {
    return {

        field: {
            name: css(base.cell, base.lsticky, css`
                z-index: 2;

                background-color: ${theme.sticky_bg};
                color: ${theme.dim};

                border-bottom: 1px solid ${theme.border_bg};
            `),
            value: css(base.cell, css`
                text-align: right;
                border-bottom: 1px solid ${theme.border_bg};

            `),
        },
        dimfield: {
            name: css(base.cell, base.lsticky, base.tsticky, css`
                z-index: 3;

                background-color: ${theme.sticky_bg};
                color: ${theme.dim};
            `),
            value: css(base.cell, base.tsticky, css`
                z-index: 1;

                background-color: ${theme.sticky_bg};
                color: ${theme.hl};

                text-align: right;
            `),
        },
        grouplabel: css(base.lsticky, css`
            z-index: 2;

            padding: 16px 8px 0 4px;
            background-color: ${theme.sticky_bg};
            color: ${theme.hl};
        `),
    }
}

function build_hstyle(theme: Theme): GridStyle {
    return {

        field: {
            name: css(base.cell, base.tsticky, css`
                z-index: 1;

                color: ${theme.hl};

                border-right: 1px solid ${theme.border_bg};
                background-color: ${theme.sticky_bg};

                text-align: right;
                white-space: normal;
            `),
            value: css(base.cell, css`

                text-align: right;

                border-bottom: 1px solid ${theme.border_bg};
            `),
        },
        dimfield: {
            name: css(base.cell, base.tsticky, base.lsticky, css`
                z-index: 3;

                color: ${theme.hl};
                background-color: ${theme.sticky_bg};

                text-align: right;
                white-space: normal;
            `),
            value: css(base.cell, base.lsticky, css`

                z-index: 2;

                color: ${theme.dim};
                background-color: ${theme.sticky_bg};

                border-bottom: 1px solid ${theme.border_bg};

                text-align: right;
            `),
        },
        grouplabel: css(base.cell, base.tsticky, css`
            color: ${theme.hl};
            border-right: 1px solid ${theme.border_bg};
            background-color: ${theme.sticky_bg};

            text-align: center;

            white-space: normal;
        `)
    }
}

export const alignstyles : {[key: string]: string}= {
    l: css`text-align: left;`,
    c: css`text-align: center;`,
    r: css`text-align: right;`,
}