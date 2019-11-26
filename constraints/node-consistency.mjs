import { ConstraintSatisfactionProblem } from './constraint-satisfaction-problem.mjs'

export const makeNodeConsistent = problem =>
  new ConstraintSatisfactionProblem({
    domains: problem.domains.map(([varName, domain]) =>
      [
        varName,
        domain.filter(value =>
          applicableUnaryConstraints(problem.constraints, varName)
            .every(([varList, constraintFunc]) => constraintFunc(value)))
      ]),
    constraints: nonUnaryConstraints(problem.constraints)
  })

const applicableUnaryConstraints = (constraints, varName) =>
  unaryConstraints(constraints).filter(constraint =>
    constraint[0].some(varName2 => varName2 === varName))

const unaryConstraints = constraints =>
  constraints.filter(constraint => constraint[1].length === 1)

const nonUnaryConstraints = constraints =>
  constraints.filter(constraint => constraint[1].length > 1)
