import deepEqual from 'deep-equal'

export class Problem {
  constructor ({ initialState, actions, result, stepCost, goalTest, heuristic, value }) {
    this.initialState = initialState
    this.actions = actions
    this._result = result
    this._stepCost = stepCost
    this.goalTest = goalTest
    this.heuristic = heuristic || (state => 0)
    this.value = value || (state => 0)
  }

  result (state, action) {
    return this.actions(state).some(a => deepEqual(a, action))
      ? this._result(state, action)
      : undefined
  }

  stepCost (state, action) {
    return this.actions(state).some(a => deepEqual(a, action))
      ? this._stepCost(state, action)
      : undefined
  }
}
