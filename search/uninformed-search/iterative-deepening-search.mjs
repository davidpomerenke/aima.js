import { depthLimitedSearch } from './depth-limited-search.mjs'

export const iterativeDeepeningSearch = problem => {
  let depth = 0
  let result
  while (true) {
    result = depthLimitedSearch(problem, depth)
    if (result !== 'cutoff') return result
    depth += 1
  }
}
