import { depthFirstSearch } from './depth-first-search.mjs'
import { incrementalEightQueensProblem as eightQueensProblem } from '../search-problems/toy-problems/eight-queens-problem.mjs'
import { makeTouringProblem } from '../search-problems/real-world-problems/touring-problem.mjs'
import { makeTravelingSalespersonProblem } from '../search-problems/real-world-problems/traveling-salesperson-problem.mjs'
import { cities } from '../search-problems/real-world-problems/cities.mjs'
import { strict as assert } from 'assert'

// eight queens
assert.deepEqual(depthFirstSearch(eightQueensProblem).state, [
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0]
])

// touring
const touringProblem = makeTouringProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(depthFirstSearch(touringProblem).state, [
  'Arad',
  'Timisoara',
  'Lugoj',
  'Mehadia',
  'Drobeta',
  'Craiova',
  'RimnicuVilcea',
  'Pitesti',
  'Bucharest'
]) // depends on the arbitrary order of attributes in the cities graph

// traveling salesperson
const travelingSalespersonProblem = makeTravelingSalespersonProblem(cities, 'Arad', 'Bucharest')
assert(!depthFirstSearch(travelingSalespersonProblem))
