const capitalize = require('../scripts/capitalize')

test('capitalize', () => {
  expect(capitalize('hello World!')).toBe('Hello World!')
})