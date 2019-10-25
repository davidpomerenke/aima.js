import { strict as assert } from 'assert'
import { vacuumWorld } from './vacuum-world.mjs'

const state = []
state[0] = vacuumWorld.initialState
assert.deepEqual(state[0], { location: 'A', A: 'dirty', B: 'dirty' })
state[1] = vacuumWorld.result(state[0], 'suck')
assert.deepEqual(state[1], { location: 'A', A: 'clean', B: 'dirty' })
state[2] = vacuumWorld.result(state[1], 'suck')
assert.deepEqual(state[2], { location: 'A', A: 'clean', B: 'dirty' })
state[3] = vacuumWorld.result(state[2], 'left')
assert.deepEqual(state[3], { location: 'A', A: 'clean', B: 'dirty' })
state[4] = vacuumWorld.result(state[3], 'right')
assert.deepEqual(state[4], { location: 'B', A: 'clean', B: 'dirty' })
assert(!vacuumWorld.goalTest(state[4]))
state[5] = vacuumWorld.result(state[4], 'suck')
assert.deepEqual(state[5], { location: 'B', A: 'clean', B: 'clean' })
assert(vacuumWorld.goalTest(state[5]))
