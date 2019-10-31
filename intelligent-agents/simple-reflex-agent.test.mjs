import { SimpleReflexAgent } from './simple-reflex-agent.mjs'
import { strict as assert } from 'assert'

const reflexVacuumAgent = new SimpleReflexAgent([
  {
    condition: ([_, status]) => status === 'dirty',
    action: 'suck'
  },
  {
    condition: ([location, _]) => location === 'A',
    action: 'right'
  },
  {
    condition: ([location, _]) => location === 'B',
    action: 'left'
  }
])

assert.equal(reflexVacuumAgent.action([['A', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['A', 'clean']]), 'right')
assert.equal(reflexVacuumAgent.action([['B', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['C', 'dirty']]), 'suck')
assert.equal(reflexVacuumAgent.action([['C', 'clean']]), undefined)
