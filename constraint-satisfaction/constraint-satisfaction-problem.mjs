export class ConstraintSatisfactionProblem {
  constructor ({ domains, constraints }) {
    this.domains = domains
    this.constraints = constraints
  }

  get variables () {
    return this.domains.keys()
  }
}
