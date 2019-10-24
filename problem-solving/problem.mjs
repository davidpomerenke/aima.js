export class Problem {
  constructor (initialState, model, goalTest) {
    this.state = initialState
    this.model = model
    this.goalTest = goalTest
  }

  action (action) {
    const step = this.model(this.state, action)
    this.state = step.state
  }

  get isSolved () {
    return this.goalTest(this.state)
  }
}

export const vacuumWorld = new Problem(
  { location: 'A', A: 'dirty', B: 'dirty' },
  (state, action) => {
    if (state.location === 'A' && action === 'right') {
      return {
        state: {
          location: 'B',
          A: state.A,
          B: state.B
        },
        stepCost: 1
      }
    } else if (state.location === 'B' && action === 'left') {
      return {
        state: {
          location: 'A',
          A: state.A,
          B: state.B
        },
        stepCost: 1
      }
    } else if (state[state.location] === 'dirty' && action === 'suck') {
      return {
        state: {
          location: state.location,
          A: state.location === 'A' ? 'clean' : state.A,
          B: state.location === 'B' ? 'clean' : state.B
        },
        stepCost: 1
      }
    } else {
      return {
        state: state,
        stepCost: 1
      }
    }
  },
  state => (state.A === 'clean' && state.B === 'clean')
)
