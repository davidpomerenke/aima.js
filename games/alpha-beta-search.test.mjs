import { alphaBetaSearch } from './alpha-beta-search.mjs'
import { ticTacToe } from './games/tic-tac-toe.mjs'
import { strict as assert } from 'assert'

let state = [
  ['x', 'o', 'x'],
  ['o', 'x', 'x'],
  [' ', 'o', ' ']]

// player 2
let decision = alphaBetaSearch(ticTacToe, state)
state = ticTacToe.result(state, decision.action)
assert.deepEqual(state, [
  ['x', 'o', 'x'],
  ['o', 'x', 'x'],
  ['o', 'o', ' ']])
assert(!ticTacToe.terminalTest(state))
assert.equal(ticTacToe.utility(state), undefined)

// player 1
decision = alphaBetaSearch(ticTacToe, state)
state = ticTacToe.result(state, decision.action)
assert.deepEqual(state, [
  ['x', 'o', 'x'],
  ['o', 'x', 'x'],
  ['o', 'o', 'x']])
assert(ticTacToe.terminalTest(state))
assert.equal(ticTacToe.utility(state), 1)
