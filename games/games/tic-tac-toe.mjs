import { Game } from '../game.mjs'

export const ticTacToe = new Game({
  initialState: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  player: state => count(state, 1) > count(state, 2) ? 2 : 1, // player names: 1 and 2
  actions: state => possibleActions.filter(([y, x]) => state[y][x] === 0),
  result: (state, [yMove, xMove]) => state.map((row, y) => row.map((tile, x) =>
    y === yMove && x === xMove
      ? ticTacToe.player(state) // 1 or 2, depending on whose turn it is
      : tile // keep existing tiles
  )),
  terminalTest: state => (three(state, /* player */ 1) || three(state, /* player */ 2)),
  utility: state => 1 * three(state, /* player */ 1) // 1 iff player 1 wins
})

// are there three in a row?
const three = (state, p) =>
  rows.some(row =>
    row.every(([y, x]) =>
      state[y][x] === p
    )
  )

const count = (state, x) => flatten(state).filter(square => square === x).length

const flatten = state => [...state[0], ...state[1], ...state[2]]

const rows = [ // possible rows for three in a row
  [[0, 0], [0, 1], [0, 2]], // horizontal
  [[1, 0], [1, 1], [1, 2]], // horizontal
  [[2, 0], [2, 1], [2, 2]], // horizontal
  [[0, 0], [1, 0], [2, 0]], // vertical
  [[0, 1], [1, 1], [2, 1]], // vertical
  [[0, 2], [1, 2], [2, 2]], // vertical
  [[0, 0], [1, 1], [2, 3]], // diagonal
  [[0, 2], [1, 2], [2, 0]] // diagonal
]

const possibleActions = [
  [0, 0], [0, 1], [0, 2],
  [1, 0], [1, 1], [1, 2],
  [2, 0], [2, 1], [2, 2]
]
