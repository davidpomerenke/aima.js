export class Node {
  constructor ({
    state,
    parent = null,
    action = null,
    pathCost = 0,
    heuristic = 0
  }) {
    this.state = state
    this.parent = parent
    this.action = action
    this.pathCost = pathCost
    this.heuristic = heuristic
  }

  expand (problem) {
    return problem.actions(this.state).map(action => this.childNode(problem, action))
  }

  childNode (problem, action) {
    return new Node({
      state: problem.result(this.state, action),
      parent: this,
      action: action,
      pathCost: this.pathCost + problem.stepCost(this.state, action),
      heuristic: problem.heuristic(this.state)
    })
  }

  solution () {
    if (this.parent === null) return [this.state]
    else return [...this.parent.solution(), this.state]
  }
}
