import { increment, decrement } from './actions'

test('Action: increment', () => {
  const inc = increment(10)
  expect(inc).toEqual({
    type: 'INCREMENT',
    value: 10
  })
})

test('Action: decrement', () => {
  const dec = decrement(20)
  expect(dec).toEqual({
    type: 'DECREMENT',
    value: 20
  })
}) 