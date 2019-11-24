import { makeKnuthConjecture } from './knuth-conjecture.mjs'
import { strict as assert } from 'assert'

const complexKnuthConjecture = makeKnuthConjecture(5)

let state = complexKnuthConjecture.initialState
assert.deepEqual(state, [4])

state = complexKnuthConjecture.result(state, 'factorial')
state = complexKnuthConjecture.result(state, 'factorial')
state = complexKnuthConjecture.result(state, 'square_root')
state = complexKnuthConjecture.result(state, 'square_root')
state = complexKnuthConjecture.result(state, 'square_root')
state = complexKnuthConjecture.result(state, 'square_root')

state = complexKnuthConjecture.result(state, 'square_root')
assert(!complexKnuthConjecture.goalTest(state))

state = complexKnuthConjecture.result(state, 'floor')
assert(complexKnuthConjecture.goalTest(state))
