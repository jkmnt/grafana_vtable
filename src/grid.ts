import React from 'react';

export interface GridField {
    values: React.ReactElement[];
}

export interface GridGroup {
    label?: React.ReactElement;
    fields: GridField[];
}

type ColAttr = {[key: string]:string}

export interface GridOptions {
    colws?: number[];
    rowhs?: number[];

    colattrs?: (ColAttr | undefined)[];
}

function calc_sizes(spec: number[] | undefined, n: number, defsize: string) {
    const sizes = Array(n).fill(defsize);

    if (! (spec && spec.length)) return sizes;

    for (var i = 0; i < n; i++) {
        const v = spec[i];
        if (v && v > 0)
            sizes[i] = `${v}px`;
    }

    return sizes;
}

export function VGrid(groups: GridGroup[], opts: GridOptions = {}) {

    const cells: React.ReactNode[] = [];
    const ncols = groups.find(g => g.fields.length)?.fields[0].values.length ?? 0;
    let nrows = 0;

    groups.forEach(g => {
        if (g.label) {
            const cell = React.createElement('div', {
                key: g.label.key,
                style: {'grid-column': `1 / -1`},
            },
                g.label
            )
            cells.push(cell);
            nrows += 1;
        }
        g.fields.forEach(f =>
            cells.push(...f.values.map((v, i) =>
                {
                    const attrs = opts?.colattrs?.[i];
                    return attrs ? React.cloneElement(v, attrs) : v
                }
            )))
        nrows += g.fields.length;
    })

    // TODO: investigate the minmax etc
    const gtcs = calc_sizes(opts.colws, ncols, 'minmax(max-content, 1fr)')
    const gtrs = calc_sizes(opts.rowhs, nrows, 'max-content')

    const style = {
        'display': 'grid',
        'grid-template-columns': gtcs.join(' '),
        'grid-template-rows': gtrs.join(' '),
    }

    return {style, children: cells}
}


export function HGrid(groups: GridGroup[], opts: GridOptions = {}) {

    const cells: React.ReactNode[] = [];

    const any_labels = groups.find(g => g.label);
    let nrows = groups.find(g => g.fields.length)?.fields[0].values.length ?? 0;

    // fixed layout all the groups label first, then let the    grid autolayout fields
    if (any_labels) {
        nrows += 1;
        let col1 = 1;

        groups.forEach(g => {
            const new_style = {
                'grid-row' : '1 / 2',
                'grid-column' : `${col1} / span ${g.fields.length}`
            };
            const cell = g.label ? React.cloneElement(g.label, {style: {...g.label.props?.style, ...new_style}})
                                 : React.createElement('div', {key: `__spacer.${col1}`, style: new_style});
            cells.push(cell);
            col1 += g.fields.length;
        })
    }

    let ncols = 0;  // this is needed for the widths only
    let colidx = 0; // running column index for injecting per-column attributes

    groups.forEach(g => {
        g.fields.forEach((f) => {
            const attrs = opts?.colattrs?.[colidx++];

            if (attrs)
                cells.push(...f.values.map(v =>
                    React.cloneElement(v, attrs)))
            else
                cells.push(...f.values)
        })
        ncols += g.fields.length;
    })

    // minmax(max-content, 1fr)
    const gtcs = calc_sizes(opts.colws, ncols, 'auto');
    const gtrs = calc_sizes(opts.rowhs, nrows, 'max-content');

    const style = {
        'display': 'grid',
        'grid-template-columns': gtcs.join(' '),
        'grid-template-rows': gtrs.join(' '),
        'grid-auto-flow': 'column',
    }

    return {style, children: cells}
}