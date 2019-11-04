import { Problem } from '../problem.mjs'

export class OptimizationProblem extends Problem {
  constructor ({ initialState, actions, result, value }) {
    super({
      initialState: initialState,
      actions: actions,
      result: result
    })
    this.value = value
  }

  get rootNode () {
    return {
      ...super.rootNode,
      value: this.value(this.initialState)
    }
  }

  childNode (node, action) {
    return {
      ...super.childNode(node, action),
      value: this.value(this.result(node.state, action))
    }
  }
}
