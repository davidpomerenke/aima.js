import { depthFirstSearch } from './depth-first.mjs'
import { eightQueens } from '../problems/toy-problems/eight-queens.mjs'
import { routeFindingProblem } from '../problems/real-world-problems/route-finding.test.mjs'
import { touringProblem } from '../problems/real-world-problems/touring.test.mjs'
import { travelingSalespersonProblem } from '../problems/real-world-problems/traveling-salesperson.test.mjs'
import { strict as assert } from 'assert'

// eight queens
assert.deepEqual(depthFirstSearch(eightQueens).pop(), [
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0]
])

// route finding
assert.deepEqual(depthFirstSearch(routeFindingProblem), [
  'Arad',
  'Timisoara',
  'Lugoj',
  'Mehadia',
  'Drobeta',
  'Craiova',
  'Pitesti',
  'Bucharest'
]) // depends on the arbitrary order of attributes in the cities graph

// touring
assert.deepEqual(depthFirstSearch(touringProblem).pop(), [
  'Arad',
  'Timisoara',
  'Lugoj',
  'Mehadia',
  'Drobeta',
  'Craiova',
  'Rimnicu_Vilcea',
  'Pitesti',
  'Bucharest'
]) // depends on the arbitrary order of attributes in the cities graph

// traveling salesperson
assert(!depthFirstSearch(travelingSalespersonProblem))
