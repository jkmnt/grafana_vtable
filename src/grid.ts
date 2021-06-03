import React from 'react';

var rce = React.createElement;

export interface GridField {
    name: React.ReactElement;
    values: React.ReactElement[];
}

export interface GridGroup {
    name?: React.ReactElement;
    fields: GridField[];
}

export interface GridData {
    header?: GridField;
    groups: GridGroup[];
}

export interface GridProps {
    widths: string[];

    data: GridData;

    stickyheader?: boolean;
    stickynames?: boolean;

    height?: number;
    width?: number
}

function process_name(name: React.ReactElement, props: GridProps, is_header): React.ReactElement {
    if (!props.stickynames)
        return name;

    const style = is_header ?
        { 'left': 0, 'top': 0, 'z-index': 3, 'position': 'sticky' }
        :
        { 'left': 0,  'z-index': 1, 'position': 'sticky' };

    return React.cloneElement(name, { style });
}

export function VGrid(props: GridProps) {
    const { widths, height, width, data, stickyheader, stickynames } = props;


    var cells: React.ReactNode[] = [];

    const h = data.header;
    const gs = data.groups;

    const nvalues = h?.values.length || (gs.length ? gs[0].fields[0].values.length : 0);

    if (h)
        cells.push(h.name, h.values);

    gs.forEach(g => {
        // NOTE: justify-self is for the sticky to work
        if (g.name)
            cells.push(React.cloneElement(g.name, {style: {'grid-column': '1 / -1', 'justify-self': 'start'}}));
        g.fields.forEach(f => cells.push(f.name, f.values))
    })

    // XXX: custom widths are disabled now
    // const gtc = widths.map(e => { return e ?? 'minmax(max-content, 1fr)' }).join(' ');
    const style = {
        'display': 'grid',
        'grid-template-columns': `repeat(${1 + nvalues}, minmax(max-content, 1fr))`,
        'grid-auto-rows': 'max-content',
        'height': `${height ? height + 'px' : '100%'}`,
        'width': `${width ? width + 'px' : '100%'}`,
        'overflow': 'auto',
    }

    return rce('div', { style }, cells);
}


export function HGrid(props: GridProps) {
    const { widths, height, width, data, stickyheader, stickynames } = props;

    var cells: React.ReactNode[] = [];

    const h = data.header;
    const gs = data.groups;

    const nvalues = h?.values.length || (gs.length ? gs[0].fields[0].values.length : 0);
    const anygroups = gs.find(g => g.name);

    let col1 = 1;

    if (anygroups)
    {
        // explicitly layout all the groups
        if (h) {
            // empty div here
            cells.push(rce('div', {style: {'grid-row': '1 / 2', 'grid-column': '1 / span 1'}}));
            col1 += 1;
        }
        gs.forEach(g => {
            let cell;
            if (g.name)  {
                cell = React.cloneElement(g.name, {style: {
                    'grid-row' : '1 / 2',
                    'grid-column' : `${col1} / span ${g.fields.length}`}})
            } else{
                cell = React.createElement('div', {style: {
                    'grid-row' : '1 / 2',
                    'grid-column' : `${col1} / span ${g.fields.length}`}})
            }
            cells.push(cell);
            col1 += g.fields.length;
        })
    }

    // now flush the data to be placed automatically
    if (h)
        cells.push(h.name, h.values);

    gs.forEach((g, i) => {
        g.fields.forEach(f => cells.push(f.name, f.values))
    })

    // XXX: custom widths are disabled now
    // const gtc = widths.map(e => { return e ?? 'minmax(max-content, 1fr)' }).join(' ');

    const style = {
        'display': 'grid',
        'grid-template-rows': `repeat(${(anygroups ? 0 : 1) + 1 + nvalues}, max-content)`,
        'grid-auto-columns': 'minmax(max-content, 1fr)',
        'grid-auto-flow': 'column',
        'height': `${height ? height + 'px' : '100%'}`,
        'width': `${width ? width + 'px' : '100%'}`,
        'overflow': 'auto',
    }

    return rce('div', { style }, cells);
}