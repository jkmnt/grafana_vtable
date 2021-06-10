import React from 'react';

import { FieldOverrideContext, getFieldDisplayName, Labels, PanelPlugin} from '@grafana/data';
import { CodeEditor, CodeEditorSuggestionItem, CodeEditorSuggestionItemKind} from '@grafana/ui';
import { VTable, VTableOptions } from './vtable';

interface CustomFieldConfig {
    display_mode: string;
}

const suggestions: CodeEditorSuggestionItem[] = [
    { kind: CodeEditorSuggestionItemKind.Field, label: 'value' },
    { kind: CodeEditorSuggestionItemKind.Property, label: 'value.raw' },
    { kind: CodeEditorSuggestionItemKind.Property, label: 'value.text' },
    { kind: CodeEditorSuggestionItemKind.Property, label: 'value.style' },
    { kind: CodeEditorSuggestionItemKind.Property, label: 'value.html' },
    { kind: CodeEditorSuggestionItemKind.Field, label: 'field' },
    { kind: CodeEditorSuggestionItemKind.Property, label: 'field.name' },
    { kind: CodeEditorSuggestionItemKind.Field, label: 'lib' },
    { kind: CodeEditorSuggestionItemKind.Property, label: 'lib.moment' },
    { kind: CodeEditorSuggestionItemKind.Field, label: 'context' },
    { kind: CodeEditorSuggestionItemKind.Property, label: 'context.df' },
]

const DEF_CODE = `
/*
    This code would be called for formatting each value.
    The object 'value' is in scope for modification.

    Set the text:
      value.text = 'foo'
    Set the style:
      value.style = {'color': 'red', 'border': '1px solid'}
    Render as html instead of text:
      value.html = '<a href="http://www.grafana.com">Go to base</a>'
    Get raw (numeric) value:
      let a = value.raw

    Extra objects are in scope to help the formatting:
      field: dataframe field of this value. The field.name is most useful here.
      context.df: whole dataframe
      lib.moment: moment.js library, handy for the datetimes.
*/

value.text = field.name + ':' + value.raw
value.style = {'color': 'red'}`;

function JsEditor({ value, onChange } : {value: string, onChange: (s: string) => void}) {
    return React.createElement(CodeEditor,
        {
            value,
            onBlur: onChange,
            onSave: onChange,
            language: 'javascript',
            showMiniMap: false,
            showLineNumbers: true,
            getSuggestions: () => suggestions,
            height: 400,
            // width:'100%',

        });
}

const fetch_groups = async (context: FieldOverrideContext) => {
    const options = [{ value: '', label: '─' }]
    if (context && context.data && context.data.length) {
        const df = context.data[0];
        const labels: string[] = []
        df.fields.filter(f => f.labels).forEach((f) =>
            Object.entries(f.labels as Labels).forEach(([k, v]) => {
                if (k != undefined && v != undefined && !labels.includes(k))
                    labels.push(k)
            })
        )
        labels.forEach(l => options.push({ label: l, value: l }))
    }
    return Promise.resolve(options);
}

const fetch_fields = async (context: FieldOverrideContext) => {
    const options = [{ value: '', label: '─' }]
    if (context && context.data && context.data.length) {
        const df = context.data[0];
        df.fields.forEach(
            f => {
                const label = getFieldDisplayName(f, df)
                options.push({ label: label != f.name ? `${label} (${f.name})` : f.name, value: f.name })
            })
    }
    return Promise.resolve(options);
}

export const plugin = new PanelPlugin<VTableOptions, CustomFieldConfig>(VTable)

plugin.setPanelOptions((builder) => {
    builder
        .addSelect({
            path: 'dimension_field',
            name: 'Dimension field name',
            settings: {
                allowCustomValue: true,
                options: [],
                getOptions: fetch_fields,
            },
            defaultValue: '',
        })
        .addBooleanSwitch({
            path: 'is_horizontal',
            name: 'Horizontal layout ',
            defaultValue: false,
        })
        .addBooleanSwitch({
            path: 'show_common_unit',
            name: 'Show common unit',
            defaultValue: true,
        })
        .addSelect({
            path: 'group_by_label',
            name: 'Group by label',
            settings: {
                allowCustomValue: true,
                options: [],
                getOptions: fetch_groups,
            },
            defaultValue: '',
        })
        .addTextInput({
            path: 'custom_columns',
            name: 'Custom column widths and text alignments',
            description: 'Comma-separated format string: r100, c200, l300, etc'
        })
        .addSelect({
            path: 'sort.field',
            name: 'By field',
            settings: {
                allowCustomValue: true,
                options: [],
                getOptions: fetch_fields,
            },
            defaultValue: '',
            category: ['Sort'],
        })
        .addBooleanSwitch({
            path: 'sort.desc',
            name: 'Descending',
            category: ['Sort'],
        })
        .addBooleanSwitch({
            path: 'sort.zeronull',
            name: 'Treat zeros as nulls',
            category: ['Sort'],
        })
        .addBooleanSwitch({
            path: 'sort.nullfirst',
            name: 'Nulls go first',
            category: ['Sort'],
        })
        .addBooleanSwitch({
            path: 'use_formatcode',
            name: 'Use formatting code (DANGER!)',
            category: ['Custom formatting'],
            defaultValue: false,
        })
        .addCustomEditor({
            id: 'formatcode',
            path: 'formatcode',
            name: 'Code',
            showIf: (options) => options.use_formatcode,
            category: ['Custom formatting'],
            editor: JsEditor,
            defaultValue: DEF_CODE,
        })
})

plugin.useFieldConfig({
    useCustomConfig: (builder) => {
        builder
            .addRadio({
                path: 'display_mode',
                name: 'Cell display mode',
                settings: {
                    options: [
                        { value: 'auto', label: 'Auto' },
                        { value: 'fg', label: 'Color text' },
                        { value: 'bg', label: 'Color background' },
                    ],
                },
                defaultValue: 'auto'
            })
    }
})