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
            .addBooleanSwitch({
                path: 'first_field_is_header',
                name: 'First field is header',
                defaultValue: false,
            })
            .addBooleanSwitch({
                path: 'is_horizontal',
                name: 'Layout horizontally',
                defaultValue: false,
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
                            { value: 'gradient', label: 'Gradient gauge' },
                        ],
                    },
                })
        }
    }
    );
