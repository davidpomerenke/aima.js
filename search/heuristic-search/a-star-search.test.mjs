import { aStarSearch } from './a-star-search.mjs'
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
assert.deepEqual(aStarSearch(vacuumWorld).state, {
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
assert(simpleEightPuzzle.goalTest(aStarSearch(simpleEightPuzzle).state))

// eight queens
assert.deepEqual(aStarSearch(eightQueensProblem).state, [
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
assert(aStarSearch(simpleKnuthConjecture).state, 1)

// route finding
const routeFindingProblem = makeRouteFindingProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(Problem.solution(aStarSearch(routeFindingProblem)), ['Arad', 'Sibiu', 'RimnicuVilcea', 'Pitesti', 'Bucharest'])

// touring
const touringProblem = makeTouringProblem(cities, 'Arad', 'Bucharest')
assert.deepEqual(aStarSearch(touringProblem).state, ['Arad', 'Sibiu', 'RimnicuVilcea', 'Pitesti', 'Bucharest'])

// traveling salesperson
const travelingSalespersonProblem = makeTravelingSalespersonProblem(cities, 'Arad', 'Bucharest')
assert(!aStarSearch(travelingSalespersonProblem))
