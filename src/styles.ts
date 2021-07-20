import { config } from '@grafana/runtime';
import { css } from 'emotion';

export interface GridStyle {
    namecell: string;
    valuecell: string;
    dimnamecell: string;
    dimvaluecell: string;
    grouplabel: string;
    container: string;
    grid?: string;
}

interface GridStyles {
    vertical: GridStyle,
    horizontal: GridStyle,
}


const COMMON = {
    cell: css`
        padding: 9px 16px 9px 16px;
        white-space: nowrap;
        &[data-custom_width] {
            text-overflow: ellipsis;
            overflow: hidden;
        }
        `,
    bborder: css`
        border-bottom: 1px solid var(--border_bg);`,
    tborder: css`
        border-top: 1px solid var(--border_bg);`,
    rborder: css`
        border-right: 1px solid var(--border_bg);`,
    lborder: css`
        border-left: 1px solid var(--border_bg);`,
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

const VSTYLE = {
    namecell: css(COMMON.cell, COMMON.bborder, COMMON.aligns, css`
        position: sticky;
        background-color: var(--panel_bg);
        left: 0;
        z-index: 2;
        color: var(--dim);
        `),
    valuecell: css(COMMON.cell, COMMON.bborder, COMMON.aligns, css`
        text-align: right;
        `),
    dimnamecell: css(COMMON.cell, COMMON.bborder, COMMON.aligns, css`
        position: sticky;
        background-color: var(--header_bg);
        left: 0;
        top: 0;
        z-index: 3;
        color: var(--dim);
        padding: 15px 16px 4px 16px;`),
    dimvaluecell: css(COMMON.cell, COMMON.bborder, COMMON.aligns, css`
        text-align: right;
        position: sticky;
        background-color: var(--header_bg);
        top: 0;
        z-index: 1;
        padding: 15px 16px 4px 16px;
        color: var(--hl);
        `)
    ,
    // XXX: justify-self is for the horizontal sticky to work
    grouplabel: css`
        position: sticky;
        background-color: var(--panel_bg);
        left: 0;
        z-index: 2;

        padding: 19px 4px 0px 4px;
        color: var(--hl);

        justify-self: start;
        `,
}

const HSTYLE = {
    namecell: css(COMMON.cell, COMMON.bborder, COMMON.aligns, css`
        position: sticky;
        background-color: var(--header_bg);
        top: 0;
        z-index: 1;

        color: var(--hl);

        padding: 7px 16px 4px 16px;

        text-align: right;
        white-space: normal;`),
    valuecell: css(COMMON.cell, COMMON.bborder, COMMON.aligns, css`
        text-align: right;`),
    dimnamecell: css(COMMON.cell, COMMON.bborder, COMMON.aligns, css`
        position: sticky;
        background-color: var(--header_bg);
        top: 0;
        z-index: 3;
        left: 0;

        color: var(--hl);

        padding: 7px 16px 4px 16px;

        text-align: right;
        white-space: normal;`),
    dimvaluecell: css(COMMON.cell, COMMON.bborder, COMMON.aligns, css`
        text-align: right;
        position: sticky;
        background-color: var(--panel_bg);
        left: 0;
        z-index: 2;
        color: var(--dim);`),
    grouplabel: css(COMMON.cell, COMMON.lborder, COMMON.rborder, css`
        position: sticky;
        background-color: var(--panel_bg);
        top: 0;
        color: var(--hl);

        padding: 8px 4px 0px 4px;

        text-align: center;

        white-space: normal;`)
}


function build_all(): GridStyles {

    const theme = config.theme;

    const opts = {
        dim: theme.colors.textSemiWeak,
        // the blue is darken for light theme to meet a11y
        hl: theme.isDark ? theme.colors.textBlue : '#1d70c9',
        panel_bg: theme.colors.panelBg,
        border_bg: theme.colors.border1,
        dash_bg: theme.colors.dashboardBg,
        header_bg: theme.colors.pageHeaderBg,
    }

    const container = css(COMMON.scrollbars, css`
        overflow: auto;
        --panel_bg: ${opts.panel_bg};
        --dim: ${opts.dim};
        --hl: ${opts.hl};
        --border_bg: ${opts.border_bg};
        --header_bg: ${opts.header_bg};
        &[data-is_transparent] {
            --panel_bg: ${opts.dash_bg};
        }
        `
        )

    // fit-content should fix the horizontal sticky
    const grid = css`
        width: fit-content;
    `

    return {
        vertical: {...VSTYLE, container: container, grid },
        horizontal: {...HSTYLE, container: container, grid }
    }
}

export const STYLES: GridStyles = build_all();