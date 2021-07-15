import { config } from '@grafana/runtime';
import { css } from 'emotion';

interface ClassBuildInput {
    field: {
        name: string;
        value: string;
    },
    dimfield: {
        name: string;
        value: string;
    },
    grouplabel: string;
    grid: string;
}

export interface GridStyle {
    get_fieldstyle: (dim?: boolean) => {
        nameclass: string;
        valueclass: string;
    },
    grouplabel: string;
    grid: string;
}

interface StyleBuildOptions {
    dim: string;
    hl: string;
    panel_bg: string
    border_bg: string;
}

function build_classes(style: ClassBuildInput, prefix: string) {
    return {
        [prefix + '__field__name']: style.field.name,
        [prefix + '__field__value']: style.field.value,
        [prefix + '__field--dim__name']: style.dimfield.name,
        [prefix + '__field--dim__value']: style.dimfield.value,
        [prefix + '__grouplabel']: style.grouplabel,
        [prefix]: style.grid,
    }
}

function build_all() {

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
        ...build_classes(build_vstyle(normal_opts), 'panel__grid'),
        ...build_classes(build_hstyle(normal_opts), 'panel__grid--horizontal'),
        ...build_classes(build_vstyle(transparent_opts), 'panel--transparent__grid'),
        ...build_classes(build_hstyle(transparent_opts), 'panel--transparent__grid--horizontal')
    }
}

function build_vstyle(opts: StyleBuildOptions): ClassBuildInput {

    const { cell, sticky, bborder, scrollbars, lborder, rborder, aligns } = build_common_style(opts);

    return {
        field: {
            name: css(cell, sticky, bborder, aligns, css`
                left: 0;
                z-index: 2;
                color: var(--dim);
                `),
            value: css(cell, bborder, aligns, css`
                text-align: right;
                `)
        },
        dimfield: {
            name: css(cell, sticky, bborder, aligns, css`
                left: 0;
                top: 0;
                z-index: 3;

                padding: 15px 16px 4px 16px;

                color: var(--dim);`),
            value: css(cell, sticky, bborder, aligns, css`
                top: 0;
                z-index: 1;

                padding: 15px 16px 4px 16px;

                color: var(--hl);

                text-align: right;`)
        },
        grouplabel: css(sticky, css`
            left: 0;
            z-index: 2;

            padding: 19px 4px 0px 4px;
            color: var(--hl);
            display: inline-block;
            width: auto;`),
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

function build_hstyle(opts: StyleBuildOptions): ClassBuildInput {

    const { cell, sticky, bborder, scrollbars, lborder, rborder, aligns } = build_common_style(opts);

    return {
        field: {
            name: css(cell, sticky, bborder, aligns, css`
                top: 0;
                z-index: 1;

                color: ${opts.hl};

                padding: 7px 16px 4px 16px;

                text-align: right;
                white-space: normal;`
            ),
            value: css(cell, bborder, aligns, css`
                text-align: right;
                `),
        },
        dimfield: {
            name: css(cell, sticky, bborder, aligns, css`
                left: 0;
                top: 0;
                z-index: 3;

                padding: 7px 16px 4px 16px;

                color: ${opts.hl};

                text-align: right;
                white-space: normal;`),
            value: css(cell, sticky, bborder, aligns, css`
                left: 0;
                z-index: 2;

                color: ${opts.dim};
                text-align: right;`),
        },

        grouplabel: css(cell, sticky, lborder, rborder, css`
            top: 0;
            color: ${opts.hl};

            padding: 8px 4px 0px 4px;

            text-align: center;

            white-space: normal;`),
        grid: css(scrollbars, css`
            overflow: auto;
            padding-bottom: 16px;
        `)
    }
}


const CLASSES: { [key: string]: string } = build_all();


export function get_style(horizontal?: boolean, transparent?: boolean): GridStyle {

    const prefix = `panel${transparent ? '--transparent' : ''}__grid${horizontal ? '--horizontal' : ''}`;

    return {
        grid: CLASSES[prefix],
        grouplabel: CLASSES[`${prefix}__grouplabel`],
        get_fieldstyle: (dim) => {

            const field_prefix = `${prefix}__field${dim ? '--dim' : ''}`
            return {
                nameclass: CLASSES[`${field_prefix}__name`],
                valueclass: CLASSES[`${field_prefix}__value`]
            }
        }
    }

}