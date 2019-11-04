export const depthLimitedSearch = (problem, limit) => {
  return recursiveDepthLimitedSearch(problem.rootNode, problem, limit)
}

const recursiveDepthLimitedSearch = (node, problem, limit) => {
  if (problem.goalTest(node.state)) return node
  else if (limit === 0) return 'cutoff'
  else {
    let cutoffOccurred = false
    for (const child of problem.expand(node)) {
      const result = recursiveDepthLimitedSearch(child, problem, limit - 1)
      if (result === 'cutoff') cutoffOccurred = true
      else if (result) return result
    }
    return cutoffOccurred
      ? 'cutoff'
      : false
  }
}
