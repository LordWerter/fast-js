export default {
    'csstree/validator': true,

    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': null,
    'color-no-hex': null,
    'color-no-invalid-hex': true,

    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-weight-notation': null,

    'function-blacklist': null,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': null,
    'function-comma-newline-before': null,
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': null,
    'function-max-empty-lines': null,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': null,
    'function-parentheses-space-inside': 'never',
    'function-url-scheme-blacklist': ['ftp', '/^http/', '://'],
    'function-url-no-scheme-relative': null,
    'function-url-quotes': null,
    'function-url-scheme-whitelist': null,
    'function-whitelist': null,
    'function-whitespace-after': 'always',

    'number-leading-zero': 'never',
    'number-max-precision': 3,
    'number-no-trailing-zeros': true,

    'string-no-newline': true,
    'string-quotes': 'single',

    'length-zero-no-unit': true,

    'time-min-milliseconds': null,

    'unit-blacklist': null,
    'unit-case': 'lower',
    'unit-no-unknown': true,

    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': null,

    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': null,
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    'custom-property-empty-line-before': null,
    'custom-property-pattern': null,

    'shorthand-property-no-redundant-values': true,

    'property-blacklist': null,
    'property-case': 'lower',
    'property-no-unknown': [
        true,
        {
            ignoreProperties: ['-ms-order', '-webkit-focus-ring-color'],
            checkPrefixed: true,
        },
    ],
    'property-no-vendor-prefix': null,
    'property-whitelist': null,

    'keyframe-declaration-no-important': true,

    'declaration-bang-space-after': null,
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'declaration-property-unit-blacklist': null,
    'declaration-property-unit-whitelist': null,
    'declaration-property-value-blacklist': null,
    'declaration-property-value-whitelist': null,

    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': null,
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 0,
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': 'always',

    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-blacklist': null,
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-whitelist': null,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': '[a-z_-]+',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-id-pattern': '[a-z_-]+',
    'selector-max-compound-selectors': null,
    'selector-max-specificity': null,
    'selector-nested-pattern': null,
    'selector-max-attribute': 2,
    'selector-max-combinators': 2,
    'selector-max-id': 0,
    'selector-no-qualifying-type': null,
    'selector-max-type': null,
    'selector-max-universal': 0,
    'selector-no-vendor-prefix': null,
    'selector-pseudo-class-blacklist': null,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-class-whitelist': null,
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': null,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': null,

    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': null,
    'selector-list-comma-space-after': null,
    'selector-list-comma-space-before': 'never',

    'rule-empty-line-before': [
        'always',
        {
            except: ['first-nested'],
            ignore: ['after-comment'],
        },
    ],

    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-blacklist': null,
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-whitelist': null,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    'custom-media-pattern': null,

    'media-query-list-comma-newline-after': null,
    'media-query-list-comma-newline-before': null,
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',

    'at-rule-blacklist': null,
    'at-rule-empty-line-before': [
        'always',
        {
            except: ['blockless-after-blockless'],
        },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-whitelist': null,

    'comment-empty-line-before': null,
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'comment-word-blacklist': null,

    'max-empty-lines': 1,
    'max-line-length': null,
    'max-nesting-depth': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,

    "indentation": [
        "tab",
        {
            baseIndentLevel: 2,
            indentInsideParens: "once-at-root-twice-in-block",
            ignore: ["value"]
        }
    ],
    "unit-whitelist": [
        "px",
        "%",
        "em",
        "rem",
        "vh",
        "deg",
        "s"
    ]
};