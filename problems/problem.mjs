export class Problem {
  constructor ({ initialState, actions, result, pathCost, goalTest, heuristic }) {
    this.initialState = initialState
    this.actions = actions
    this._result = result
    this._pathCost = pathCost
    this.goalTest = goalTest
    this.heuristic = heuristic || (node => 0)
  }

  result (state, action) {
    return this.actions(state).includes(action)
      ? this._result(state, action)
      : undefined
  }

  pathCost (state, action) {
    return this.actions(state).includes(action)
      ? this._pathCost(state, action)
      : undefined
  }
}
