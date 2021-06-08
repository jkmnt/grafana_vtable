import React from 'react';

import { FieldOverrideContext, getFieldDisplayName, PanelPlugin } from '@grafana/data';
import { CodeEditor, CodeEditorSuggestionItem, CodeEditorSuggestionItemKind } from '@grafana/ui';
import { VTable, VTableOptions } from './vtable';

interface CustomFieldConfig {
    display_mode: string;
}

const suggestions: CodeEditorSuggestionItem[] = [
    { kind:CodeEditorSuggestionItemKind.Field, label: 'value' },
    { kind:CodeEditorSuggestionItemKind.Property, label: 'value.raw' },
    { kind:CodeEditorSuggestionItemKind.Property, label: 'value.text' },
    { kind:CodeEditorSuggestionItemKind.Property, label: 'value.style' },
    { kind:CodeEditorSuggestionItemKind.Property, label: 'value.html' },
    { kind:CodeEditorSuggestionItemKind.Field, label: 'field' },
    { kind:CodeEditorSuggestionItemKind.Property, label: 'field.name' },
    { kind:CodeEditorSuggestionItemKind.Field, label: 'lib' },
    { kind:CodeEditorSuggestionItemKind.Property, label: 'lib.moment' },
    { kind:CodeEditorSuggestionItemKind.Field, label: 'context' },
    { kind:CodeEditorSuggestionItemKind.Property, label: 'context.df' },
]

function JsEditor({value, onChange}) {
    const on_change = (s: string ) => onChange(s.trim().length ? s : undefined)

    return React.createElement(CodeEditor,
        {
            value,
            onBlur:on_change,
            onSave:on_change,
            language:'javascript',
            showMiniMap:false,
            showLineNumbers:true,
            getSuggestions: ()=> suggestions,
            height:400,
            // width:'100%',

        });
}

const fetch_groups = async (context: FieldOverrideContext) => {
    const options = [{ value: '', label: '─' }]
    if (context && context.data && context.data.length) {
        const df = context.data[0];
        const labels = []
        df.fields.filter(f => f.labels).forEach((f) =>
                Object.entries(f.labels).forEach(([k,v]) => {
                    if (k != undefined && v != undefined && ! labels.includes(k))
                        labels.push(k)
                })
        )
        console.log(labels);
        labels.forEach(l => options.push({label: l, value: l}))
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
                options.push({label: label != f.name ? `${label} (${f.name})` : f.name, value: f.name})
        })
    }
    return Promise.resolve(options);
}

export const plugin = new PanelPlugin<VTableOptions, CustomFieldConfig>(VTable)
    .setPanelOptions((builder) => {
        builder
            .addTextInput({
                path: 'custom_widths',
                name: 'Column widths',
                description: 'Comma-separated columns widths in px'
            })
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
                name: 'Layout horizontally',
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
            .addCustomEditor({
                id: 'formatcode',
                path: 'formatcode',
                name: 'Custom formatting code (unsafe!)',
                editor: JsEditor,
            })
    })
    .useFieldConfig({
        useCustomConfig: (builder) => {
            builder
                .addSelect({
                    path: 'display_mode',
                    name: 'Cell display mode',
                    description: 'Color text, background, gauge',
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
    }
    );
