import { uniformCostSearch } from './uniform-cost.mjs'
import { vacuumWorld } from '../problems/toy-problems/vacuum-world.mjs'
import { simpleEightPuzzle } from '../problems/toy-problems/eight-puzzle.test.mjs'
import { eightQueens } from '../problems/toy-problems/eight-queens.mjs'
import { simpleKnuthConjecture } from '../problems/toy-problems/knuth-conjecture.test.mjs'
import { routeFindingProblem } from '../problems/real-world-problems/route-finding.test.mjs'
import { touringProblem } from '../problems/real-world-problems/touring.test.mjs'
import { travelingSalespersonProblem } from '../problems/real-world-problems/traveling-salesperson.test.mjs'
import { strict as assert } from 'assert'

// vacuum world
assert.deepEqual(uniformCostSearch(vacuumWorld, true).pop(), {
  location: 'B',
  A: 'clean',
  B: 'clean'
})

// eight puzzle
assert(simpleEightPuzzle.goalTest(uniformCostSearch(simpleEightPuzzle).pop()))

// eight queens
assert.deepEqual(uniformCostSearch(eightQueens).pop(), [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0]
])

// knuth conjecture - does not terminate
assert(uniformCostSearch(simpleKnuthConjecture).pop(), 1)

// route finding
assert.deepEqual(uniformCostSearch(routeFindingProblem), ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])

// touring
assert.deepEqual(uniformCostSearch(touringProblem).pop(), ['Bucharest', 'Fagaras', 'Sibiu', 'Arad'])

// traveling salesperson
assert(!uniformCostSearch(travelingSalespersonProblem))
