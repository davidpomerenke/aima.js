import { makeEightPuzzle } from './eight-puzzle.mjs'
import { strict as assert } from 'assert'

const simpleEightPuzzle = makeEightPuzzle([
  [1, 4, 2],
  [3, 0, 5],
  [6, 7, 8]
])

let state
state = simpleEightPuzzle.initialState
assert.deepEqual(state, [
  [1, 4, 2],
  [3, 0, 5],
  [6, 7, 8]
])
assert.equal(simpleEightPuzzle.heuristic(state), 4)

state = simpleEightPuzzle.result(state, 'up')
assert.deepEqual(state, [
  [1, 0, 2],
  [3, 4, 5],
  [6, 7, 8]
])
assert.equal(simpleEightPuzzle.heuristic(state), 2)
assert(!simpleEightPuzzle.goalTest(state))

state = simpleEightPuzzle.result(state, 'left')
assert.deepEqual(state, [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
])
assert.equal(simpleEightPuzzle.heuristic(state), 0)
assert(simpleEightPuzzle.goalTest(state))

const complexEightPuzzle = makeEightPuzzle([
  [7, 2, 4],
  [5, 0, 6],
  [8, 3, 1]
])
state = complexEightPuzzle.initialState
assert.equal(simpleEightPuzzle.heuristic(state), 20)
