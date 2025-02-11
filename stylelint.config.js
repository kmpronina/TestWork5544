/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-recommended'],
  customSyntax: '@stylelint/postcss-css-in-js',
  ignoreFiles: ['**/*.{js,jsx}'],
  rules: {
    'block-no-empty': true,
    'unit-allowed-list': ['em', 'rem', '%', 's', 'px', 'vh', 'vw'],
    'color-no-hex': [
      true,
      {
        message: 'Do not use hex colors like "%s"',
      },
    ],
    'property-no-vendor-prefix': null,
    'value-keyword-case': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-class-pattern': null,
  },
};
