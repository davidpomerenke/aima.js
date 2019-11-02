import { makeRouteFindingProblem } from './route-finding-problem.mjs'
import { cities } from './cities.mjs'
import { strict as assert } from 'assert'

const routeFindingProblem = makeRouteFindingProblem(cities, 'Arad', 'Bucharest')

const state = []
state[0] = routeFindingProblem.initialState
assert.equal(state[0], 'Arad')
assert.equal(routeFindingProblem.pathCost(state[0], 'Sibiu'), 140)

state[1] = routeFindingProblem.result(state[0], 'Sibiu')
assert.equal(state[1], 'Sibiu')
assert.equal(routeFindingProblem.pathCost(state[1], 'RimnicuVilcea'), 80)

state[2] = routeFindingProblem.result(state[1], 'RimnicuVilcea')
assert.equal(state[2], 'RimnicuVilcea')
assert.equal(routeFindingProblem.pathCost(state[2], 'Arad'), undefined)

state[3] = routeFindingProblem.result(state[2], 'Arad')
assert.equal(state[3], undefined)
