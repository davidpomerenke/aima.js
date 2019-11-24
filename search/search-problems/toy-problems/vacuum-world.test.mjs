import { vacuumWorld } from './vacuum-world.mjs'
import { strict as assert } from 'assert'

let state = vacuumWorld.initialState
assert.deepEqual(state, { location: 'A', A: 'dirty', B: 'dirty' })

state = vacuumWorld.result(state, 'suck')
assert.deepEqual(state, { location: 'A', A: 'clean', B: 'dirty' })

state = vacuumWorld.result(state, 'suck')
assert.deepEqual(state, { location: 'A', A: 'clean', B: 'dirty' })

state = vacuumWorld.result(state, 'left')
assert.deepEqual(state, { location: 'A', A: 'clean', B: 'dirty' })

state = vacuumWorld.result(state, 'right')
assert.deepEqual(state, { location: 'B', A: 'clean', B: 'dirty' })
assert(!vacuumWorld.goalTest(state))

state = vacuumWorld.result(state, 'suck')
assert.deepEqual(state, { location: 'B', A: 'clean', B: 'clean' })
assert(vacuumWorld.goalTest(state))
