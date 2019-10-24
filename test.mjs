import { strict as assert } from 'assert'

import { tableVacuumAgent } from './intelligent-agents/table-driven-agent.mjs'
import { reflexVacuumAgent } from './intelligent-agents/simple-reflex-agent.mjs'
import { vacuumWorld } from './problem-solving/problem.mjs'

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
// -- problem
assert.deepEqual(vacuumWorld.state, { location: 'A', A: 'dirty', B: 'dirty' })
vacuumWorld.action('suck')
assert.deepEqual(vacuumWorld.state, { location: 'A', A: 'clean', B: 'dirty' })
vacuumWorld.action('suck')
assert.deepEqual(vacuumWorld.state, { location: 'A', A: 'clean', B: 'dirty' })
vacuumWorld.action('left')
assert.deepEqual(vacuumWorld.state, { location: 'A', A: 'clean', B: 'dirty' })
vacuumWorld.action('right')
assert.deepEqual(vacuumWorld.state, { location: 'B', A: 'clean', B: 'dirty' })
assert(!vacuumWorld.isSolved)
vacuumWorld.action('suck')
assert.deepEqual(vacuumWorld.state, { location: 'B', A: 'clean', B: 'clean' })
assert(vacuumWorld.isSolved)
