import deepEqual from 'deep-equal'

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

export const eightPuzzle = new Problem(
  [
    [1, 4, 2],
    [3, 0, 5],
    [6, 7, 8]
  ],
  (state, action) => {
    const getZeroPosition = state => {
      const zeroPosition = {}
      if (state[0][0] === 0 || state[0][1] === 0 || state[0][2] === 0) zeroPosition.y = 0
      else if (state[1][0] === 0 || state[1][1] === 0 || state[1][2] === 0) zeroPosition.y = 1
      else if (state[2][0] === 0 || state[2][1] === 0 || state[2][2] === 0) zeroPosition.y = 2
      if (state[0][0] === 0 || state[1][0] === 0 || state[2][0] === 0) zeroPosition.x = 0
      else if (state[0][1] === 0 || state[1][1] === 0 || state[2][1] === 0) zeroPosition.x = 1
      else if (state[0][2] === 0 || state[1][2] === 0 || state[2][2] === 0) zeroPosition.x = 2
      return zeroPosition
    }
    const zeroPosition = getZeroPosition(state)
    if (action === 'right' && zeroPosition.x < 2) {
      state[zeroPosition.y][zeroPosition.x] = state[zeroPosition.y][zeroPosition.x + 1]
      state[zeroPosition.y][zeroPosition.x + 1] = 0
    } else if (action === 'left' && zeroPosition.x > 0) {
      state[zeroPosition.y][zeroPosition.x] = state[zeroPosition.y][zeroPosition.x - 1]
      state[zeroPosition.y][zeroPosition.x - 1] = 0
    } else if (action === 'down' && zeroPosition.y < 2) {
      state[zeroPosition.y][zeroPosition.x] = state[zeroPosition.y + 1][zeroPosition.x]
      state[zeroPosition.y + 1][zeroPosition.x] = 0
    } else if (action === 'up' && zeroPosition.y > 0) {
      state[zeroPosition.y][zeroPosition.x] = state[zeroPosition.y - 1][zeroPosition.x]
      state[zeroPosition.y - 1][zeroPosition.x] = 0
    }
    return { state: state, stepCost: 1 }
  },
  state => deepEqual(state, [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ])
)
