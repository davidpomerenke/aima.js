import { simulatedAnnealing } from './simulated-annealing.mjs'
import { completeStateEightQueensProblem as eightQueensProblem } from './optimization-problems/eight-queens-problem.mjs'
import gen from 'random-seed'
import { strict as assert } from 'assert'

const rand = gen.create('seedshrdlu4523') // random seed initialization for testing

const nSteps = 2
assert.equal(simulatedAnnealing(eightQueensProblem, t => 1 / t - 1 / nSteps, rand.random).value, -22)
// for nSteps = 100, this solves the problem (value === -0)
// this is excluded from testing because it takes too long
