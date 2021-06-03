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
    width?: number;

    horizontal?: boolean;
}

function process_name(name: React.ReactElement, props: GridProps, is_header): React.ReactElement {
    if (!props.stickynames)
        return name;

    let style;
    if (is_header) {
        style = { 'left': 0, 'top': 0, 'z-index': 3 }
    }
    else {
        if (props.horizontal)
            style = { 'top': 0, 'z-index': 2 }
        else
            style = { 'left': 0, 'z-index': 1 }
    }

    return React.cloneElement(name, { style: { ...style, 'position': 'sticky' } });
}

export function Grid(props: GridProps) {

    const { widths, height, width, horizontal, data, stickyheader, stickynames } = props;

    var cells: React.ReactNode[] = [];
    let nrows = 0;

    let anyval;

    const h = data.header;
    if (h) {
        cells.push(process_name(h.name, props, true));

        if (stickyheader) {
            cells.push(h.values.map((v, i) =>
                React.cloneElement(v, {
                    style: props.horizontal ? {
                        'position': 'sticky',
                        'left': 0,
                    } :
                        {
                            'position': 'sticky',
                            'top': 0,
                        }
                })
            ));
        }
        else {
            cells.push(h.values);
        }
        nrows += 1;
        anyval = h.values;
    }

    // TODO: check if there are any groups at all

    const gs = data.groups;
    gs.forEach(g => {
        if (g.name) {
            const gname = React.cloneElement(g.name, {
                style: {
                    'position': 'sticky',
                    'left': 0,
                    'grid-column': '1 / -1',
                    'justify-self': 'start',
                }
            })
            cells.push(gname);
            nrows += 1;
        }
        g.fields.forEach(f => {
            cells.push(process_name(f.name, props, false));
            cells.push(f.values);
            nrows += 1;
            anyval = f.values;
        })
    })

    const nvalues = anyval?.length ?? 0;
    // compose heights

    // XXX: custom widths are disabled now

    // const gtc = widths.map(e => { return e ?? 'minmax(max-content, 1fr)' }).join(' ');

    let style;

    if (! horizontal){
        style = {
            'display': 'grid',
            'grid-template-columns': `repeat(${nvalues + 1}, minmax(max-content, 1fr))`,
            'grid-auto-rows': 'max-content',
            'height': `${height ? height + 'px' : '100%'}`,
            'width': `${width ? width + 'px' : '100%'}`,
            'overflow': 'auto',
        }
    }
    else {
        style = {
            'display': 'grid',
            'grid-template-rows': `max-content repeat(${nvalues}, 1fr)`,
            /* grid-auto-columns: minmax(max-content, 1fr); */
            'grid-auto-flow': 'column',
            'height': `${height ? height + 'px' : '100%'}`,
            'width': `${width ? width + 'px' : '100%'}`,
            'overflow': 'auto',
        }
    }

    return rce('div', { style }, cells);
}

