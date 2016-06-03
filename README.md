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

Add `test-filenames` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "test-filenames"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "test-filenames/rule-name": 2
    }
}
```

## Supported Rules

# List of supported rules

* [no-subdirs](docs/rules/no-subdirs.md): Prevent directories within test directories
* [suffix](docs/rules/suffix.md): Require a filename suffix on every test file
