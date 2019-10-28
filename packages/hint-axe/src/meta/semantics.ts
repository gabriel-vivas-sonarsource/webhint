// autogenerated by scripts/create/create-metas.js
import { Category } from '@hint/utils-types/dist/src/category';
import { HintScope } from 'hint/dist/src/lib/enums/hint-scope';
import { HintMetadata } from 'hint/dist/src/lib/types';

import { getMessage } from '../i18n.import';

const meta: HintMetadata = {
    docs: {
        category: Category.accessibility,
        description: getMessage('semantics_description', 'en'),
        name: getMessage('semantics_name', 'en')
    },
    /* istanbul ignore next */
    getDescription(language: string) {
        return getMessage('semantics_description', language);
    },
    /* istanbul ignore next */
    getName(language: string) {
        return getMessage('semantics_name', language);
    },
    id: 'axe/semantics',
    schema: [{
        additionalProperties: false,
        properties: {
            'heading-order': { enum: ['off', 'warning', 'error'], type: 'string' },
            'landmark-banner-is-top-level': { enum: ['off', 'warning', 'error'], type: 'string' },
            'landmark-complementary-is-top-level': { enum: ['off', 'warning', 'error'], type: 'string' },
            'landmark-contentinfo-is-top-level': { enum: ['off', 'warning', 'error'], type: 'string' },
            'landmark-main-is-top-level': { enum: ['off', 'warning', 'error'], type: 'string' },
            'landmark-no-duplicate-banner': { enum: ['off', 'warning', 'error'], type: 'string' },
            'landmark-no-duplicate-contentinfo': { enum: ['off', 'warning', 'error'], type: 'string' },
            'landmark-one-main': { enum: ['off', 'warning', 'error'], type: 'string' },
            'landmark-unique': { enum: ['off', 'warning', 'error'], type: 'string' },
            'layout-table': { enum: ['off', 'warning', 'error'], type: 'string' },
            'p-as-heading': { enum: ['off', 'warning', 'error'], type: 'string' },
            'page-has-heading-one': { enum: ['off', 'warning', 'error'], type: 'string' }
        }
    }],
    scope: HintScope.any
};

export default meta;
