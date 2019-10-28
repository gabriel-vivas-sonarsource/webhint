// autogenerated by scripts/create/create-metas.js
import { Category } from '@hint/utils-types/dist/src/category';
import { HintScope } from 'hint/dist/src/lib/enums/hint-scope';
import { HintMetadata } from 'hint/dist/src/lib/types';

import { getMessage } from '../i18n.import';

const meta: HintMetadata = {
    docs: {
        category: Category.accessibility,
        description: getMessage('forms_description', 'en'),
        name: getMessage('forms_name', 'en')
    },
    /* istanbul ignore next */
    getDescription(language: string) {
        return getMessage('forms_description', language);
    },
    /* istanbul ignore next */
    getName(language: string) {
        return getMessage('forms_name', language);
    },
    id: 'axe/forms',
    schema: [{
        additionalProperties: false,
        properties: {
            'autocomplete-valid': { enum: ['off', 'warning', 'error'], type: 'string' },
            checkboxgroup: { enum: ['off', 'warning', 'error'], type: 'string' },
            'form-field-multiple-labels': { enum: ['off', 'warning', 'error'], type: 'string' },
            label: { enum: ['off', 'warning', 'error'], type: 'string' },
            'label-title-only': { enum: ['off', 'warning', 'error'], type: 'string' },
            radiogroup: { enum: ['off', 'warning', 'error'], type: 'string' }
        }
    }],
    scope: HintScope.any
};

export default meta;
