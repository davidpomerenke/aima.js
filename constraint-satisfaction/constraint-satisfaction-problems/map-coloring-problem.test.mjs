import { mapColoringProblem } from './map-coloring-problem.mjs'
import { strict as assert } from 'assert'

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
