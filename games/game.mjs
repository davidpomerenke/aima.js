import { Problem } from '../problem.mjs'

export class Game extends Problem {
  constructor ({ initialState, player, actions, result, terminalTest, utility, heuristic }) {
    super({ initialState, actions, result })
    this.player = player
    this.terminalTest = terminalTest
    this._utility = utility
    this.heuristic = heuristic || (state => 0)
  }

  utility (state) {
    if (this.terminalTest(state)) {
      return this._utility(state)
    }
  }

  get rootNode () {
    return {
      ...super.rootNode,
      player: this.player(this.initialState)
    }
  }

  childNode (node, action) {
    return {
      ...super.childNode(node, action),
      player: this.player(this.initialState)
    }
  }
}
