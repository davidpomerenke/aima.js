import { ticTacToe } from './tic-tac-toe.mjs'
import { strict as assert } from 'assert'

const state = []
state[0] = ticTacToe.initialState
state[1] = ticTacToe.result(state[0], [1, 0])
state[2] = ticTacToe.result(state[1], [2, 0])
state[3] = ticTacToe.result(state[2], [1, 1])
state[4] = ticTacToe.result(state[3], [2, 1])
assert(!ticTacToe.terminalTest(state[4]))
assert.equal(ticTacToe.utility(state[4]), undefined)
state[5] = ticTacToe.result(state[4], [1, 2])
assert(ticTacToe.terminalTest(state[5]))
assert.equal(ticTacToe.utility(state[5]), 1)
assert.deepEqual(state[5], [
  [0, 0, 0],
  [1, 1, 1],
  [2, 2, 0]
])
