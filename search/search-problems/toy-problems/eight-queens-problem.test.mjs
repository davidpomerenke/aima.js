import { eightQueensProblem } from './eight-queens-problem.mjs'
import { strict as assert } from 'assert'

const state = []
state[0] = eightQueensProblem.initialState

state[1] = eightQueensProblem.result(state[0], 3)
assert.deepEqual(state[1], [
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
])
assert.deepEqual(eightQueensProblem.result(state[1], 3), undefined)

state[2] = eightQueensProblem.result(state[1], 5)
assert.deepEqual(state[2], [
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
])
assert.deepEqual(eightQueensProblem.result(state[2], 1), undefined)
