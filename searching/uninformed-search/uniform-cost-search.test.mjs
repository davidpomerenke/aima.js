import { uniformCostSearch } from './uniform-cost-search.mjs'
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

assert.deepEqual(uniformCostSearch(vacuumWorld).pop(), {
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
assert(simpleEightPuzzle.goalTest(uniformCostSearch(simpleEightPuzzle).pop()))

// eight queens
assert.deepEqual(uniformCostSearch(eightQueensProblem.incremental).pop(), [
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
assert(uniformCostSearch(simpleKnuthConjecture).pop(), 1)

// route finding
const routeFindingProblem = makeRouteFindingProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(uniformCostSearch(routeFindingProblem), ['Arad', 'Sibiu', 'RimnicuVilcea', 'Pitesti', 'Bucharest'])

// touring
const touringProblem = makeTouringProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(uniformCostSearch(touringProblem).pop(), ['Arad', 'Sibiu', 'RimnicuVilcea', 'Pitesti', 'Bucharest'])

// traveling salesperson
const travelingSalespersonProblem = makeTravelingSalespersonProblem(cities, 'Arad', 'Bucharest')
assert(!uniformCostSearch(travelingSalespersonProblem))
