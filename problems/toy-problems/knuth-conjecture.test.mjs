import { knuthConjecture } from './knuth-conjecture.mjs'
import { strict as assert } from 'assert'

const state = []

state[0] = knuthConjecture.initialState
assert.deepEqual(state[0], 4)

state[1] = knuthConjecture.result(state[0], 'factorial')
state[2] = knuthConjecture.result(state[1], 'factorial')
state[3] = knuthConjecture.result(state[2], 'square_root')
state[4] = knuthConjecture.result(state[3], 'square_root')
state[5] = knuthConjecture.result(state[4], 'square_root')
state[6] = knuthConjecture.result(state[5], 'square_root')

state[7] = knuthConjecture.result(state[6], 'square_root')
assert(!knuthConjecture.goalTest(state[7]))

state[8] = knuthConjecture.result(state[7], 'floor')
assert(knuthConjecture.goalTest(state[8]))
