import {Field as DfField } from '@grafana/data';

export interface GroupSpec {
    name?: string;
    fields: DfField[];
    is_dim?: boolean;
  }


export function get_colspecs(spec: string | undefined, maxcols: number) {
    if (!(spec && spec.length))
        return [];

    return parse_colspec(spec, maxcols);
}

export function parse_colspec(str: string, size: number): { a: string | undefined, w: number }[] {
    const re = /\s*([r|c|l]?)\s*([0-9]*)\s*/;

    const specs = str.split(',').map(f => {
        const m = f.match(re);
        const a = m && m[1] != '' ? m[1] : undefined;
        const w = m && m[2] != '' ? Number.parseInt(m[2]) : 0;

        return { a, w }
    });

    const len = specs.length;

    if (len && len < size) {
        specs.length = size;
        specs.fill(specs[len - 1], len);
    }

    return specs;
}


export function fields_to_groups(fields: DfField[], dim?: string, label?:string): GroupSpec[] {

    const groups: GroupSpec[] = [];

    if (dim && dim.length) {
        const dimfield = fields.find(f => f.name == dim);
        if (dimfield) {
            groups.push({ fields: [dimfield], is_dim: true })
            fields = fields.filter(f => f != dimfield);
        }
    }

    if (label && label.length) {
        const gm = new Map<string | undefined, DfField[]>();
        gm.set(undefined, []);

        fields.forEach(f => {
            const lab = f?.labels?.[label];
            if (!gm.has(lab))
                gm.set(lab, [])
            gm.get(lab)?.push(f)  // '?' just to calm down the linter
        }
        );

        if (!gm.get(undefined)?.length)
            gm.delete(undefined);

        groups.push(...[...gm].map(([name, fields]) => { return { name, fields } }))
    }
    else {
        groups.push({ fields }) // shortcut if no grouping
    }

    return groups;
}