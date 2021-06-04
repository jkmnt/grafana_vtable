import { PanelPlugin } from '@grafana/data';
import { VTable, VTableOptions } from './vtable';

interface CustomFieldConfig {
    display_mode: string;
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
            .addTextInput({
                path: 'formatcode',
                name: 'Custom formatting code (unsafe!)',
                settings: {
                    useTextarea: true,
                }
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
