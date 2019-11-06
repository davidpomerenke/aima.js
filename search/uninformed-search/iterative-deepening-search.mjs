import { depthLimitedSearch } from './depth-limited-search.mjs'

export const iterativeDeepeningSearch = problem => {
  let result
  for (let depth = 0; true; depth++) {
    result = depthLimitedSearch(problem, depth)
    if (result !== 'cutoff') return result
  }
}
