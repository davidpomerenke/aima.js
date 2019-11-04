import { eightQueensProblem } from './eight-queens-problem.mjs'
import { strict as assert } from 'assert'

// incremental formulation

const state = []
state[0] = eightQueensProblem.incremental.initialState

state[1] = eightQueensProblem.incremental.result(state[0], 3)
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
assert.deepEqual(eightQueensProblem.incremental.result(state[1], 3), undefined)

state[2] = eightQueensProblem.incremental.result(state[1], 5)
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
assert.deepEqual(eightQueensProblem.incremental.result(state[2], 1), undefined)

// complete-state formulation
state[3] = eightQueensProblem.completeState.initialState
assert.equal(eightQueensProblem.completeState.actions(state[3]).length, 56) // 56 = 8 * (8 - 1)
assert.equal(eightQueensProblem.completeState.heuristic(state[3]), 28) // 28 = (8^2 - 8) / 2

state[4] = eightQueensProblem.completeState.result(state[3], [3, 6])
assert.deepEqual(state[4], [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0]
])
assert.equal(eightQueensProblem.completeState.heuristic(state[4]), 21) // 21 = 28 - 7
