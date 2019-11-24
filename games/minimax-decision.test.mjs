import { minimaxDecision } from './minimax-decision.mjs'
import { ticTacToe } from './games/tic-tac-toe.mjs'
import { strict as assert } from 'assert'

let state = [
  ['x', 'o', 'x'],
  ['o', 'x', 'x'],
  [' ', 'o', ' ']]

// player 2
let decision = minimaxDecision(ticTacToe, state)
state = ticTacToe.result(state, decision.action)
assert.deepEqual(state, [
  ['x', 'o', 'x'],
  ['o', 'x', 'x'],
  ['o', 'o', ' ']])
assert(!ticTacToe.terminalTest(state))
assert.equal(ticTacToe.utility(state), undefined)

// player 1
decision = minimaxDecision(ticTacToe, state)
state = ticTacToe.result(state, decision.action)
assert.deepEqual(state, [
  ['x', 'o', 'x'],
  ['o', 'x', 'x'],
  ['o', 'o', 'x']])
assert(ticTacToe.terminalTest(state))
assert.equal(ticTacToe.utility(state), 1)
