import { Problem } from '../problem.mjs'
import { cities } from './cities.mjs'

export const generateRouteFindingProblem = (start, end) => new Problem({
  initialState: start,
  actions: state => Object.keys(cities[state]),
  result: (state, action) => Object.keys(cities[state]).includes(action)
    ? action
    : undefined,
  pathCost: (state, action) => cities[state][action],
  goalTest: state => (state === end)
})

export const routeFindingProblem = generateRouteFindingProblem('Arad', 'Bucharest')
