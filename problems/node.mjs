export class Node {
  constructor (state) {
    this.state = state
    this.parent = null
    this.action = null
    this.pathCost = 0
    this.heuristic = 0
  }

  expand (problem) {
    return problem.actions(this.state).map(action => this.childNode(problem, action))
  }

  childNode (problem, action) {
    const childNode = new Node(problem.result(this.state, action))
    childNode.parent = this
    childNode.action = action
    childNode.pathCost = this.pathCost + problem.stepCost(this.state, action)
    childNode.heuristic = problem.heuristic(this.state)
    return childNode
  }

  solution () {
    // return path leading to the solution
    if (this.parent === null) return [this.state]
    else return [...this.parent.solution(), this.state]
  }
}
