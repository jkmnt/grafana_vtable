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
    catfield: {
        name: string;
        value: string;
    },
    grouplabel: string;
}

export function useGridStyle(is_horizontal: boolean): GridStyle {
    const theme = useTheme();
    return is_horizontal ? get_hstyle(theme) : get_vstyle(theme);
}

function get_vstyle(theme: GrafanaTheme): GridStyle {
    return {

        field: {
            name: css`
        {
            position: sticky;
            left: 0;
            z-index: 2;

            padding: 8px;
            background-color: ${STICKY_BG};
            color: ${DIM};

            border-bottom: 1px solid ${BORDER_BG};

            white-space: nowrap;
        }`,
            value: css`
        {
            padding: 8px;

            text-align: right;

            border-bottom: 1px solid ${BORDER_BG};

            white-space: nowrap;
        }`,
        },
        catfield: {
            name: css`
        {
            position: sticky;
            top: 0;
            z-index: 3;

            left: 0;
            padding: 8px;
            background-color: ${STICKY_BG};
            color: ${DIM};
        }`,
            value: css`
        {
            position: sticky;
            top: 0;
            z-index: 1;

            padding: 8px;
            background-color: ${STICKY_BG};
            color: ${HL};

            text-align: right;
        }`,
        },
        grouplabel: css`
    {
        position: sticky;
        left: 0;
        z-index: 2;

        padding: 16px 8px 0 4px;
        background-color: ${STICKY_BG};
        color: ${HL};

        white-space: nowrap;
    }`,
    }
}

function get_hstyle(theme: GrafanaTheme): GridStyle {
    return {

        field: {
            name: css`
        {
            position: sticky;
            top: 0;
            z-index: 1;

            padding: 8px;

            color: ${HL};

            border-right: 1px solid ${BORDER_BG};
            background-color: ${STICKY_BG};

            text-align: right;
        }`,
            value: css`
        {
            padding: 8px;

            text-align: right;

            border-bottom: 1px solid ${BORDER_BG};
            white-space: nowrap;
        }`,
        },
        catfield: {
            name: css`
        {
            position: sticky;
            top: 0;
            left: 0;
            z-index: 3;

            padding: 8px;

            color: ${HL};
            background-color: ${STICKY_BG};

            text-align: right;
        }`,
            value: css`
        {
            position: sticky;
            left: 0;
            z-index: 2;

            padding: 8px;

            color: ${DIM};
            background-color: ${STICKY_BG};

            border-bottom: 1px solid ${BORDER_BG};

            text-align: right;
        }`,
        },
        grouplabel: css`
    {
        position: sticky;
        top: 0;
        padding: 8px;

        color: ${HL};
        border-right: 1px solid ${BORDER_BG};
        background-color: ${STICKY_BG};

        text-align: center;
    }`
    }
}