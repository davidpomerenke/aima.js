import deepEqual from 'deep-equal'

export class ConstraintSatisfactionProblem {
  constructor ({ domains, constraints }) {
    this.domains = domains
    this.constraints = constraints
  }

  get variables () {
    return this.domains.keys()
  }

  satisfied (solution) {
    const get = varName => solution.find(([varName2, value]) => varName === varName2)[1]
    return (
      this.domains.every(([varName, domain]) => domain.some(v => deepEqual(v, get(varName)))) &&
      this.constraints.every(([varList, constraint]) => varList.every(vars =>
        constraint(...vars.map(varName => get(varName)))))
    )
  }
}
