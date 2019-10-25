import { strict as assert } from 'assert'
import { reflexVacuumAgent } from './simple-reflex-agent.mjs'

assert.equal(reflexVacuumAgent.action([['A', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['A', 'clean']]), 'right')
assert.equal(reflexVacuumAgent.action([['B', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['C', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['C', 'clean']]), undefined)
