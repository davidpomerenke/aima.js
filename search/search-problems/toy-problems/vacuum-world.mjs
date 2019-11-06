import { SearchProblem } from '../../search-problem.mjs'

export const vacuumWorld = new SearchProblem({
  initialState: { location: 'A', A: 'dirty', B: 'dirty' },
  actions: state => ['left', 'right', 'suck'],
  result: (state, action) => ({
    location: action === 'left' ? 'A' : action === 'right' ? 'B' : state.location,
    A: state.location === 'A' && action === 'suck' ? 'clean' : state.A,
    B: state.location === 'B' && action === 'suck' ? 'clean' : state.B
  }),
  stepCost: (state, action) => 1,
  goalTest: state => state.A === 'clean' && state.B === 'clean'
})
