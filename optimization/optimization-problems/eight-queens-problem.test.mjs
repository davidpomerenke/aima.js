import { eightQueensProblem } from './eight-queens-problem.mjs'
import { strict as assert } from 'assert'

let state = eightQueensProblem.initialState
assert.equal(eightQueensProblem.actions(state).length, 56) // 56 = 8 * (8 - 1)
assert.equal(eightQueensProblem.value(state), -28) // 28 = (8^2 - 8) / 2

state = eightQueensProblem.result(state, [3, 6])
assert.deepEqual(state, [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0]
])
assert.equal(eightQueensProblem.value(state), -21) // 21 = 28 - 7
