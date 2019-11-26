import { hillClimbingSearch } from './hill-climbing-search.mjs'
import { completeStateEightQueensProblem as eightQueensProblem } from './optimization-problems/eight-queens-problem.mjs'
import { strict as assert } from 'assert'

const solution = hillClimbingSearch(eightQueensProblem).state
assert.deepEqual(solution, [
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0]
])
// assert(eightQueensProblem.value(solution), 1)
