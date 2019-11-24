import { makeRouteFindingProblem } from './route-finding-problem.mjs'
import { cities } from './cities.mjs'
import { strict as assert } from 'assert'

const routeFindingProblem = makeRouteFindingProblem(cities, 'Arad', 'Bucharest')

let state = routeFindingProblem.initialState
assert.equal(state, 'Arad')
assert.equal(routeFindingProblem.stepCost(state, 'Sibiu'), 140)

state = routeFindingProblem.result(state, 'Sibiu')
assert.equal(state, 'Sibiu')
assert.equal(routeFindingProblem.stepCost(state, 'RimnicuVilcea'), 80)

state = routeFindingProblem.result(state, 'RimnicuVilcea')
assert.equal(state, 'RimnicuVilcea')
assert.equal(routeFindingProblem.stepCost(state, 'Arad'), undefined)

state = routeFindingProblem.result(state, 'Arad')
assert.equal(state, undefined)
