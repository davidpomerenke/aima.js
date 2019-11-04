import { SearchProblem } from '../../search-problem.mjs'
import deepEqual from 'deep-equal'
import cloneDeep from 'lodash.clonedeep'

export const makeEightPuzzle = (initialState) => new SearchProblem({
  initialState: initialState,
  actions: (state) => Object.keys(moves).filter(key => {
    const zero = getPositionOfZero(state)
    const move = moves[key]
    zero.y += move.y
    zero.x += move.x
    return moveIsValid(zero)
  }),
  result: (state, action) => {
    state = cloneDeep(state)
    const move = moves[action]
    const oldZero = getPositionOfZero(state)
    const newZero = {
      y: oldZero.y + move.y,
      x: oldZero.x + move.x
    }
    const movedNumber = state[newZero.y][newZero.x]
    state[oldZero.y][oldZero.x] = movedNumber
    state[newZero.y][newZero.x] = 0
    return state
  },
  stepCost: (state, action) => 1,
  heuristic: (state) =>
    state.reduce((prev, row, y) =>
      prev + row.reduce((prev, nr, x) =>
        prev + manhattanDist([y, x], goalPosition(nr)),
      0),
    0),
  goalTest: state => deepEqual(state, goalState)
})

const moveIsValid = (zero) => {
  return (zero.x) in [0, 1, 2] && (zero.y) in [0, 1, 2]
}

const getPositionOfZero = (state) => ({
  y: state.indexOf(state.filter(row => row.includes(0))[0]),
  x: state.filter(row => row.includes(0))[0].indexOf(0)
})

const goalPosition = (nr) => [
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
