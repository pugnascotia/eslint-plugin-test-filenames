# Prevent directories within test directories (no-subdirs)

When using `__tests__` directories it is customary to place tests next to the files they test. As such subdirectories within `__tests__` should instead be placed at the root of the `__tests__` directory or in a different `__tests__` directory altogether.

## Rule Details

The following patterns are considered warnings:

```sh
touch src/components/__tests__/home/Header.jsx
```

The following patterns are not considered warnings:

```sh
touch src/components/home/__tests__/Header.jsx
```

## Rule Options

This rule does not accept any options
