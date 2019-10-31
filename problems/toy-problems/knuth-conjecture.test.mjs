import { makeKnuthConjecture } from './knuth-conjecture.mjs'
import { strict as assert } from 'assert'

export const complexKnuthConjecture = makeKnuthConjecture(5)
const state = []

state[0] = complexKnuthConjecture.initialState
assert.deepEqual(state[0], 4)

state[1] = complexKnuthConjecture.result(state[0], 'factorial')
state[2] = complexKnuthConjecture.result(state[1], 'factorial')
state[3] = complexKnuthConjecture.result(state[2], 'square_root')
state[4] = complexKnuthConjecture.result(state[3], 'square_root')
state[5] = complexKnuthConjecture.result(state[4], 'square_root')
state[6] = complexKnuthConjecture.result(state[5], 'square_root')

state[7] = complexKnuthConjecture.result(state[6], 'square_root')
assert(!complexKnuthConjecture.goalTest(state[7]))

state[8] = complexKnuthConjecture.result(state[7], 'floor')
assert(complexKnuthConjecture.goalTest(state[8]))

export const simpleKnuthConjecture = makeKnuthConjecture(1)
