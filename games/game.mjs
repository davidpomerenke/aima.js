import { Problem } from '../problem.mjs'

export class Game extends Problem {
  constructor ({ initialState, player, actions, result, terminalTest, utility }) {
    super({ initialState, actions, result })
    this.player = player
    this.terminalTest = terminalTest
    this.utility = utility
  }
}
