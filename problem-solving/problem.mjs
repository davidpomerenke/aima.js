import deepEqual from 'deep-equal'
import { cities } from './cities.mjs'

export class Problem {
  constructor (initialState, actions, model, goalTest) {
    this.state = initialState
    this.actions = actions
    this.model = model
    this.goalTest = goalTest
    this.pathCost = 0
  }

  action (action) {
    const step = this.model(this.state, action)
    this.pathCost += step.stepCost
    this.state = step.state
  }

  get isSolved () {
    return this.goalTest(this.state)
  }
}

export const vacuumWorld = new Problem(
  { location: 'A', A: 'dirty', B: 'dirty' },
  ['left', 'right', 'suck'],
  (state, action) => {
    if (state.location === 'B' && action === 'left') {
      return {
        state: {
          location: 'A',
          A: state.A,
          B: state.B
        },
        stepCost: 1
      }
    } else if (state.location === 'A' && action === 'right') {
      return {
        state: {
          location: 'B',
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
  ['left', 'right', 'up', 'down'],
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
    if (action === 'left' && zeroPosition.x > 0) {
      state[zeroPosition.y][zeroPosition.x] = state[zeroPosition.y][zeroPosition.x - 1]
      state[zeroPosition.y][zeroPosition.x - 1] = 0
    } else if (action === 'right' && zeroPosition.x < 2) {
      state[zeroPosition.y][zeroPosition.x] = state[zeroPosition.y][zeroPosition.x + 1]
      state[zeroPosition.y][zeroPosition.x + 1] = 0
    } else if (action === 'up' && zeroPosition.y > 0) {
      state[zeroPosition.y][zeroPosition.x] = state[zeroPosition.y - 1][zeroPosition.x]
      state[zeroPosition.y - 1][zeroPosition.x] = 0
    } else if (action === 'down' && zeroPosition.y < 2) {
      state[zeroPosition.y][zeroPosition.x] = state[zeroPosition.y + 1][zeroPosition.x]
      state[zeroPosition.y + 1][zeroPosition.x] = 0
    }
    return { state: state, stepCost: 1 }
  },
  state => deepEqual(state, [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ])
)

export const eightQueens = new Problem(
  [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  (state, action) => {
    const y = state.findIndex(row => row.includes(1)) + 1
    const x = action
    const row = state[y]
    const col = state.map(row => row[x])
    const diag1 = state.map((row, rowIndex) => {
      const pos = x + (rowIndex - y)
      if (pos >= 0 && pos <= 7) return row[pos]
    })
    const diag2 = state.map((row, rowIndex) => {
      const pos = x - (rowIndex - y)
      if (pos >= 0 && pos <= 7) return row[pos]
    })
    const isAttacked = [row, col, diag1, diag2].some(line => line.includes(1))
    if (state[y][x] !== 1 && !isAttacked) {
      state[y][x] = 1
      return {
        state: state,
        stepCost: 0
      }
    } else { // invalid action
      return {
        state: state,
        stepCost: Infinity
      }
    }
  },
  state => state.every(row => row.includes(1))
)

export const knuthConjecture = new Problem(
  [4],
  ['factorial', 'squareRoot', 'floor'],
  (state, action) => ({
    state: [...state, action],
    stepCost: 1
  }),
  state => {
    const result = state.reduce((prevResult, action) => {
      if (action === 4) return 4
      if (action === 'factorial') {
        if (Number.isInteger(prevResult)) {
          const factorial = (x) => x > 1 ? x * factorial(x - 1) : 1
          return factorial(prevResult)
        } else {
          // factorial is undefined on nonnatural numbers
          // thus the operation is ignored
          return prevResult
        }
      }
      if (action === 'squareRoot') return Math.sqrt(prevResult)
      if (action === 'floor') return Math.floor(prevResult)
    })
    return result === 5
  }
)

export const routeFinding = new Problem(
  'Arad',
  Object.keys(cities),
  (state, action) => {
    const reachableCities = Object.keys(cities[state])
    if (reachableCities.includes(action)) {
      return {
        state: action,
        stepCost: cities[state][action]
      }
    } else { // invalid action
      return {
        state: state,
        stepCost: Infinity
      }
    }
  },
  state => (state === 'Bucharest')
)

export const touring = new Problem(
  ['Arad'],
  Object.keys(cities),
  (state, action) => {
    const reachableCities = Object.keys(cities[state[0]])
    if (reachableCities.includes(action) && !state.includes(action)) {
      return {
        state: [action, ...state],
        stepCost: cities[state[0]][action]
      }
    } else { // invalid action
      return {
        state: state,
        stepCost: Infinity
      }
    }
  },
  state => (state === 'Bucharest')
)

export const travelingSalesPerson = new Problem(
  ['Arad'],
  Object.keys(cities),
  (state, action) => {
    const reachableCities = Object.keys(cities[state[0]])
    if (reachableCities.includes(action) && !state.includes(action)) {
      return {
        state: [action, ...state],
        stepCost: cities[state[0]][action]
      }
    } else { // invalid action
      return {
        state: state,
        stepCost: Infinity
      }
    }
  },
  state => (state.length === Object.keys(cities).length)
)
