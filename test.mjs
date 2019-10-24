import { strict as assert } from 'assert'

import { tableVacuumAgent } from './intelligent-agents/table-driven-agent.mjs'
import { reflexVacuumAgent } from './intelligent-agents/simple-reflex-agent.mjs'
import './problem-solving/problem.mjs'

// intelligent agents
//   table-driven agent
assert.equal(tableVacuumAgent.action([['A', 'dirty']]), 'suck')
assert.equal(tableVacuumAgent.action([['A', 'clean']]), 'right')
assert.equal(tableVacuumAgent.action([['B', 'dirty']]), undefined)
//   simple reflex agent
assert.equal(reflexVacuumAgent.action([['A', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['A', 'clean']]), 'right')
assert.equal(reflexVacuumAgent.action([['B', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['C', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['C', 'clean']]), undefined)
// problem solving
//   problem
