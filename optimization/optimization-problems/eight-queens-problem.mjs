import { OptimizationProblem } from '../optimization-problem.mjs'
import cloneDeep from 'lodash.clonedeep'

/**
 * complete-state formulation of the eight-queens problem
 */
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
  value: (state) => -nrAttackedQueens(state)
})

const attacks = ([y1, x1], [y2, x2]) => (y1 === y2 || x1 === x2 || y2 - y1 === x2 - x1)

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
