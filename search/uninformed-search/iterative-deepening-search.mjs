import { depthLimitedSearch } from './depth-limited-search.mjs'

export const iterativeDeepeningSearch = problem => recursiveIterativeDeepeningSearch(problem, 0)

const recursiveIterativeDeepeningSearch = (problem, depth) =>
  depthLimitedSearch(problem, depth) !== 'cutoff'
    ? depthLimitedSearch(problem, depth)
    : recursiveIterativeDeepeningSearch(problem, depth + 1)
