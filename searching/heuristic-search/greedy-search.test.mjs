import { greedySearch } from './greedy-search.mjs'
import { vacuumWorld } from '../../problems/toy-problems/vacuum-world.mjs'
import { makeEightPuzzle } from '../../problems/toy-problems/eight-puzzle.mjs'
import { eightQueensProblem } from '../../problems/toy-problems/eight-queens-problem.mjs'
import { makeKnuthConjecture } from '../../problems/toy-problems/knuth-conjecture.mjs'
import { makeRouteFindingProblem } from '../../problems/real-world-problems/route-finding-problem.mjs'
import { makeTouringProblem } from '../../problems/real-world-problems/touring-problem.mjs'
import { makeTravelingSalespersonProblem } from '../../problems/real-world-problems/traveling-salesperson-problem.mjs'
import { cities } from '../../problems/real-world-problems/cities.mjs'
import { strict as assert } from 'assert'

// vacuum world

assert.deepEqual(greedySearch(vacuumWorld).pop(), {
  location: 'B',
  A: 'clean',
  B: 'clean'
})

// eight puzzle
const simpleEightPuzzle = makeEightPuzzle([
  [1, 4, 2],
  [3, 0, 5],
  [6, 7, 8]
])
assert(simpleEightPuzzle.goalTest(greedySearch(simpleEightPuzzle).pop()))

// eight queens
assert.deepEqual(greedySearch(eightQueensProblem.incremental).pop(), [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0]
])

// knuth conjecture
const simpleKnuthConjecture = makeKnuthConjecture(1, true)
assert(greedySearch(simpleKnuthConjecture).pop(), 1)

// route finding
const routeFindingProblem = makeRouteFindingProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(greedySearch(routeFindingProblem), ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// touring
const touringProblem = makeTouringProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(greedySearch(touringProblem).pop(), ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// traveling salesperson
const travelingSalespersonProblem = makeTravelingSalespersonProblem(cities, 'Arad', 'Bucharest')
assert(!greedySearch(travelingSalespersonProblem))
