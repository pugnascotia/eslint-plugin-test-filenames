# Require a filename suffix on every test file (suffix)

Reports and files within a `__tests__` directory that doesn't have the `test.js` or `test.jsx` suffix and is not prefixed with an `_`.

## Rule Details

The following patterns are considered warnings:

```sh
touch src/components/__tests__/Header.jsx
touch src/components/__tests__/helper.js
```

The following patterns are not considered warnings:

```sh
touch src/components/__tests__/Header.test.jsx
touch src/components/__tests__/_helper.js
```

## Rule Options

This rule does not accept any options
