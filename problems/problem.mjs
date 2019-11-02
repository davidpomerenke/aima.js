export class Problem {
  constructor ({ initialState, actions, result, stepCost, goalTest, heuristic }) {
    this.initialState = initialState
    this.actions = actions
    this._result = result
    this._stepCost = stepCost
    this.goalTest = goalTest
    this.heuristic = heuristic || (node => 0)
  }

  result (state, action) {
    return this.actions(state).includes(action)
      ? this._result(state, action)
      : undefined
  }

  stepCost (state, action) {
    return this.actions(state).includes(action)
      ? this._stepCost(state, action)
      : undefined
  }
}
