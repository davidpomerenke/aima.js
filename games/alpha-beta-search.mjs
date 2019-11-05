/**
 * minimax algorithm with alpha-beta pruning
 */
export const alphaBetaSearch = (game, state) =>
  game.actions(state)
    .map(action => ({
      action: action,
      outcome: minValue(game, game.result(state, action))
    }))
    .reduce((current, next) => next.outcome > current.outcome ? next : current)

const maxValue = (game, state, alpha, beta) => {
  if (game.terminalTest(state)) return game.utility(state)
  let v = -Infinity
  for (const action of game.actions(state)) {
    v = Math.max(v, minValue(game, game.result(state, action), alpha, beta))
    if (v >= beta) return v
    alpha = Math.max(alpha, v)
  }
  return v
}

const minValue = (game, state, alpha, beta) => {
  if (game.terminalTest(state)) return game.utility(state)
  let v = +Infinity
  for (const action of game.actions(state)) {
    v = Math.min(v, maxValue(game, game.result(state, action), alpha, beta))
    if (v >= alpha) return v
    beta = Math.min(beta, v)
  }
  return v
}
