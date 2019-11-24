import { ticTacToe } from './tic-tac-toe.mjs'
import { strict as assert } from 'assert'

let state = ticTacToe.initialState

state = ticTacToe.result(state, [1, 0])
assert.deepEqual(state, [
  [' ', ' ', ' '],
  ['x', ' ', ' '],
  [' ', ' ', ' ']])

state = ticTacToe.result(state, [2, 0])
assert.deepEqual(state, [
  [' ', ' ', ' '],
  ['x', ' ', ' '],
  ['o', ' ', ' ']])

state = ticTacToe.result(state, [1, 1])
assert.deepEqual(state, [
  [' ', ' ', ' '],
  ['x', 'x', ' '],
  ['o', ' ', ' ']])

state = ticTacToe.result(state, [2, 1])
assert.deepEqual(state, [
  [' ', ' ', ' '],
  ['x', 'x', ' '],
  ['o', 'o', ' ']])

assert(!ticTacToe.terminalTest(state))
assert.equal(ticTacToe.utility(state), undefined)

state = ticTacToe.result(state, [1, 2])
assert.deepEqual(state, [
  [' ', ' ', ' '],
  ['x', 'x', 'x'],
  ['o', 'o', ' ']])
assert(ticTacToe.terminalTest(state))
assert.equal(ticTacToe.utility(state), 1)
