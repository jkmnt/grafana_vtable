import { GrafanaTheme } from '@grafana/data';
import { useTheme } from '@grafana/ui';
import { css } from 'emotion';

export const alignstyles : {[key: string]: string}= {
    l: css`text-align: left;`,
    c: css`text-align: center;`,
    r: css`text-align: right;`,
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

export function useGridStyle(is_horizontal: boolean): GridStyle {
    const gft = useTheme();

    // cache
    if (! styles || gtheme != gft) {
        const theme : Theme = {
            dim: gft.colors.textWeak,
            hl: gft.colors.textBlue,
            sticky_bg: gft.colors.panelBg,
            border_bg: gft.colors.border1,
        }
        styles = build_styles(theme);
        gtheme = gft;

        console.log('building styles');
    }

    return is_horizontal ? styles.h : styles.v;
}

function build_styles(theme: Theme): {h: GridStyle, v: GridStyle} {

    const cell = css`
        padding: 8px;
        white-space: nowrap;
    `;
    const bborder = css`
        border-bottom: 1px solid ${theme.border_bg};
    `;
    const rborder = css`
        border-right: 1px solid ${theme.border_bg};
    `;
    const sticky = css`
        position: sticky;
        background-color: ${theme.sticky_bg};
    `;

    const v = {
        field: {
            name: css(cell, sticky, bborder, css`
                left: 0;
                z-index: 2;
                color: ${theme.dim};
            `),
            value: css(cell, bborder, css`
                text-align: right;
            `),
        },
        dimfield: {
            name: css(cell, sticky, css`
                left: 0;
                top: 0;
                z-index: 3;

                color: ${theme.dim};
            `),
            value: css(cell, sticky, css`
                top: 0;
                z-index: 1;

                color: ${theme.hl};

                text-align: right;
            `),
        },
        grouplabel: css(sticky, css`
            left: 0;
            z-index: 2;

            padding: 16px 8px 0 4px;
            color: ${theme.hl};
        `),
    }

    const h = {
        field: {
            name: css(cell, sticky, css`
                top: 0;
                z-index: 1;

                color: ${theme.hl};

                text-align: right;
                white-space: normal;
            `),
            value: css(cell, bborder, css`
                text-align: right;
            `),
        },
        dimfield: {
            name: css(cell, sticky, css`
                left: 0;
                top: 0;
                z-index: 3;

                color: ${theme.hl};

                text-align: right;
                white-space: normal;
            `),
            value: css(cell, sticky, bborder, css`
                left: 0;
                z-index: 2;

                color: ${theme.dim};
                text-align: right;
            `),
        },
        grouplabel: css(cell, sticky, css`
            top: 0;
            color: ${theme.hl};

            text-align: center;

            white-space: normal;
        `)
    }

    return {h, v};
}