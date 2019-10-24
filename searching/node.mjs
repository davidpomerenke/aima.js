export class Node {
  constructor (state, parent, action, pathCost) {
    this.state = state
    this.parent = parent
    this.action = action
    this.pathCost = pathCost
  }

  childNode (problem, action) {
    const result = problem.result(this.state, action)
    return new Node(
      result.state,
      this,
      action,
      this.pathCost + result.stepCost
    )
  }
}
