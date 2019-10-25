import { strict as assert } from 'assert'

import { tableVacuumAgent } from './intelligent-agents/table-driven-agent.mjs'
import { reflexVacuumAgent } from './intelligent-agents/simple-reflex-agent.mjs'
import { vacuumWorld } from './problems/vacuum-world.mjs'
import { eightPuzzle } from './problems/eight-puzzle.mjs'
import { eightQueens } from './problems/eight-queens.mjs'
import { knuthConjecture } from './problems/knuth-conjecture.mjs'
import { routeFindingProblem } from './problems/route-finding.mjs'
import { touringProblem } from './problems/touring.mjs'
import { travelingSalespersonProblem } from './problems/traveling-salesperson.mjs'
import { breadthFirstSearch } from './searching/breadth-first.mjs'

// intelligent agents
// -- table-driven agent
assert.equal(tableVacuumAgent.action([['A', 'dirty']]), 'suck')
assert.equal(tableVacuumAgent.action([['A', 'clean']]), 'right')
assert.equal(tableVacuumAgent.action([['B', 'dirty']]), undefined)
// -- simple reflex agent
assert.equal(reflexVacuumAgent.action([['A', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['A', 'clean']]), 'right')
assert.equal(reflexVacuumAgent.action([['B', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['C', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['C', 'clean']]), undefined)
// problem solving
// -- toy problems
// -- -- vacuum world
{
  const state = []
  state[0] = vacuumWorld.initialState
  assert.deepEqual(state[0], { location: 'A', A: 'dirty', B: 'dirty' })
  state[1] = vacuumWorld.result(state[0], 'suck')
  assert.deepEqual(state[1], { location: 'A', A: 'clean', B: 'dirty' })
  state[2] = vacuumWorld.result(state[1], 'suck')
  assert.deepEqual(state[2], { location: 'A', A: 'clean', B: 'dirty' })
  state[3] = vacuumWorld.result(state[2], 'left')
  assert.deepEqual(state[3], { location: 'A', A: 'clean', B: 'dirty' })
  state[4] = vacuumWorld.result(state[3], 'right')
  assert.deepEqual(state[4], { location: 'B', A: 'clean', B: 'dirty' })
  assert(!vacuumWorld.goalTest(state[4]))
  state[5] = vacuumWorld.result(state[4], 'suck')
  assert.deepEqual(state[5], { location: 'B', A: 'clean', B: 'clean' })
  assert(vacuumWorld.goalTest(state[5]))
}
// -- -- eight puzzle
{
  const state = []
  state[0] = eightPuzzle.initialState
  assert.deepEqual(state[0], [
    [1, 4, 2],
    [3, 0, 5],
    [6, 7, 8]
  ])
  state[1] = eightPuzzle.result(state[0], 'up')
  assert.deepEqual(state[1], [
    [1, 0, 2],
    [3, 4, 5],
    [6, 7, 8]
  ])
  assert(!eightPuzzle.goalTest(state[1]))
  state[2] = eightPuzzle.result(state[1], 'left')
  assert.deepEqual(state[2], [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ])
  assert(eightPuzzle.goalTest(state[2]))
}
// -- -- eight queens
{
  const state = []
  state[0] = eightQueens.initialState
  state[1] = eightQueens.result(state[0], 3)
  assert.deepEqual(state[1], [
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ])
  assert.deepEqual(eightQueens.result(state[1], 3), undefined)
  state[2] = eightQueens.result(state[1], 5)
  assert.deepEqual(state[2], [
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ])
  assert.deepEqual(eightQueens.result(state[2], 1), undefined)
}
// -- -- knuth conjecture
{
  const state = []
  state[0] = knuthConjecture.initialState
  assert.deepEqual(state[0], 4)
  state[1] = knuthConjecture.result(state[0], 'factorial')
  state[2] = knuthConjecture.result(state[1], 'factorial')
  state[3] = knuthConjecture.result(state[2], 'square_root')
  state[4] = knuthConjecture.result(state[3], 'square_root')
  state[5] = knuthConjecture.result(state[4], 'square_root')
  state[6] = knuthConjecture.result(state[5], 'square_root')
  state[7] = knuthConjecture.result(state[6], 'square_root')
  assert(!knuthConjecture.goalTest(state[7]))
  state[8] = knuthConjecture.result(state[7], 'floor')
  assert(knuthConjecture.goalTest(state[8]))
}
// -- real world problems
// -- -- route finding
{
  const state = []
  state[0] = routeFindingProblem.initialState
  assert.equal(state[0], 'Arad')
  assert.equal(routeFindingProblem.pathCost(state[0], 'Sibiu'), 140)
  state[1] = routeFindingProblem.result(state[0], 'Sibiu')
  assert.equal(state[1], 'Sibiu')
  assert.equal(routeFindingProblem.pathCost(state[1], 'Rimnicu_Vilcea'), 80)
  state[2] = routeFindingProblem.result(state[1], 'Rimnicu_Vilcea')
  assert.equal(state[2], 'Rimnicu_Vilcea')
  assert.equal(routeFindingProblem.pathCost(state[2], 'Arad'), undefined)
  state[3] = routeFindingProblem.result(state[2], 'Arad')
  assert.equal(state[3], undefined)
}
// -- -- touring problem
{
  const state = []
  state[0] = touringProblem.initialState
  assert.deepEqual(state[0], ['Arad'])
  assert.equal(touringProblem.pathCost(state[0], 'Sibiu'), 140)
  state[1] = touringProblem.result(state[0], 'Sibiu')
  assert.deepEqual(state[1], ['Sibiu', 'Arad'])
  assert.equal(touringProblem.pathCost(state[1], 'Rimnicu_Vilcea'), 80)
  state[2] = touringProblem.result(state[1], 'Rimnicu_Vilcea')
  assert.deepEqual(state[2], ['Rimnicu_Vilcea', 'Sibiu', 'Arad'])
  assert.equal(touringProblem.pathCost(state[2], 'Sibiu'), undefined)
  state[3] = touringProblem.result(state[2], 'Sibiu')
  assert.deepEqual(state[3], undefined)
}
// -- -- traveling salesperson problem
{
  const state = []
  state[0] = travelingSalespersonProblem.initialState
  assert.deepEqual(state[0], ['Arad'])
  assert.equal(travelingSalespersonProblem.pathCost(state[0], 'Sibiu'), 140)
  state[1] = travelingSalespersonProblem.result(state[0], 'Sibiu')
  assert.deepEqual(state[1], ['Sibiu', 'Arad'])
  assert.equal(travelingSalespersonProblem.pathCost(state[1], 'Arad'), undefined)
  state[2] = travelingSalespersonProblem.result(state[1], 'Arad')
  assert.deepEqual(state[2], undefined)
}
// searching
// -- breadth-first search
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
