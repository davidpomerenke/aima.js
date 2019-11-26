import { mapColoringProblem } from './map-coloring-problem.mjs'
import { depthFirstSearch } from '../../search/uninformed-search/depth-first-search.mjs'
import { strict as assert } from 'assert'

let state
state = mapColoringProblem.initialState
assert.deepEqual(state, [])
assert(!mapColoringProblem.satisfied(state))
assert.deepEqual(mapColoringProblem.actions(state), [['WA', 'red'], ['WA', 'green'], ['WA', 'blue']])

state = mapColoringProblem.result(state, ['WA', 'red'])
assert.deepEqual(state, [['WA', 'red']])
assert(!mapColoringProblem.satisfied(state))
assert.deepEqual(mapColoringProblem.actions(state), [['NT', 'red'], ['NT', 'green'], ['NT', 'blue']])

state = mapColoringProblem.result(state, ['NT', 'green'])
assert.deepEqual(state, [['WA', 'red'], ['NT', 'green']])
assert(!mapColoringProblem.satisfied(state))
assert.deepEqual(mapColoringProblem.actions(state), [['Q', 'red'], ['Q', 'green'], ['Q', 'blue']])

let solution
solution = [
  ['WA', 'blue'],
  ['NT', 'green'],
  ['Q', 'red'],
  ['NSW', 'green'],
  ['V', 'red'],
  ['SA', 'blue'],
  ['T', 'red']
]
assert(!mapColoringProblem.satisfied(solution))

solution = [
  ['WA', 'red'],
  ['NT', 'green'],
  ['Q', 'red'],
  ['NSW', 'green'],
  ['V', 'red'],
  ['SA', 'green'],
  ['T', 'red']
]
assert(!mapColoringProblem.satisfied(solution))

solution = [
  ['WA', 'red'],
  ['NT', 'green'],
  ['Q', 'red'],
  ['NSW', 'green'],
  ['V', 'blue'],
  ['SA', 'blue'],
  ['T', 'red']
]
assert(!mapColoringProblem.satisfied(solution))

solution = [
  ['WA', 'red'],
  ['NT', 'green'],
  ['Q', 'red'],
  ['NSW', 'green'],
  ['V', 'red'],
  ['SA', 'blue'],
  ['T', 'red']
]
assert(mapColoringProblem.satisfied(solution))

assert.deepEqual(depthFirstSearch(mapColoringProblem).state, [
  ['WA', 'blue'],
  ['NT', 'green'],
  ['Q', 'blue'],
  ['NSW', 'green'],
  ['V', 'blue'],
  ['SA', 'red'],
  ['T', 'blue']
])
