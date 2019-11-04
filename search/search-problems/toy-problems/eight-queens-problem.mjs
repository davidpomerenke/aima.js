import { SearchProblem } from '../../search-problem.mjs'
import cloneDeep from 'lodash.clonedeep'

/**
 * complete-state formulation of the eight-queens problem
 */
export const eightQueensProblem = new SearchProblem({
  initialState: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  actions: (state) => [0, 1, 2, 3, 4, 5, 6, 7].filter(action => {
    const y = state.findIndex(row => !row.includes(1))
    const x = action
    return y < 9 && !isAttacked(state, y, x)
  }),
  result: (state, action) => {
    state = cloneDeep(state)
    const y = state.findIndex(row => !row.includes(1))
    const x = action
    state[y][x] = 1
    return state
  },
  stepCost: (state, action) => 0,
  goalTest: state => state.every(row => row.includes(1))
})

const isAttacked = (state, y, x) => {
  return [row, col, diag1, diag2]
    .some(line => line(state, y, x).includes(1))
}

const makeDiag = (direction) => (board, yOrigin, xOrigin) => board.map((row, y) => {
  const yDist = y - yOrigin
  const xDist = yDist
  const x = xOrigin + direction * xDist
  return x in row ? row[x] : undefined
}).filter(square => typeof square !== 'undefined')

const row = (board, y, _) => board[y]
const col = (board, _, x) => board.map(row => row[x])
const diag1 = makeDiag(1)
const diag2 = makeDiag(-1)
