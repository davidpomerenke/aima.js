import { TableDrivenAgent } from './table-driven-agent.mjs'
import { strict as assert } from 'assert'

const tableVacuumAgent = new TableDrivenAgent({
  [[['A', 'clean']]]: 'right',
  [[['A', 'dirty']]]: 'suck',
  [[['B', 'clean']]]: 'left',
  [[['B', 'dirty']]]: 'suck',
  [[['A', 'clean'], ['A', 'clean']]]: 'right',
  [[['A', 'clean'], ['A', 'dirty']]]: 'suck',
  [[['A', 'clean'], ['B', 'clean']]]: 'left',
  [[['A', 'clean'], ['B', 'dirty']]]: 'suck',
  [[['A', 'dirty'], ['A', 'clean']]]: 'right',
  [[['A', 'dirty'], ['A', 'dirty']]]: 'suck',
  [[['A', 'dirty'], ['B', 'clean']]]: 'left',
  [[['A', 'dirty'], ['B', 'dirty']]]: 'suck',
  [[['B', 'clean'], ['A', 'clean']]]: 'right',
  [[['B', 'clean'], ['A', 'dirty']]]: 'suck',
  [[['B', 'clean'], ['B', 'clean']]]: 'left',
  [[['B', 'clean'], ['B', 'dirty']]]: 'suck',
  [[['B', 'clean'], ['A', 'clean']]]: 'right',
  [[['B', 'clean'], ['A', 'dirty']]]: 'suck',
  [[['B', 'clean'], ['B', 'clean']]]: 'left',
  [[['B', 'clean'], ['B', 'dirty']]]: 'suck',
  [[['A', 'clean'], ['A', 'clean'], ['A', 'clean']]]: 'right',
  [[['A', 'clean'], ['A', 'clean'], ['A', 'dirty']]]: 'suck'
  // ...
})

assert.equal(tableVacuumAgent.action([['A', 'dirty']]), 'suck')
assert.equal(tableVacuumAgent.action([['A', 'clean']]), 'right')
assert.equal(tableVacuumAgent.action([['B', 'dirty']]), undefined)
