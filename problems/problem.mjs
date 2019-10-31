export class Problem {
  constructor ({ initialState, actions, result, pathCost, goalTest }) {
    this.initialState = initialState
    this.actions = actions
    this._result = result
    this.pathCost = pathCost
    this.goalTest = goalTest
  }

  result (state, action) {
    return this.actions(state).includes(action)
      ? this._result(state, action)
      : undefined
  }
}
