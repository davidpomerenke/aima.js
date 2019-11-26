import { makeNodeConsistent } from './node-consistency.mjs'
import { ConstraintSatisfactionProblem } from './constraint-satisfaction-problem.mjs'
import { strict as assert } from 'assert'

let problem = new ConstraintSatisfactionProblem({
  domains: [
    ['Northern Australia', ['red', 'blue', 'green']],
    ['Southern Australia', ['red', 'blue', 'green']]
  ],
  constraints: [
    [['Northern Australia', 'Southern Australia'], (a, b) => a !== b],
    [['Southern Australia'], a => a !== 'green']
  ]
})

problem = makeNodeConsistent(problem)
assert.deepEqual(problem.domains, [
  ['Northern Australia', ['red', 'blue', 'green']],
  ['Southern Australia', ['red', 'blue']]
])
