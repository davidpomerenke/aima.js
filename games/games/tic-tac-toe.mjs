import { Game } from '../game.mjs'

export const ticTacToe = new Game({
  initialState: [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ],
  player: state => count(state, 'x') > count(state, 'o') ? 'o' : 'x',
  actions: state => [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]]
    .filter(([y, x]) => state[y][x] === ' '),
  result: (state, [yMove, xMove]) => state.map((row, y) => row.map((tile, x) =>
    y === yMove && x === xMove
      ? ticTacToe.player(state)
      : tile
  )),
  terminalTest: state => (three(state, 'x') || three(state, 'o')),
  utility: state => 1 * three(state, 'x')
})

// are there three in a row?
const three = (state, p) =>
  rows.some(row =>
    row.every(([y, x]) =>
      state[y][x] === p
    )
  )

// possible rows for three in a row
const rows = [
  [[0, 0], [0, 1], [0, 2]], // horizontal
  [[1, 0], [1, 1], [1, 2]], // horizontal
  [[2, 0], [2, 1], [2, 2]], // horizontal
  [[0, 0], [1, 0], [2, 0]], // vertical
  [[0, 1], [1, 1], [2, 1]], // vertical
  [[0, 2], [1, 2], [2, 2]], // vertical
  [[0, 0], [1, 1], [2, 3]], // diagonal
  [[0, 2], [1, 2], [2, 0]] // diagonal
]

const count = (state, x) => state.flat().filter(square => square === x).length
