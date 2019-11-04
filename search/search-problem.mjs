import { Problem } from '../problem.mjs'
import deepEqual from 'deep-equal'

export class SearchProblem extends Problem {
  constructor ({ initialState, actions, result, stepCost, heuristic, goalTest }) {
    super({
      initialState: initialState,
      actions: actions,
      result: result
    })
    this._stepCost = stepCost
    this.heuristic = heuristic || ((state) => 0)
    this.goalTest = goalTest
  }

  stepCost (state, action) {
    return this.actions(state).some(a => deepEqual(a, action))
      ? this._stepCost(state, action)
      : undefined
  }

  get rootNode () {
    return {
      ...super.rootNode,
      pathCost: 0,
      heuristic: this.heuristic(this.initialState)
    }
  }

  childNode (node, action) {
    return {
      ...super.childNode(node, action),
      pathCost: node.pathCost + this.stepCost(node.state, action),
      heuristic: this.heuristic(this.result(node.state, action))
    }
  }
}
