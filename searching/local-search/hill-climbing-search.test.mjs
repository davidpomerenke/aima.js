import { hillClimbingSearch } from './hill-climbing-search.mjs'
import { eightQueensProblem } from '../../problems/toy-problems/eight-queens-problem.mjs'
import { strict as assert } from 'assert'

const solution = hillClimbingSearch(eightQueensProblem.completeState).pop()
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
assert(eightQueensProblem.completeState.value(solution), 1)
