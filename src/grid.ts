import React from 'react';

export interface GridField {
    values: React.ReactElement[];
}

export interface GridGroup {
    label?: React.ReactElement;
    fields: GridField[];
}

export interface GridProps {
    widths: string[];
    height?: number;
    width?: number;

    groups: GridGroup[];
}


export function VGrid(props: GridProps) {
    const { widths, height, width, groups} = props;

    var cells: React.ReactNode[] = [];
    const ncols = (groups.length ? groups[0].fields[0].values.length : 0);

    groups.forEach(g => {
        // NOTE: justify-self is for the [likely to be used] sticky to work
        if (g.label) {
            const new_style = {...g.label.props?.style, 'grid-column': `1 / span ${ncols}`, 'justify-self': 'start'}
            cells.push(React.cloneElement(g.label, {style: new_style}));
        }
        g.fields.forEach(f => cells.push(...f.values))
    })

    // XXX: custom widths are disabled now
    // const gtc = widths.map(e => { return e ?? 'minmax(max-content, 1fr)' }).join(' ');
    const style = {
        'display': 'grid',
        'grid-template-columns': `repeat(${ncols}, minmax(max-content, 1fr))`,
        'grid-auto-rows': 'max-content',
        'height': `${height ? height + 'px' : '100%'}`,
        'width': `${width ? width + 'px' : '100%'}`,
        'overflow': 'auto',
    }

    return React.createElement('div', { style }, cells);
}


export function HGrid(props: GridProps) {
    const { widths, height, width, groups} = props;

    var cells: React.ReactNode[] = [];

    const nrows = groups.length ? groups[0].fields[0].values.length : 0;
    const anygroups = groups.find(g => g.label);

    let col1 = 1;

    if (anygroups)
    {
        // explicitly layout all the groups headers
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
    groups.forEach(g => {
        g.fields.forEach(f => cells.push(...f.values))
    })

    // XXX: custom widths are disabled now
    // const gtc = widths.map(e => { return e ?? 'minmax(max-content, 1fr)' }).join(' ');

    const style = {
        'display': 'grid',
        'grid-template-rows': `repeat(${(anygroups ? 1 : 0) + nrows}, max-content)`,
        'grid-auto-columns': 'minmax(max-content, 1fr)',
        'grid-auto-flow': 'column',
        'height': `${height ? height + 'px' : '100%'}`,
        'width': `${width ? width + 'px' : '100%'}`,
        'overflow': 'auto',
    }

    return React.createElement('div', { style }, cells);
}