import { SearchProblem } from '../search/search-problem.mjs'
import deepEqual from 'deep-equal'

export class ConstraintSatisfactionProblem extends SearchProblem {
  constructor ({ domains, constraints }) {
    super({
      initialState: [],
      actions: state => state.length < domains.length
        ? domains[state.length][1].map(value =>
          [domains[state.length][0], value])
        : [],
      result: (state, action) => [...state, action],
      stepCost: state => 0,
      goalTest: state =>
        state.length === domains.length &&
        this.domains.every(([varName, domain]) =>
          domain.some(v => deepEqual(v, get(state, varName)))) &&
        this.constraints.every(([varList, constraint]) => varList.every(vars =>
          constraint(...vars.map(varName => get(state, varName)))))
    })
    this.domains = domains
    this.constraints = constraints
  }

  get variables () {
    return this.domains.keys()
  }

  satisfied (solution) {
    return this.goalTest(solution)
  }
}

const get = (solution, varName) => solution.find(([varName2, value]) => varName === varName2)[1]
