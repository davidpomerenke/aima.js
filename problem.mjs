import deepEqual from 'deep-equal'

export class Problem {
  constructor ({ initialState, actions, result }) {
    this.initialState = initialState
    this.actions = actions
    this._result = result
  }

  result (state, action) {
    return this.actions(state).some(a => deepEqual(a, action))
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

  static solution (node) {
    // return path leading to the solution
    if ('parent' in node) return [...Problem.solution(node.parent), node.state]
    else return [node.state]
  }
}
