import { Problem } from './problem.mjs'
import cloneDeep from 'lodash.clonedeep'

export const vacuumWorld = new Problem({
  initialState: { location: 'A', A: 'dirty', B: 'dirty' },
  actions: (state) => [state.location === 'B' ? 'left' : 'right', 'suck'],
  result: (state, action) => {
    state = cloneDeep(state)
    if (action === 'suck') state[state.location] = 'clean'
    else if (action === 'left') state.location = 'A'
    else if (action === 'right') state.location = 'B'
    else state = undefined
    return state
  },
  pathCost: (state, action) => 1,
  goalTest: state => (state.A === 'clean' && state.B === 'clean')
})
