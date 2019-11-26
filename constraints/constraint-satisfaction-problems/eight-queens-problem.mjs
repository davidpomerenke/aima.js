import { ConstraintSatisfactionProblem } from '../constraint-satisfaction-problem.mjs'

// constraint-satisfaction formulation of the eight-queens problem

const queens = [0, 1, 2, 3, 4, 5, 6, 7]
const attacks = ([y1, x1], [y2, x2]) => y1 === y2 || x1 === x2 || y2 - y1 === x2 - x1

export const constraintSatisfactionEightQueensProblem = new ConstraintSatisfactionProblem({
  domains: queens.map(queen => [
    queen,
    [0, 1, 2, 3, 4, 5, 6, 7].flatMap(y =>
      [0, 1, 2, 3, 4, 5, 6, 7].map(x =>
        [y, x]))
  ]),
  constraints: [
    [
      queens.flatMap(queen1 => queens
        .filter(queen2 => queen1 !== queen2)
        .map(queen2 => [queen1, queen2])),
      (a, b) => !attacks(a, b)
    ]
  ]
})
