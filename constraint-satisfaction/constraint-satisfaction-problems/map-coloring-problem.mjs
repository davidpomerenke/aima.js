import { ConstraintSatisfactionProblem } from '../constraint-satisfaction-problem.mjs'

export const mapColoringProblem = new ConstraintSatisfactionProblem({
  domains: ['WA', 'NT', 'Q', 'NSW', 'V', 'SA', 'T'].map(state => [state, ['red', 'green', 'blue']]),
  constraints: [
    [[
      ['SA', 'WA'],
      ['SA', 'NT'],
      ['SA', 'Q'],
      ['SA', 'NSW'],
      ['SA', 'V'],
      ['WA', 'NT'],
      ['NT', 'Q'],
      ['Q', 'NSW'],
      ['NSW', 'V']
    ], (a, b) => a !== b]
  ]
})
