import { Problem } from './problem.mjs'

const getNextY = state => state.indexOf(state.filter(row => !row.includes(1))[0])

const isAttacked = (state, y, x) => {
  const row = (y) => state[y]
  const col = (x) => state.map(row => row[x])
  const diag1 = (y, x) => state.map((row, rowIndex) => {
    const pos = x + (rowIndex - y)
    if (pos >= 0 && pos <= 7) return row[pos]
  })
  const diag2 = (y, x) => state.map((row, rowIndex) => {
    const pos = x - (rowIndex - y)
    if (pos >= 0 && pos <= 7) return row[pos]
  })
  return [row(y), col(x), diag1(y, x), diag2(y, x)].some(line => line.includes(1))
}

export const eightQueens = new Problem({
  initialState: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  actions: state => [0, 1, 2, 3, 4, 5, 6, 7].filter(action => !isAttacked(getNextY(state), action)),
  result: (state, action) => {
    const pos = {
      y: getNextY(state),
      x: action
    }
    if (state[pos.y][pos.x] !== 1 && !isAttacked(state, pos.y, pos.x)) {
      state[pos.y][pos.x] = 1
      return state
    }
  },
  stepCost: (state, action) => 0,
  goalTest: state => state.every(row => row.includes(1))
})
