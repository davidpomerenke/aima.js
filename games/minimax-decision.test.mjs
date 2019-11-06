import { minimaxDecision } from './minimax-decision.mjs'
import { ticTacToe } from './games/tic-tac-toe.mjs'
import { strict as assert } from 'assert'

const decision = []
const state = []

/* takes too long for default testing
])

// player 2
decision[1] = minimaxDecision(ticTacToe, state[0])
state[1] = ticTacToe.result(state[0], decision[1].action)
assert.deepEqual(state[1], [
  [1, 2, 0],
  [0, 0, 0],
  [0, 0, 0]
])

// player 1
decision[2] = minimaxDecision(ticTacToe, state[1])
state[2] = ticTacToe.result(state[1], decision[2].action)
assert.deepEqual(state[2], [
  [1, 2, 1],
  [0, 0, 0],
  [0, 0, 0]
])

// player 2
decision[3] = minimaxDecision(ticTacToe, state[2])
state[3] = ticTacToe.result(state[2], decision[3].action)
assert.deepEqual(state[3], [
  [1, 2, 1],
  [2, 0, 0],
  [0, 0, 0]
])

// player 1
decision[4] = minimaxDecision(ticTacToe, state[3])
state[4] = ticTacToe.result(state[3], decision[4].action)
assert.deepEqual(state[4], [
  [1, 2, 1],
  [2, 1, 0],
  [0, 0, 0]
])

// player 2
decision[5] = minimaxDecision(ticTacToe, state[4])
state[5] = ticTacToe.result(state[4], decision[5].action)
assert.deepEqual(state[5], [
  [1, 2, 1],
  [2, 1, 0],
  [0, 2, 0]
])

// player 1
decision[6] = minimaxDecision(ticTacToe, state[5])
state[6] = ticTacToe.result(state[5], decision[6].action)
assert.deepEqual(state[6], [
  [1, 2, 1],
  [2, 1, 1],
  [0, 2, 0]
])
*/

state[6] = [
  [1, 2, 1],
  [2, 1, 1],
  [0, 2, 0]
]

// player 2
decision[7] = minimaxDecision(ticTacToe, state[6])
state[7] = ticTacToe.result(state[6], decision[7].action)
assert.deepEqual(state[7], [
  [1, 2, 1],
  [2, 1, 1],
  [2, 2, 0]
])
assert(!ticTacToe.terminalTest(state[7]))
assert.equal(ticTacToe.utility(state[7]), undefined)

// player 1
decision[8] = minimaxDecision(ticTacToe, state[7])
state[8] = ticTacToe.result(state[7], decision[8].action)
assert.deepEqual(state[8], [
  [1, 2, 1],
  [2, 1, 1],
  [2, 2, 1]
])
assert(ticTacToe.terminalTest(state[8]))
assert.equal(ticTacToe.utility(state[8]), 1)