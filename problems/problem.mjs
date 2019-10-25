import { Node } from './node.mjs'

export class Problem {
  constructor ({ initialState, action, result, pathCost, goalTest }) {
    this.initialState = initialState
    this.action = action
    this.result = result
    this.pathCost = pathCost
    this.goalTest = goalTest
  }

  childNode (node, action) {
    const result = this.result(node.state, action)
    return new Node({
      state: result.state,
      parent: node,
      action: action,
      pathCost: this.pathCost + result.stepCost
    })
  }
}
