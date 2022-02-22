import calculate from '../calculate'

it.each([
  [1, 2, 3],
  [2, 2, 4],
])('sums numbers', (a, b, sum) => {
  expect(calculate(a, b)).toEqual(sum)
})
