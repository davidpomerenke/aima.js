export const minimaxDecision = (game, state) =>
  game.actions(state)
    .map(action => ({
      action: action,
      outcome: minValue(game, game.result(state, action))
    }))
    .reduce((current, next) => next.outcome > current.outcome ? next : current)

const maxValue = (game, state) =>
  game.terminalTest(state)
    ? game.utility(state)
    : game.actions(state).reduce((prev, current) =>
      Math.max(prev, minValue(game, game.result(state, current))), -Infinity)

const minValue = (game, state) =>
  game.terminalTest(state)
    ? game.utility(state)
    : game.actions(state).reduce((prev, current) =>
      Math.min(prev, maxValue(game, game.result(state, current))), Infinity)
