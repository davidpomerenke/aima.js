import { Problem } from '../problem.mjs'
import { cities } from './cities.mjs'

export const generateTouringProblem = (start, end) => new Problem({
  initialState: [start],
  actions: state => Object.keys(cities[state[0]])
    .filter(city => !state.includes(city)),
  result: (state, action) =>
    Object.keys(cities[state[0]]).includes(action) && !state.includes(action)
      ? [action, ...state]
      : undefined,
  pathCost: (state, action) => Object.keys(cities[state[0]]).includes(action) && !state.includes(action)
    ? cities[state[0]][action]
    : undefined,
  goalTest: state => (state[0] === end)
})

export const touringProblem = generateTouringProblem('Arad', 'Bucharest')
