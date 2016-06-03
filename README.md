# eslint-plugin-test-filenames

Add eslint rules to verify that test files meet standards

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-test-filenames`:

```
$ npm install eslint-plugin-test-filenames --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-test-filenames` globally.

## Usage

Add `test-filenames` to the plugins section of your [ESLint configuration file](http://eslint.org/docs/user-guide/configuring#configuration-file-formats). You can omit the `eslint-plugin-` prefix:

```yaml
---
plugins:
  - test-filenames
```


Then configure the rules you want to use under the rules section.

```yaml
---
plugins:
  - test-filenames

rules:
  - test-filenames/suffix: error
```

## Supported Rules

# List of supported rules

* [no-subdirs](docs/rules/no-subdirs.md): Prevent directories within test directories
* [suffix](docs/rules/suffix.md): Require a filename suffix on every test file
