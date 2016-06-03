import { readFilePath } from '../utils'

module.exports = context => ({
  Program(node) {
    const { dirs, filename } = readFilePath(context.getFilename())

    // not in tests directory
    if (!dirs) return

    if (!filename.match(/^_|\.test\.jsx?$/)) {
      context.report({
        node,
        message: (
          'Test files must end with .test.js or .test.jsx. ' +
          'Helper/fixture files must start with an _.'
        ),
      })
    }
  },
})

module.exports.schema = [] // no options
