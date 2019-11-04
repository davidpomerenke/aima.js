export class Node {
  constructor (state) {
    this.state = state
    this.parent = null
    this.action = null
    this.pathCost = 0
    this.heuristic = 0
    this.value = -Infinity
  }

  static fromProblem (problem) {
    const node = new Node(problem.initialState)
    node.problem = problem
    node.heuristic = problem.heuristic(problem.initialState)
    node.value = problem.value(problem.initialState)
    return node
  }

  expand (problem) {
    return problem.actions(this.state).map(action => this.childNode(problem, action))
  }

  childNode (problem, action) {
    const childState = problem.result(this.state, action)
    const childNode = new Node(childState)
    childNode.parent = this
    childNode.action = action
    childNode.pathCost = this.pathCost + problem.stepCost(this.state, action)
    childNode.heuristic = problem.heuristic(childState)
    childNode.value = problem.value(childState)
    return childNode
  }

  solution () {
    // return path leading to the solution
    if (this.parent === null) return [this.state]
    else return [...this.parent.solution(), this.state]
  }
}
