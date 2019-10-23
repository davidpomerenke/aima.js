import { strict as assert } from 'assert'

import { tableVacuumAgent } from './intelligentAgents/tableDrivenAgent.mjs'

assert.equal(tableVacuumAgent.action([['A', 'dirty']]), 'suck')
assert.equal(tableVacuumAgent.action([['A', 'clean']]), 'right')
assert.equal(tableVacuumAgent.action([['B', 'dirty']]), undefined)
