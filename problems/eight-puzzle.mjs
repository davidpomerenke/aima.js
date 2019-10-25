import { Problem } from './problem.mjs'
import deepEqual from 'deep-equal'

const move = {
  up: { y: -1, x: 0 },
  down: { y: 1, x: 0 },
  left: { y: 0, x: -1 },
  right: { y: 0, x: 1 }
}

const getZeroPosition = (state) => ({
  y: state.indexOf(state.filter(row => row.includes(0))[0]),
  x: state.filter(row => row.includes(0))[0].indexOf(0)
})

export const generateEightPuzzle = (initialState) => new Problem({
  initialState: initialState,
  action: state => Object.keys(move).filter(key => {
    const zeroPosition = getZeroPosition(state)
    return [0, 1, 2].includes(zeroPosition.x + move[key].x) && [0, 1, 2].includes(zeroPosition.y + move[key].y)
  }),
  result: (state, action) => {
    const zeroPosition = getZeroPosition(state)
    const newZeroPosition = {
      y: zeroPosition.y + move[action].y,
      x: zeroPosition.x + move[action].x
    }
    if ([0, 1, 2].includes(newZeroPosition.x) && [0, 1, 2].includes(newZeroPosition.y)) {
      state[zeroPosition.y][zeroPosition.x] = state[newZeroPosition.y][newZeroPosition.x]
      state[newZeroPosition.y][newZeroPosition.x] = 0
      return state
    }
  },
  stepCost: (state, action) => 1,
  goalTest: state => deepEqual(state, [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ])
})

export const eightPuzzle = generateEightPuzzle([
  [1, 4, 2],
  [3, 0, 5],
  [6, 7, 8]
])
