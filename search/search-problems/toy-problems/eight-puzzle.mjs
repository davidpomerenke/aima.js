import { SearchProblem } from '../../search-problem.mjs'
import deepEqual from 'deep-equal'

export const makeEightPuzzle = (initialState) => new SearchProblem({
  initialState: initialState,
  actions: state => Object.keys(moves).filter(key => moveIsValid({
    y: zero(state).y + moves[key].y,
    x: zero(state).x + moves[key].x
  })),
  result: (state, action) => state.map((row, y) => row.map((nr, x) =>
    y === zero(state).y + moves[action].y && x === zero(state).x + moves[action].x
      ? 0 // shift zero to new position
      : nr === 0
        ? state[zero(state).y + moves[action].y][zero(state).x + moves[action].x] // shift number to old position of zero
        : nr // keep all other numbers
  )),
  stepCost: (state, action) => 1,
  heuristic: state => // sum of manhattan distance between state and goal position of all numbers
    state.reduce((prev, row, y) =>
      prev + row.reduce((prev, nr, x) =>
        prev + manhattanDist([y, x], goalPosition(nr)),
      0),
    0),
  goalTest: state => deepEqual(state, goalState)
})

const moveIsValid = zero => zero.y in [0, 1, 2] && (zero.x) in [0, 1, 2]

// position of zero
const zero = state => ({
  y: state.indexOf(state.filter(row => row.includes(0))[0]),
  x: state.filter(row => row.includes(0))[0].indexOf(0)
})

const goalPosition = nr => [
  /* y */ goalState.findIndex(row => row.includes(nr)),
  /* x */ goalState.find(row => row.includes(nr)).indexOf(nr)
]

const manhattanDist = ([y1, x1], [y2, x2]) => (Math.abs(y1 - y2) + Math.abs(x1 - x2))

const moves = {
  up: { y: -1, x: 0 },
  down: { y: 1, x: 0 },
  left: { y: 0, x: -1 },
  right: { y: 0, x: 1 }
}

const goalState = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]
