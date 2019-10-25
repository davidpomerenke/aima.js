import { strict as assert } from 'assert'
import { breadthFirstSearch } from './searching/breadth-first.mjs'
import { vacuumWorld } from './problems/toy-problems/vacuum-world.mjs'
import { eightPuzzle } from './problems/toy-problems/eight-puzzle.mjs'
import { eightQueens } from './problems/toy-problems/eight-queens.mjs'
import { knuthConjecture } from './problems/toy-problems/knuth-conjecture.mjs'
import { routeFindingProblem } from './problems/real-world-problems/route-finding.mjs'
import { touringProblem } from './problems/real-world-problems/touring.mjs'
import { travelingSalespersonProblem } from './problems/real-world-problems/traveling-salesperson.mjs'

assert.deepEqual(breadthFirstSearch(vacuumWorld).pop(), {
  location: 'B',
  A: 'clean',
  B: 'clean'
})
assert.deepEqual(breadthFirstSearch(eightPuzzle).pop(), [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
])
assert.deepEqual(breadthFirstSearch(eightQueens).pop(), [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0]
])
// breadthFirstSearch(knuthConjecture) // does not terminate
assert.deepEqual(breadthFirstSearch(routeFindingProblem), ['Arad', 'Sibiu', 'Fagaras', 'Bucharest'])
assert.deepEqual(breadthFirstSearch(touringProblem).pop(), ['Bucharest', 'Fagaras', 'Sibiu', 'Arad'])
assert(!breadthFirstSearch(travelingSalespersonProblem))
