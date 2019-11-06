import { OptimizationProblem } from '../optimization-problem.mjs'

// complete-state formulation of the eight-queens problem

export const eightQueensProblem = new OptimizationProblem({
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
  actions: state => state.reduce((total, row, y) => [
    ...total,
    ...[0, 1, 2, 3, 4, 5, 6, 7]
      .filter(x => row[x] === 0)
      .map(x => [y, x])
  ], []),
  result: (state, [yMove, xMove]) => state.map((row, y) => row.map((tile, x) =>
    y === yMove ? (x === xMove ? 1 : 0) : tile
  )),
  value: (state) => -nrAttackedQueens(state)
})

const attacks = ([y1, x1], [y2, x2]) => y1 === y2 || x1 === x2 || y2 - y1 === x2 - x1

const nrAttackedQueens = state => combinations(
  state.map((row, y) => [y, /* x */ row.indexOf(1)]) // queen positions
).reduce((total, [q1, q2]) => total + attacks(q1, q2) * 1, 0)

const combinations = array => array.reduce((prev, a, i) => [
  ...prev,
  ...array.slice(0, i).map(b => [a, b])
], [])
