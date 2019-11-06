import { SearchProblem } from '../../search-problem.mjs'
import cloneDeep from 'lodash.clonedeep'

// incremental formulation of the eight-queens problem

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
  actions: state => [0, 1, 2, 3, 4, 5, 6, 7].filter(action => (
    nextRow(state) < 9 &&
    !isAttacked(state, /* y */ nextRow(state), /* x */ action)
  )),
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

const nextRow = state => state.findIndex(row => !row.includes(1))

const makeDiag = direction => (board, yOrigin, xOrigin) => board.map((row, y) =>
  xOrigin + direction * (y - yOrigin) in row
    ? row[xOrigin + direction * (y - yOrigin)]
    : undefined
).filter(square => typeof square !== 'undefined')

const row = (board, y, _) => board[y]
const col = (board, _, x) => board.map(row => row[x])
const diag1 = makeDiag(1)
const diag2 = makeDiag(-1)
