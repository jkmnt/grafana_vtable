import { config } from '@grafana/runtime';
import { css } from 'emotion';

export interface GridStyle {
    namecell: string;
    valuecell: string;
    grouplabel: string;
    grid: string;
}

interface GridStyles {
    vertical: {
        filled: GridStyle,
        transparent: GridStyle,
    },
    horizontal: {
        filled: GridStyle,
        transparent: GridStyle,
    }
}

interface StyleBuildOptions {
    dim: string;
    hl: string;
    panel_bg: string
    border_bg: string;
}

function build_all(): GridStyles {

    const theme = config.theme;

    const normal_opts: StyleBuildOptions = {
        dim: theme.colors.textSemiWeak,
        hl: theme.colors.textBlue,
        panel_bg: theme.colors.panelBg,
        border_bg: theme.colors.border1,
    }

    const transparent_opts: StyleBuildOptions = {
        ...normal_opts,
        panel_bg: theme.colors.dashboardBg,
    }


    return {
        vertical: {
            filled: build_vstyle(normal_opts),
            transparent: build_vstyle(transparent_opts),
        },
        horizontal: {
            filled: build_hstyle(normal_opts),
            transparent: build_hstyle(transparent_opts),
        }
    }
}

function build_vstyle(opts: StyleBuildOptions): GridStyle {

    const { cell, bborder, scrollbars, lborder, rborder, aligns } = build_common_style(opts);

    return {
        namecell: css(cell, bborder, aligns, css`
                position: sticky;
                background-color: var(--panel_bg);
                left: 0;
                z-index: 2;
                color: var(--dim);
                &[data-is_dimension] {
                    top: 0;
                    z-index: 3;
                    padding: 15px 16px 4px 16px;
                }`),
        valuecell: css(cell, bborder, aligns, css`
                text-align: right;
                &[data-is_dimension] {
                    position: sticky;
                    background-color: var(--panel_bg);
                    top: 0;
                    z-index: 1;
                    padding: 15px 16px 4px 16px;
                    color: var(--hl);
                }`)
        ,
        grouplabel: css`
            position: sticky;
            background-color: var(--panel_bg);
            left: 0;
            z-index: 2;

            padding: 19px 4px 0px 4px;
            color: var(--hl);
            display: inline-block;
            width: auto;`,
        grid: css(scrollbars, css`
            overflow: auto;
            position: relative;
            --panel_bg: ${opts.panel_bg};
            --dim: ${opts.dim};
            --hl: ${opts.hl};
            --border_bg: ${opts.border_bg};
        `)
    }
}


function build_common_style(opts: StyleBuildOptions) {
    return {
        cell: css`
            padding: 9px 16px 9px 16px;
            white-space: nowrap;`,
        bborder: css`
            border-bottom: 1px solid ${opts.border_bg};`,
        tborder: css`
            border-top: 1px solid ${opts.border_bg};`,
        rborder: css`
            border-right: 1px solid ${opts.border_bg};`,
        lborder: css`
            border-left: 1px solid ${opts.border_bg};`,
        sticky: css`
            position: sticky;
            background-color: var(--panel_bg);`,
        scrollbars: css`
            ::-webkit-scrollbar {
                height: revert;
            }
            ::-webkit-scrollbar-corner {
                background-color: var(--panel_bg);
            }`,
        aligns: css`
            &[data-align='l'] {
                text-align: left;
            }
            &[data-align='c'] {
                text-align: center;
            }
            &[data-align='r'] {
                text-align: right;
            }`
    }
}

function build_hstyle(opts: StyleBuildOptions): GridStyle {

    const { cell, bborder, scrollbars, lborder, rborder, aligns } = build_common_style(opts);

    return {
        namecell: css(cell, bborder, aligns, css`
            position: sticky;
            background-color: var(--panel_bg);
            top: 0;
            z-index: 1;

            color: var(--hl);

            padding: 7px 16px 4px 16px;

            text-align: right;
            white-space: normal;

            &[data-is_dimension] {
                left: 0;
                z-index: 3;
            }`),
        valuecell: css(cell, bborder, aligns, css`
            text-align: right;
            &[data-is_dimension] {
                position: sticky;
                background-color: var(--panel_bg);
                left: 0;
                z-index: 2;
                color: var(--dim);
            }`),
        grouplabel: css(cell, lborder, rborder, css`
            position: sticky;
            background-color: var(--panel_bg);
            top: 0;
            color: var(--hl);

            padding: 8px 4px 0px 4px;

            text-align: center;

            white-space: normal;`),
        grid: css(scrollbars, css`
            overflow: auto;
            --panel_bg: ${opts.panel_bg};
            --dim: ${opts.dim};
            --hl: ${opts.hl};
            --border_bg: ${opts.border_bg};
        `)
    }
}


const STYLES: GridStyles = build_all();

export function get_style(horizontal?: boolean, transparent?: boolean): GridStyle {

    const t = horizontal ? STYLES.horizontal : STYLES.vertical;
    return transparent ? t.transparent : t.filled;
}