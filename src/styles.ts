import { GrafanaTheme } from '@grafana/data';
import { useTheme } from '@grafana/ui';
import { css } from 'emotion';

//const HEADER_BG = 'rgb(32, 34, 38)';
const STICKY_BG = '#141619';
//const BORDER_BG = 'rgb(44, 50, 53)'
const BORDER_BG = '#202020'
const HL = 'rgb(51, 162, 229)'
const DIM = 'rgb(123, 128, 135)'

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

// TODO: make all styles static ? init on both themes once

export function useGridStyle(is_horizontal: boolean): GridStyle {
    const theme = useTheme();
    return is_horizontal ? get_hstyle(theme) : get_vstyle(theme);
}

function get_vstyle(theme: GrafanaTheme): GridStyle {

    const dim = theme.colors.textWeak;
    const hl = theme.colors.textBlue;
    const sticky_bg = theme.colors.panelBg;
    const border_bg = theme.colors.border1;

    return {

        field: {
            name: css`
                position: sticky;
                left: 0;
                z-index: 2;

                padding: 8px;
                background-color: ${sticky_bg};
                color: ${dim};

                border-bottom: 1px solid ${border_bg};

                white-space: nowrap;
            `,
            value: css`
                padding: 8px;

                text-align: right;

                border-bottom: 1px solid ${border_bg};

                white-space: nowrap;
            `,
        },
        dimfield: {
            name: css`
                position: sticky;
                top: 0;
                z-index: 3;

                left: 0;
                padding: 8px;
                background-color: ${sticky_bg};
                color: ${dim};
            `,
            value: css`
                position: sticky;
                top: 0;
                z-index: 1;

                padding: 8px;
                background-color: ${sticky_bg};
                color: ${hl};

                text-align: right;
            `,
        },
        grouplabel: css`
            position: sticky;
            left: 0;
            z-index: 2;

            padding: 16px 8px 0 4px;
            background-color: ${sticky_bg};
            color: ${hl};
        `,
    }
}

function get_hstyle(theme: GrafanaTheme): GridStyle {

    const dim = theme.colors.textWeak;
    const hl = theme.colors.textBlue;
    const sticky_bg = theme.colors.panelBg;
    const border_bg = theme.colors.border1;

    return {

        field: {
            name: css`
                position: sticky;
                top: 0;
                z-index: 1;

                padding: 8px;

                color: ${hl};

                border-right: 1px solid ${border_bg};
                background-color: ${sticky_bg};

                text-align: right;
            `,
            value: css`
                padding: 8px;

                text-align: right;

                border-bottom: 1px solid ${border_bg};
                white-space: nowrap;
            `,
        },
        dimfield: {
            name: css`
                position: sticky;
                top: 0;
                left: 0;
                z-index: 3;

                padding: 8px;

                color: ${hl};
                background-color: ${sticky_bg};

                text-align: right;
            `,
            value: css`
                position: sticky;
                left: 0;
                z-index: 2;

                padding: 8px;

                color: ${dim};
                background-color: ${sticky_bg};

                border-bottom: 1px solid ${border_bg};

                text-align: right;
            `,
        },
        grouplabel: css`
            position: sticky;
            top: 0;
            padding: 8px;

            color: ${hl};
            border-right: 1px solid ${border_bg};
            background-color: ${sticky_bg};

            text-align: center;
        `
    }
}

export const alignstyles = {
    l: css`text-align: left;`,
    c: css`text-align: center;`,
    r: css`text-align: right;`,
}