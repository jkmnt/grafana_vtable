import React from 'react';

import { PanelPlugin } from '@grafana/data';
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

export const plugin = new PanelPlugin<VTableOptions, CustomFieldConfig>(VTable)
    .setPanelOptions((builder) => {
        builder
            .addTextInput({
                path: 'custom_widths',
                name: 'Column widths',
                description: 'Comma-separated columns widths in px'
            })
            .addBooleanSwitch({
                path: 'first_value_is_category',
                name: 'First value is category',
                defaultValue: true,
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
            .addTextInput({
                path: 'group_by_label',
                name: 'Group by label',
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
