import { strict as assert } from 'assert'
import { travelingSalespersonProblem } from './traveling-salesperson.mjs'

const state = []
state[0] = travelingSalespersonProblem.initialState
assert.deepEqual(state[0], ['Arad'])
assert.equal(travelingSalespersonProblem.pathCost(state[0], 'Sibiu'), 140)
state[1] = travelingSalespersonProblem.result(state[0], 'Sibiu')
assert.deepEqual(state[1], ['Sibiu', 'Arad'])
assert.equal(travelingSalespersonProblem.pathCost(state[1], 'Arad'), undefined)
state[2] = travelingSalespersonProblem.result(state[1], 'Arad')
assert.deepEqual(state[2], undefined)