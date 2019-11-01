import { makeTouringProblem } from './touring.mjs'
import { cities } from './cities.mjs'
import { strict as assert } from 'assert'

const touringProblem = makeTouringProblem(cities, 'Arad', 'Bucharest')

const state = []
state[0] = touringProblem.initialState
assert.deepEqual(state[0], ['Arad'])
assert.equal(touringProblem.pathCost(state[0], 'Sibiu'), 140)

state[1] = touringProblem.result(state[0], 'Sibiu')
assert.deepEqual(state[1], ['Arad', 'Sibiu'])
assert.equal(touringProblem.pathCost(state[1], 'Rimnicu_Vilcea'), 80)

state[2] = touringProblem.result(state[1], 'Rimnicu_Vilcea')
assert.deepEqual(state[2], ['Arad', 'Sibiu', 'Rimnicu_Vilcea'])
assert.equal(touringProblem.pathCost(state[2], 'Sibiu'), undefined)

state[3] = touringProblem.result(state[2], 'Sibiu')
assert.deepEqual(state[3], undefined)
