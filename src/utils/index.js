import { resolve, sep } from 'path'

export function readFilePath(path) {
  const segments = resolve(path).split(sep)
  const filename = segments.pop()
  const testI = segments.indexOf('__tests__')

  if (testI === -1) {
    return { filename }
  }

  const dirs = segments.slice(testI + 1)
  return { dirs, filename }
}
