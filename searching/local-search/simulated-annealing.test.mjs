import { simulatedAnnealing } from './simulated-annealing.mjs'
import { eightQueensProblem } from '../../problems/toy-problems/eight-queens-problem.mjs'
import { strict as assert } from 'assert'

const nSteps = 5
assert.equal(simulatedAnnealing(eightQueensProblem.completeState, t => 1 / t - 1 / nSteps, 'seedshrdlu4523').value, -8)
// for nSteps = 100, this solves the problem (value === -0)
// this is excluded from testing because it takes too long
