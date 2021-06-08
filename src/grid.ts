import React from 'react';

export interface GridField {
    values: React.ReactElement[];
}

export interface GridGroup {
    label?: React.ReactElement;
    fields: GridField[];
}

export interface GridProps {

    className?: string;

    colws?: number[];
    rowhs?: number[];

    groups: GridGroup[];
}

function calc_sizes(spec: number[] | undefined, n: number, defsize: string) {
    const sizes = Array(n).fill(defsize);

    if (! spec)
        return sizes;

    for (var i = 0; i < n; i++) {
        const v = spec[i];
        if (v && v > 0)
            sizes[i] = `${v}px`;
    }

    return sizes;
}

export function VGrid(props: GridProps) {
    const groups = props.groups;

    const cells: React.ReactNode[] = [];
    const ncols = groups.find(g => g.fields.length)?.fields[0].values.length ?? 0;
    let nrows = 0;

    groups.forEach(g => {
        // NOTE: justify-self is for the [likely to be used] sticky to work
        if (g.label) {
            const new_style = {...g.label.props?.style, 'grid-column': `1 / span ${ncols}`, 'justify-self': 'start'}
            cells.push(React.cloneElement(g.label, {style: new_style}));
        }
        g.fields.forEach(f => cells.push(...f.values))
        nrows += g.fields.length;
    })

    // TODO: investigate the minmax etc
    const gtcs = calc_sizes(props.colws, ncols, 'minmax(max-content, 1fr)')
    const gtrs = calc_sizes(props.rowhs, nrows, 'max-content')

    const style = {
        'display': 'grid',
        'grid-template-columns': gtcs.join(' '),
        'grid-template-rows': gtrs.join(' '),
    }

    return React.createElement('div', { style, className: props.className }, cells);
}


export function HGrid(props: GridProps) {
    const groups = props.groups;

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
                                 : React.createElement('div', {style: new_style});
            cells.push(cell);
            col1 += g.fields.length;
        })
    }

    // TODO: some flatmap should be faster
    let ncols = 0;  // this is needed for the widths only

    groups.forEach(g => {
        g.fields.forEach(f => {cells.push(...f.values)})
        ncols += g.fields.length;
    })

    // minmax(max-content, 1fr)
    const gtcs = calc_sizes(props.colws, ncols, 'auto');
    const gtrs = calc_sizes(props.rowhs, nrows, 'max-content');

    const style = {
        'display': 'grid',
        'grid-template-columns': gtcs.join(' '),
        'grid-template-rows': gtrs.join(' '),
        'grid-auto-flow': 'column',
    }

    return React.createElement('div', { style, className: props.className }, cells);
}