import { Problem } from './problem.mjs'
import { cities } from './cities.mjs'

export const generateRouteFindingProblem = (start, end) => new Problem({
  initialState: start,
  action: state => Object.keys(cities[state]),
  result: (state, action) => Object.keys(cities[state]).includes(action)
    ? action
    : undefined,
  pathCost: (state, action) => cities[state][action],
  goalTest: state => (state === end)
})

export const routeFindingProblem = generateRouteFindingProblem('Arad', 'Bucharest')

export const generateTouringProblem = (start, end) => new Problem({
  initialState: [start],
  action: state => Object.keys(cities[state[0]])
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

export const generateTravelingSalespersonProblem = (start, end) => new Problem({
  initialState: [start],
  action: state => Object.keys(cities[state[0]])
    .filter(city => !state.includes(city)),
  result: (state, action) =>
    Object.keys(cities[state[0]]).includes(action) && !state.includes(action)
      ? [action, ...state]
      : undefined,
  pathCost: (state, action) => Object.keys(cities[state[0]]).includes(action) && !state.includes(action)
    ? cities[state[0]][action]
    : undefined,
  goalTest: state => (state[0] === end && state.length === Object.keys(cities).length)
})

export const travelingSalespersonProblem = generateTravelingSalespersonProblem('Arad', 'Bucharest')
