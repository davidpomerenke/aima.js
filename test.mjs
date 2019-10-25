import { strict as assert } from 'assert'

import { tableVacuumAgent } from './intelligent-agents/table-driven-agent.mjs'
import { reflexVacuumAgent } from './intelligent-agents/simple-reflex-agent.mjs'
import { vacuumWorld } from './problems/vacuum-world.mjs'
import { eightPuzzle } from './problems/eight-puzzle.mjs'
import { eightQueens } from './problems/eight-queens.mjs'
import { knuthConjecture } from './problems/knuth-conjecture.mjs'
import { routeFindingProblem, touringProblem, travelingSalespersonProblem } from './problems/route-finding.mjs'

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
let state
// -- toy problems
// -- -- vacuum world
state = vacuumWorld.initialState
assert.deepEqual(state, { location: 'A', A: 'dirty', B: 'dirty' })
state = vacuumWorld.result(state, 'suck')
assert.deepEqual(state, { location: 'A', A: 'clean', B: 'dirty' })
state = vacuumWorld.result(state, 'suck')
assert.deepEqual(state, { location: 'A', A: 'clean', B: 'dirty' })
state = vacuumWorld.result(state, 'left')
assert.deepEqual(state, { location: 'A', A: 'clean', B: 'dirty' })
state = vacuumWorld.result(state, 'right')
assert.deepEqual(state, { location: 'B', A: 'clean', B: 'dirty' })
assert(!vacuumWorld.goalTest(state))
state = vacuumWorld.result(state, 'suck')
assert.deepEqual(state, { location: 'B', A: 'clean', B: 'clean' })
assert(vacuumWorld.goalTest(state))
// -- -- eight puzzle
state = eightPuzzle.initialState
assert.deepEqual(state, [
  [1, 4, 2],
  [3, 0, 5],
  [6, 7, 8]
])
state = eightPuzzle.result(state, 'up')
assert.deepEqual(state, [
  [1, 0, 2],
  [3, 4, 5],
  [6, 7, 8]
])
assert(!eightPuzzle.goalTest(state))
state = eightPuzzle.result(state, 'left')
assert.deepEqual(state, [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
])
assert(eightPuzzle.goalTest(state))
// -- -- eight queens
state = eightQueens.initialState
state = eightQueens.result(state, 3)
assert.deepEqual(state, [
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
])
assert.deepEqual(eightQueens.result(state, 3), undefined)
state = eightQueens.result(state, 5)
assert.deepEqual(state, [
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
])
assert.deepEqual(eightQueens.result(state, 1), undefined)
// -- -- knuth conjecture
state = knuthConjecture.initialState
assert.deepEqual(state, [4])
state = knuthConjecture.result(state, 'factorial')
state = knuthConjecture.result(state, 'factorial')
state = knuthConjecture.result(state, 'square_root')
state = knuthConjecture.result(state, 'square_root')
state = knuthConjecture.result(state, 'square_root')
state = knuthConjecture.result(state, 'square_root')
state = knuthConjecture.result(state, 'square_root')
assert(!knuthConjecture.goalTest(state))
state = knuthConjecture.result(state, 'floor')
assert(knuthConjecture.goalTest(state))
// -- real world problems
// -- -- route finding
state = routeFindingProblem.initialState
assert.equal(state, 'Arad')
assert.equal(routeFindingProblem.pathCost(state, 'Sibiu'), 140)
state = routeFindingProblem.result(state, 'Sibiu')
assert.equal(state, 'Sibiu')
assert.equal(routeFindingProblem.pathCost(state, 'Rimnicu_Vilcea'), 80)
state = routeFindingProblem.result(state, 'Rimnicu_Vilcea')
assert.equal(state, 'Rimnicu_Vilcea')
assert.equal(routeFindingProblem.pathCost(state, 'Arad'), undefined)
state = routeFindingProblem.result(state, 'Arad')
assert.equal(state, undefined)
// -- -- touring problem
state = touringProblem.initialState
assert.deepEqual(state, ['Arad'])
assert.equal(touringProblem.pathCost(state, 'Sibiu'), 140)
state = touringProblem.result(state, 'Sibiu')
assert.deepEqual(state, ['Sibiu', 'Arad'])
assert.equal(touringProblem.pathCost(state, 'Rimnicu_Vilcea'), 80)
state = touringProblem.result(state, 'Rimnicu_Vilcea')
assert.deepEqual(state, ['Rimnicu_Vilcea', 'Sibiu', 'Arad'])
assert.equal(touringProblem.pathCost(state, 'Sibiu'), undefined)
state = touringProblem.result(state, 'Sibiu')
assert.deepEqual(state, undefined)
// -- -- traveling salesperson problem
state = travelingSalespersonProblem.initialState
assert.deepEqual(state, ['Arad'])
assert.equal(travelingSalespersonProblem.pathCost(state, 'Sibiu'), 140)
state = travelingSalespersonProblem.result(state, 'Sibiu')
assert.deepEqual(state, ['Sibiu', 'Arad'])
assert.equal(travelingSalespersonProblem.pathCost(state, 'Arad'), undefined)
state = travelingSalespersonProblem.result(state, 'Arad')
assert.deepEqual(state, undefined)
