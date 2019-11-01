import { makeTravelingSalespersonProblem } from './traveling-salesperson-problem.mjs'
import { cities } from './cities.mjs'
import { strict as assert } from 'assert'

const travelingSalespersonProblem = makeTravelingSalespersonProblem(cities, 'Arad', 'Bucharest')

const state = []
state[0] = travelingSalespersonProblem.initialState
assert.deepEqual(state[0], ['Arad'])
assert.equal(travelingSalespersonProblem.pathCost(state[0], 'Sibiu'), 140)

state[1] = travelingSalespersonProblem.result(state[0], 'Sibiu')
assert.deepEqual(state[1], ['Arad', 'Sibiu'])
assert.equal(travelingSalespersonProblem.pathCost(state[1], 'Arad'), undefined)

state[2] = travelingSalespersonProblem.result(state[1], 'Arad')
assert.deepEqual(state[2], undefined)
