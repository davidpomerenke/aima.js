import { breadthFirstSearch } from './breadth-first-search.mjs'
import { Problem } from '../../problem.mjs'
import { vacuumWorld } from '../search-problems/toy-problems/vacuum-world.mjs'
import { makeEightPuzzle } from '../search-problems/toy-problems/eight-puzzle.mjs'
import { incrementalEightQueensProblem as eightQueensProblem } from '../search-problems/toy-problems/eight-queens-problem.mjs'
import { makeKnuthConjecture } from '../search-problems/toy-problems/knuth-conjecture.mjs'
import { makeRouteFindingProblem } from '../search-problems/real-world-problems/route-finding-problem.mjs'
import { makeTouringProblem } from '../search-problems/real-world-problems/touring-problem.mjs'
import { makeTravelingSalespersonProblem } from '../search-problems/real-world-problems/traveling-salesperson-problem.mjs'
import { cities } from '../search-problems/real-world-problems/cities.mjs'
import { strict as assert } from 'assert'

// vacuum world
assert.deepEqual(breadthFirstSearch(vacuumWorld).state, {
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
assert(simpleEightPuzzle.goalTest(breadthFirstSearch(simpleEightPuzzle).state))

// eight queens
assert.deepEqual(breadthFirstSearch(eightQueensProblem).state, [
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
assert(breadthFirstSearch(simpleKnuthConjecture).state, 1)

// route finding
const routeFindingProblem = makeRouteFindingProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(Problem.solutionPath(breadthFirstSearch(routeFindingProblem)), ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// touring
const touringProblem = makeTouringProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(breadthFirstSearch(touringProblem).state, ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// traveling salesperson
const travelingSalespersonProblem = makeTravelingSalespersonProblem(cities, 'Arad', 'Bucharest')
assert(!breadthFirstSearch(travelingSalespersonProblem))
