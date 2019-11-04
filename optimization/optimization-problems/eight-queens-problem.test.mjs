import { eightQueensProblem } from './eight-queens-problem.mjs'
import { strict as assert } from 'assert'

const state = []
state[0] = eightQueensProblem.initialState
assert.equal(eightQueensProblem.actions(state[0]).length, 56) // 56 = 8 * (8 - 1)
assert.equal(eightQueensProblem.value(state[0]), -28) // 28 = (8^2 - 8) / 2

state[1] = eightQueensProblem.result(state[0], [3, 6])
assert.deepEqual(state[1], [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0]
])
assert.equal(eightQueensProblem.value(state[1]), -21) // 21 = 28 - 7
