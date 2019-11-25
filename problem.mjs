import deepEqual from 'deep-equal'

export class Problem {
  constructor ({ initialState, actions, result }) {
    this.initialState = initialState
    this.actions = actions
    this._result = result
  }

  result (state, action) {
    return this.actions(state).some(_action => deepEqual(_action, action))
      ? this._result(state, action)
      : undefined
  }

  get rootNode () {
    return {
      state: this.initialState
    }
  }

  childNode (node, action) {
    return {
      state: this.result(node.state, action),
      parent: node,
      action: action
    }
  }

  expand (node) {
    return this.actions(node.state).map(action => this.childNode(node, action))
  }

  static solutionPath (node) {
    // return path leading to the solution
    if ('parent' in node) return [...Problem.solutionPath(node.parent), node.state]
    else return [node.state]
  }
}
