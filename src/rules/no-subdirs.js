import { readFilePath } from '../utils'

module.exports = context => ({
  Program(node) {
    const { dirs } = readFilePath(context.getFilename())

    // not in tests directory
    if (!dirs) return

    if (dirs.length) {
      context.report({
        node,
        message: 'Test files should be at the root of the __tests__ directory',
      })
    }
  },
})

module.exports.schema = [] // no options
