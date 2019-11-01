import { depthLimitedSearch } from './depth-limited.mjs'
import { vacuumWorld } from '../../problems/toy-problems/vacuum-world.mjs'
import { makeEightPuzzle } from '../../problems/toy-problems/eight-puzzle.mjs'
import { eightQueens } from '../../problems/toy-problems/eight-queens.mjs'
import { makeKnuthConjecture } from '../../problems/toy-problems/knuth-conjecture.mjs'
import { makeRouteFindingProblem } from '../../problems/real-world-problems/route-finding.mjs'
import { makeTouringProblem } from '../../problems/real-world-problems/touring.mjs'
import { makeTravelingSalespersonProblem } from '../../problems/real-world-problems/traveling-salesperson.mjs'
import { cities } from '../../problems/real-world-problems/cities.mjs'
import { strict as assert } from 'assert'

// vacuum world
assert.equal(depthLimitedSearch(vacuumWorld, 2), 'cutoff')
assert.deepEqual(depthLimitedSearch(vacuumWorld, 3).pop(), {
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
assert(simpleEightPuzzle.goalTest(depthLimitedSearch(simpleEightPuzzle, 2).pop()))

// eight queens
assert.deepEqual(depthLimitedSearch(eightQueens, 8).pop(), [
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
assert(depthLimitedSearch(simpleKnuthConjecture, 3).pop(), 1)

// route finding
const routeFindingProblem = makeRouteFindingProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(depthLimitedSearch(routeFindingProblem, 4), ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// touring
const touringProblem = makeTouringProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(depthLimitedSearch(touringProblem, 4).pop(), ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// traveling salesperson
const travelingSalespersonProblem = makeTravelingSalespersonProblem(cities, 'Arad', 'Bucharest')
assert(!depthLimitedSearch(travelingSalespersonProblem, 20))
