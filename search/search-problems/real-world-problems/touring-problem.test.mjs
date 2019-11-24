import { makeTouringProblem } from './touring-problem.mjs'
import { cities } from './cities.mjs'
import { strict as assert } from 'assert'

const touringProblem = makeTouringProblem(cities, 'Arad', 'Bucharest')

let state = []
state = touringProblem.initialState
assert.deepEqual(state, ['Arad'])
assert.equal(touringProblem.stepCost(state, 'Sibiu'), 140)

state = touringProblem.result(state, 'Sibiu')
assert.deepEqual(state, ['Arad', 'Sibiu'])
assert.equal(touringProblem.stepCost(state, 'RimnicuVilcea'), 80)

state = touringProblem.result(state, 'RimnicuVilcea')
assert.deepEqual(state, ['Arad', 'Sibiu', 'RimnicuVilcea'])
assert.equal(touringProblem.stepCost(state, 'Sibiu'), undefined)

state = touringProblem.result(state, 'Sibiu')
assert.deepEqual(state, undefined)
