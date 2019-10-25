export class Problem {
  constructor ({ initialState, actions, result, pathCost, goalTest }) {
    this.initialState = initialState
    this.actions = actions
    this.result = result
    this.pathCost = pathCost
    this.goalTest = goalTest
  }
}
