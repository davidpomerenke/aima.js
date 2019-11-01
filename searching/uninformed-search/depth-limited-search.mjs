import { Node } from '../../problems/node.mjs'

export const depthLimitedSearch = (problem, limit) => {
  return recursiveDepthLimitedSearch(new Node({ state: problem.initialState }), problem, limit)
}

const recursiveDepthLimitedSearch = (node, problem, limit) => {
  if (problem.goalTest(node.state)) return node.solution()
  else if (limit === 0) return 'cutoff'
  else {
    let cutoffOccurred = false
    for (const child of node.expand(problem)) {
      const result = recursiveDepthLimitedSearch(child, problem, limit - 1)
      if (result === 'cutoff') cutoffOccurred = true
      else if (result) return result
    }
    return cutoffOccurred
      ? 'cutoff'
      : false
  }
}
