import { Problem } from '../problem.mjs'

export const makeKnuthConjecture = (goal) => new Problem({
  initialState: [4],
  actions: (state) => Number.isInteger(calc(state))
    ? ['square_root', 'factorial']
    : ['square_root', 'floor'],
  result: (state, action) => [...state, action],
  stepCost: (state, action) => 1,
  goalTest: (state) => (calc(state) === goal)
})

const calc = (state) => state.reduce((total, operation) => {
  if (operation.isNumber) return operation
  if (operation === 'factorial') return factorial(total)
  if (operation === 'square_root') return Math.sqrt(total)
  if (operation === 'floor') return Math.floor(total)
})

const factorial = (n) => {
  for (let i = n; i > 2; i--) {
    n *= i - 1
  }
  return n
}
