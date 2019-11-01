import { makeEightPuzzle } from './eight-puzzle.mjs'
import { strict as assert } from 'assert'

const simpleEightPuzzle = makeEightPuzzle([
  [1, 4, 2],
  [3, 0, 5],
  [6, 7, 8]
])

const state = []
state[0] = simpleEightPuzzle.initialState
assert.deepEqual(state[0], [
  [1, 4, 2],
  [3, 0, 5],
  [6, 7, 8]
])

state[1] = simpleEightPuzzle.result(state[0], 'up')
assert.deepEqual(state[1], [
  [1, 0, 2],
  [3, 4, 5],
  [6, 7, 8]
])
assert(!simpleEightPuzzle.goalTest(state[1]))

state[2] = simpleEightPuzzle.result(state[1], 'left')
assert.deepEqual(state[2], [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
])
assert(simpleEightPuzzle.goalTest(state[2]))

/*
const complexEightPuzzle = makeEightPuzzle([
  [7, 2, 4],
  [5, 0, 6],
  [8, 3, 1]
])
*/
