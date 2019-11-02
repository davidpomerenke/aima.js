import { Problem } from '../problem.mjs'
import cloneDeep from 'lodash.clonedeep'

export const vacuumWorld = new Problem({
  initialState: { location: 'A', A: 'dirty', B: 'dirty' },
  actions: (state) => ['left', 'right', 'suck'],
  result: (state, action) => {
    state = cloneDeep(state)
    switch (action) {
      case 'suck': state[state.location] = 'clean'
        break
      case 'left': state.location = 'A'
        break
      case 'right': state.location = 'B'
        break
      default: state = undefined
    }
    return state
  },
  stepCost: (state, action) => 1,
  goalTest: state => (state.A === 'clean' && state.B === 'clean')
})
