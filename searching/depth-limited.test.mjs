import { depthLimitedSearch } from './depth-limited.mjs'
import { vacuumWorld } from '../problems/toy-problems/vacuum-world.mjs'
import { simpleEightPuzzle } from '../problems/toy-problems/eight-puzzle.test.mjs'
import { eightQueens } from '../problems/toy-problems/eight-queens.mjs'
import { simpleKnuthConjecture } from '../problems/toy-problems/knuth-conjecture.test.mjs'
import { routeFindingProblem } from '../problems/real-world-problems/route-finding.test.mjs'
import { touringProblem } from '../problems/real-world-problems/touring.test.mjs'
import { travelingSalespersonProblem } from '../problems/real-world-problems/traveling-salesperson.test.mjs'
import { strict as assert } from 'assert'

// vacuum world
assert.equal(depthLimitedSearch(vacuumWorld, 2), 'cutoff')
assert.deepEqual(depthLimitedSearch(vacuumWorld, 3).pop(), {
  location: 'B',
  A: 'clean',
  B: 'clean'
})

// eight puzzle
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
assert.equal(depthLimitedSearch(simpleKnuthConjecture, 2), 'cutoff')
assert(depthLimitedSearch(simpleKnuthConjecture, 3).pop(), 1)

// route finding
assert.deepEqual(depthLimitedSearch(routeFindingProblem, 4), ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// touring
assert.deepEqual(depthLimitedSearch(touringProblem, 4).pop(), ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// traveling salesperson
assert(!depthLimitedSearch(travelingSalespersonProblem, 20))
