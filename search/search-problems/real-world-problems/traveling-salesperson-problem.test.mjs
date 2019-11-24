import { makeTravelingSalespersonProblem } from './traveling-salesperson-problem.mjs'
import { cities } from './cities.mjs'
import { strict as assert } from 'assert'

const travelingSalespersonProblem = makeTravelingSalespersonProblem(cities, 'Arad', 'Bucharest')

let state = travelingSalespersonProblem.initialState
assert.deepEqual(state, ['Arad'])
assert.equal(travelingSalespersonProblem.stepCost(state, 'Sibiu'), 140)

state = travelingSalespersonProblem.result(state, 'Sibiu')
assert.deepEqual(state, ['Arad', 'Sibiu'])
assert.equal(travelingSalespersonProblem.stepCost(state, 'Arad'), undefined)

state = travelingSalespersonProblem.result(state, 'Arad')
assert.deepEqual(state, undefined)
