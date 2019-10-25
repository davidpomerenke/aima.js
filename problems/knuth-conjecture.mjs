import { Problem } from './problem.mjs'

export const knuthConjecture = new Problem({
  initialState: [4],
  actions: state => Number.isInteger(compute(state))
    ? ['square_root', 'floor', 'factorial']
    : ['square_root', 'floor'],
  result: (state, action) => [...state, action],
  stepCost: (state, action) => 1,
  goalTest: state => compute(state) === 5
})

const factorial = (x) => x > 1
  ? (x * factorial(x - 1))
  : 1

const compute = state => state.reduce((prevResult, action) => {
  if (action === 4) return 4
  if (action === 'factorial' && Number.isInteger(prevResult)) return factorial(prevResult)
  if (action === 'square_root') return Math.sqrt(prevResult)
  if (action === 'floor') return Math.floor(prevResult)
})
