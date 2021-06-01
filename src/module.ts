import { PanelPlugin } from '@grafana/data';
import { VTableOptions } from './types';
import { VTable } from './vtable';

export interface CustomFieldConfig {
    display_mode: string;
}

export const plugin = new PanelPlugin<VTableOptions, CustomFieldConfig>(VTable)
    .setPanelOptions((builder) => {
        builder
            .addNumberInput({
                path: 'namecol_width',
                name: 'Name column width',
            })
            .addNumberInput({
                path: 'valcol_width',
                name: 'Values columns width',
            })
            .addRadio({
                path: 'show_header',
                name: 'Show header',
                defaultValue: 'off',
                settings: {
                    options: [
                        {value: 'firstfield', label: 'First field'},
                        {value: 'off', label: 'No'},
                        {value: 'custom', label: 'Custom header'},
                    ]
                }
            })
            .addTextInput({
                path: 'custom_header',
                name: 'Comma-separated custom header',
            })
            .addBooleanSwitch({
                path: 'is_horizontal',
                name: 'Layout horizontally',
                defaultValue: false,
            })
            .addRadio({
                path: 'show_unit',
                name: 'Show unit',
                settings: {
                    options: [
                        {value: 'name', label: 'Next to name'},
                        {value: 'eachcol', label: 'Each column'},
                        {value: 'off', label: 'No'},
                    ]
                },
                defaultValue: 'name'
            })
            .addTextInput({
                path: 'group_by_label',
                name: 'Group by label',
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
