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
    scrollbars: string;
}

export interface GridStyle {
    get_fieldstyle: (dim?: boolean) => {
        get_nameclass: (align?: string) => string;
        get_valueclass: (align?: string) => string;
    },
    grouplabel: string;
    scrollbars: string;
}

interface StyleBuildOptions {
    dim: string;
    hl: string;
    sticky_bg: string
    border_bg: string;
}

function build_classes(style: ClassBuildInput, prefix: string) {
    return {
        ...with_aligns(prefix + '__field__name', style.field.name),
        ...with_aligns(prefix + '__field__value', style.field.value),
        ...with_aligns(prefix + '__field--dim__name', style.dimfield.name),
        ...with_aligns(prefix + '__field--dim__value', style.dimfield.value),
        [prefix + '__grouplabel']: style.grouplabel,
        [prefix + '__scrollbars']: style.scrollbars,
    }
}

function build_all() {

    const theme = config.theme;

    const normal_opts: StyleBuildOptions = {
        dim: theme.colors.textSemiWeak,
        hl: theme.colors.textBlue,
        sticky_bg: theme.colors.panelBg,
        border_bg: theme.colors.border1,
    }

    const transparent_opts: StyleBuildOptions = {
        ...normal_opts,
        sticky_bg: theme.colors.dashboardBg,
    }


    return {
        ...build_classes(build_vstyle(normal_opts), 'panel__grid'),
        ...build_classes(build_hstyle(normal_opts), 'panel__grid--horizontal'),
        ...build_classes(build_vstyle(transparent_opts), 'panel--transparent__grid'),
        ...build_classes(build_hstyle(transparent_opts), 'panel--transparent__grid--horizontal')
    }
}

function with_aligns(s: string, base: string) {
    return {
        [s]: base,
        [s + '--l']: css(base, css`text-align: left;`),
        [s + '--r']: css(base, css`text-align: right;`),
        [s + '--c']: css(base, css`text-align: center;`)
    }
}

function build_vstyle(opts: StyleBuildOptions): ClassBuildInput {

    const {cell, sticky, bborder, scrollbars, lborder, rborder} = build_common_style(opts);

    return {
        field: {
            name: css(cell, sticky, bborder, css`
                left: 0;
                z-index: 2;
                color: ${opts.dim};`),
            value: css(cell, bborder, css`
                text-align: right;`)
        },
        dimfield: {
            name: css(cell, sticky, bborder, css`
                left: 0;
                top: 0;
                z-index: 3;

                padding: 15px 16px 4px 16px;

                color: ${opts.dim};`),
            value: css(cell, sticky, bborder, css`
                top: 0;
                z-index: 1;

                padding: 15px 16px 4px 16px;

                color: ${opts.hl};

                text-align: right;`)
        },
        grouplabel: css(sticky, css`
            left: 0;
            z-index: 2;

            padding: 19px 4px 0px 4px;
            color: ${opts.hl};`),
        scrollbars,
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
            background-color: ${opts.sticky_bg};`,
        scrollbars: css`
            ::-webkit-scrollbar {
                height: revert;
            }
            ::-webkit-scrollbar-corner {
                background-color: ${opts.sticky_bg};
            }`
    }
}

function build_hstyle(opts: StyleBuildOptions): ClassBuildInput {

    const {cell, sticky, bborder, scrollbars, lborder, rborder} = build_common_style(opts);

    return {
        field: {
            name: css(cell, sticky, bborder, css`
                top: 0;
                z-index: 1;

                color: ${opts.hl};

                padding: 7px 16px 4px 16px;

                text-align: right;
                white-space: normal;`),
            value: css(cell, bborder, css`
                text-align: right;`),
        },
        dimfield: {
            name: css(cell, sticky, bborder, css`
                left: 0;
                top: 0;
                z-index: 3;

                padding: 7px 16px 4px 16px;

                color: ${opts.hl};

                text-align: right;
                white-space: normal;`),
            value: css(cell, sticky, bborder, css`
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
        scrollbars
    }
}


const CLASSES: { [key: string]: string } = build_all();


export function get_style(horizontal?: boolean, transparent?: boolean): GridStyle {

    const prefix = `panel${transparent ? '--transparent' : ''}__grid${horizontal ? '--horizontal' : ''}`;

    return {
        grouplabel: CLASSES[`${prefix}__grouplabel`],
        scrollbars: CLASSES[`${prefix}__scrollbars`],
        get_fieldstyle: (dim) => {
            const field_prefix = `${prefix}__field${dim ? '--dim' : ''}`
            return {
                get_nameclass: (align) => { return CLASSES[`${field_prefix}__name${align ? '--' + align : ''}`] },
                get_valueclass: (align) => { return CLASSES[`${field_prefix}__value${align ? '--' + align : ''}`] }
            }
        }
    }

}