import { makeRouteFindingProblem } from './route-finding.mjs'
import { cities } from './cities.mjs'
import { strict as assert } from 'assert'

export const routeFindingProblem = makeRouteFindingProblem(cities, 'Arad', 'Bucharest')

const state = []
state[0] = routeFindingProblem.initialState
assert.equal(state[0], 'Arad')
assert.equal(routeFindingProblem.pathCost(state[0], 'Sibiu'), 140)

state[1] = routeFindingProblem.result(state[0], 'Sibiu')
assert.equal(state[1], 'Sibiu')
assert.equal(routeFindingProblem.pathCost(state[1], 'Rimnicu_Vilcea'), 80)

state[2] = routeFindingProblem.result(state[1], 'Rimnicu_Vilcea')
assert.equal(state[2], 'Rimnicu_Vilcea')
assert.equal(routeFindingProblem.pathCost(state[2], 'Arad'), undefined)

state[3] = routeFindingProblem.result(state[2], 'Arad')
assert.equal(state[3], undefined)
