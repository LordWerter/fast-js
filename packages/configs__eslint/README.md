# Конфиг ESLint

В файле `.eslintrc.js` для React-приложения в раздел `extends` добавляем новые `presets`

```js
module.exports = {
    root: true,
    extends: [
        '< PATH_TO_PACKAGE >/config-eslint',
        '< PATH_TO_PACKAGE >/config-eslint/rules/react',
        '< PATH_TO_PACKAGE >/config-eslint/rules/react-hooks',
        '< PATH_TO_PACKAGE >/config-eslint/rules/prettier',
        '< PATH_TO_PACKAGE >/config-eslint/rules/jest',
    ],
};
```

## ESLint + Typescript

В файле `.eslintrc.js` в раздел `extends` добавляем новые `presets`

```js
module.exports = {
    root: true,
    extends: [
        '< PATH_TO_PACKAGE >/config-eslint',
        '< PATH_TO_PACKAGE >/config-eslint/rules/react',
        '< PATH_TO_PACKAGE >/config-eslint/rules/react-hooks',
        '< PATH_TO_PACKAGE >/config-eslint/rules/prettier',
        '< PATH_TO_PACKAGE >/config-eslint/rules/typescript',
        '< PATH_TO_PACKAGE >/config-eslint/rules/jest',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
};
```
