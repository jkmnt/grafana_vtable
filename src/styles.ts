import { config } from '@grafana/runtime';
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
    scrollbars: string;
}

interface StyleOptions {
    dim: string;
    hl: string;
    sticky_bg: string
    border_bg: string;
}

function make_all() {
    const theme = config.theme;

    const opts : StyleOptions = {
        dim: theme.colors.textSemiWeak,
        hl: theme.colors.textBlue,
        sticky_bg: theme.colors.panelBg,
        border_bg: theme.colors.border1,
    }

    return {
        normal: build_styles(opts),
        transparent: build_styles({...opts, sticky_bg: theme.colors.dashboardBg})
    }
}

function build_styles(opts: StyleOptions): {h: GridStyle, v: GridStyle} {

    const cell = css`
        padding: 9px 16px 9px 16px;
        white-space: nowrap;
    `;
    const bborder = css`
        border-bottom: 1px solid ${opts.border_bg};
    `;
    const tborder = css`
        border-top: 1px solid ${opts.border_bg};
    `;
    const rborder = css`
        border-right: 1px solid ${opts.border_bg};
    `;
    const lborder = css`
        border-left: 1px solid ${opts.border_bg};
    `;
    const sticky = css`
        position: sticky;
        background-color: ${opts.sticky_bg};
    `;

    const scrollbars = css`
      ::-webkit-scrollbar {
        height: revert;
      }
      ::-webkit-scrollbar-corner {
        background-color: ${opts.sticky_bg};
      }`

    const v = {
        field: {
            name: css(cell, sticky, bborder, css`
                left: 0;
                z-index: 2;
                color: ${opts.dim};
            `),
            value: css(cell, bborder, css`
                text-align: right;
            `),
        },
        dimfield: {
            name: css(cell, sticky, bborder, css`
                left: 0;
                top: 0;
                z-index: 3;

                padding: 15px 16px 4px 16px;

                color: ${opts.dim};
            `),
            value: css(cell, sticky, bborder, css`
                top: 0;
                z-index: 1;

                padding: 15px 16px 4px 16px;

                color: ${opts.hl};

                text-align: right;
            `),
        },
        grouplabel: css(sticky, css`
            left: 0;
            z-index: 2;

            padding: 19px 4px 0px 4px;
            color: ${opts.hl};
        `),
        scrollbars,
    }

    const h = {
        field: {
            name: css(cell, sticky, bborder, css`
                top: 0;
                z-index: 1;

                color: ${opts.hl};

                padding: 7px 16px 4px 16px;

                text-align: right;
                white-space: normal;
            `),
            value: css(cell, bborder, css`
                text-align: right;
            `),
        },
        dimfield: {
            name: css(cell, sticky, bborder, css`
                left: 0;
                top: 0;
                z-index: 3;

                padding: 7px 16px 4px 16px;

                color: ${opts.hl};

                text-align: right;
                white-space: normal;
            `),
            value: css(cell, sticky, bborder, css`
                left: 0;
                z-index: 2;

                color: ${opts.dim};
                text-align: right;
            `),
        },
        grouplabel: css(cell, sticky, lborder, rborder, css`
            top: 0;
            color: ${opts.hl};

            padding: 8px 4px 0px 4px;

            text-align: center;

            white-space: normal;
        `),
        scrollbars,
    }

    return {h, v};
}


const styles = make_all();

export function useGridStyle(is_horizontal: boolean, transparent: boolean): GridStyle {
    return (transparent ? styles.transparent : styles.normal)[is_horizontal ? 'h' : 'v'];
}