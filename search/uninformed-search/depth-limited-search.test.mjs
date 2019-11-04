import { depthLimitedSearch } from './depth-limited-search.mjs'
import { Problem } from '../../problem.mjs'
import { vacuumWorld } from '../search-problems/toy-problems/vacuum-world.mjs'
import { makeEightPuzzle } from '../search-problems/toy-problems/eight-puzzle.mjs'
import { eightQueensProblem } from '../search-problems/toy-problems/eight-queens-problem.mjs'
import { makeKnuthConjecture } from '../search-problems/toy-problems/knuth-conjecture.mjs'
import { makeRouteFindingProblem } from '../search-problems/real-world-problems/route-finding-problem.mjs'
import { makeTouringProblem } from '../search-problems/real-world-problems/touring-problem.mjs'
import { makeTravelingSalespersonProblem } from '../search-problems/real-world-problems/traveling-salesperson-problem.mjs'
import { cities } from '../search-problems/real-world-problems/cities.mjs'
import { strict as assert } from 'assert'

// vacuum world
assert.equal(depthLimitedSearch(vacuumWorld, 2), 'cutoff')
assert.deepEqual(depthLimitedSearch(vacuumWorld, 3).state, {
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
assert.equal(depthLimitedSearch(simpleEightPuzzle, 1), 'cutoff')
assert(simpleEightPuzzle.goalTest(depthLimitedSearch(simpleEightPuzzle, 2).state))

// eight queens
assert.deepEqual(depthLimitedSearch(eightQueensProblem, 8).state, [
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
assert.equal(depthLimitedSearch(simpleKnuthConjecture, 2), 'cutoff')
assert(depthLimitedSearch(simpleKnuthConjecture, 3).state, 1)

// route finding
const routeFindingProblem = makeRouteFindingProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(Problem.solution(depthLimitedSearch(routeFindingProblem, 4)), ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// touring
const touringProblem = makeTouringProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(depthLimitedSearch(touringProblem, 4).state, ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// traveling salesperson
const travelingSalespersonProblem = makeTravelingSalespersonProblem(cities, 'Arad', 'Bucharest')
assert(!depthLimitedSearch(travelingSalespersonProblem, 20))
