import React from 'react';

export interface GridField {
    values: React.ReactElement[];
}

export interface GridGroup {
    label?: React.ReactElement;
    fields: GridField[];
}

type ColAttr = { [key: string]: string }

export interface GridOptions {
    colws?: number[];
    rowhs?: number[];

    colattrs?: (ColAttr | undefined)[];
}

function calc_sizes(spec: number[] | undefined, n: number, defsize: string) {
    const sizes = Array(n).fill(defsize);

    if (!(spec && spec.length)) return sizes;

    for (var i = 0; i < n; i++) {
        const v = spec[i];
        if (v && v > 0)
            sizes[i] = `${v}px`;
    }

    return sizes;
}

export function VGrid(groups: GridGroup[], opts: GridOptions = {}) {

    const cells: React.ReactNode[] = [];

    let ncols = 0;
    let row = 0;

    groups.forEach(g => {
        if (g.label) {
            const labelcell = React.cloneElement(g.label, {
                style: {
                    ...g.label.props?.style,
                    'grid-row': `${row + 1}`,
                    'grid-column': `1/-1`,
                },
            })
            cells.push(labelcell);
            row += 1;
            ncols = Math.max(ncols, 1)
        }

        g.fields.forEach(f => {
            const fieldcells = f.values.map((v, i) =>
                React.cloneElement(v, {
                    style: {
                        ...v.props?.style,
                        'grid-row': `${row + 1}`,
                        'grid-column': `${i + 1}`,
                    },
                    ...opts?.colattrs?.[i]
                })
            )

            cells.push(fieldcells);
            ncols = Math.max(ncols, f.values.length)
            row += 1;
        })
    })

    // TODO: investigate the minmax etc
    const gtcs = calc_sizes(opts.colws, ncols, 'minmax(max-content, 1fr)')
    //const gtrs = calc_sizes(opts.rowhs, row, 'max-content')

    const style = {
        'display': 'grid',
        'grid-template-columns': gtcs.join(' ')
    }

    return { style, children: cells }
}


export function HGrid(groups: GridGroup[], opts: GridOptions = {}) {

    const cells: React.ReactNode[] = [];

    const fields_startrow = groups.some(g => g.label) ? 1 : 0;

    let col = 0;

    groups.forEach(g => {
        if (g.label) {
            const cell = React.cloneElement(g.label, {
                style: {
                    ...g.label.props?.style,
                    'grid-row': '1',
                    'grid-column': `${col + 1}/span ${g.fields.length}`
                }
            })
            cells.push(cell);
        }

        g.fields.forEach((f) => {
            const attrs = opts?.colattrs?.[col];
            const fields = f.values.map((v, i) =>
                React.cloneElement(v, {
                    style: {
                        ...v.props?.style,
                        'grid-row': `${fields_startrow + i + 1}`,
                        'grid-column': `${col + 1}`,
                    },
                    ...attrs
                }))

            cells.push(...fields)
            col += 1;
        })
    })


    // minmax(max-content, 1fr)
    const gtcs = calc_sizes(opts.colws, col, 'auto');
    //const gtrs = calc_sizes(opts.rowhs, startrow, 'max-content');

    const style = {
        'display': 'grid',
        'grid-template-columns': gtcs.join(' '),
    }

    return { style, children: cells }
}