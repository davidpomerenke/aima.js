import { Problem } from '../problem.mjs'
import cloneDeep from 'lodash.clonedeep'

export const eightQueensProblem = {
  incremental: new Problem({
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
  }),
  completeState: new Problem({
    initialState: [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0]
    ],
    actions: (state) => state.reduce((total, row, y) => [
      ...total,
      ...[0, 1, 2, 3, 4, 5, 6, 7]
        .filter(x => row[x] === 0)
        .map(x => [y, x])
    ], []),
    result: (state, action) => {
      const y = action[0]
      const x = action[1]
      state = cloneDeep(state)
      state[y] = [0, 0, 0, 0, 0, 0, 0, 0]
      state[y][x] = 1
      return state
    },
    stepCost: (state, action) => 0,
    heuristic: (state) => nrAttackedQueens(state),
    value: (state) => -nrAttackedQueens(state),
    goalTest: (state) => this.completeState.heuristic === 0
  })
}

const attacks = ([y1, x1], [y2, x2]) => (y1 === y2 || x1 === x2 || y2 - y1 === x2 - x1)

const isAttacked = (state, y, x) => {
  return [row, col, diag1, diag2]
    .some(line => line(state, y, x).includes(1))
}

const nrAttackedQueens = (state) => {
  const queenPositions = state.map((row, y) => [y, /* x */ row.indexOf(1)])
  return combinations(queenPositions)
    .reduce((total, [q1, q2]) => total + attacks(q1, q2) * 1, 0)
}

const combinations = (array) => {
  const combinations = []
  while (array.length > 1) {
    const el = array.pop()
    combinations.push(...array.map(em => [el, em]))
  }
  return combinations
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
