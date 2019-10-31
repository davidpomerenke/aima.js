import { Problem } from '../problem.mjs'
import factorial from 'factorial'

export const knuthConjecture = new Problem({
  initialState: 4,
  actions: state => Number.isInteger(state)
    ? ['square_root', 'floor', 'factorial']
    : ['square_root', 'floor'],
  result: (state, action) => {
    if (action === 'factorial') return factorial(state)
    if (action === 'square_root') return Math.sqrt(state)
    if (action === 'floor') return Math.floor(state)
  },
  pathCost: (state, action) => 1,
  goalTest: state => (state === 5)
})
