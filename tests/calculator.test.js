const calculator = require('../scripts/calculator');

test('calculator', () => {
  expect(calculator.add(6,2)).toBe(8)
  expect(calculator.subtract(6,2)).toBe(4)
  expect(calculator.multiply(6,2)).toBe(12)
  expect(calculator.divide(6,2)).toBe(3)
})