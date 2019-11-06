export const makeTreeSearch = Queue => problem => {
  const frontier = new Queue()
  frontier.add(problem.initialState.rootNode)
  let node
  while (frontier.length > 0) {
    node = frontier.poll()
    if (problem.goalTest(node.state)) return node
    for (const child of problem.expand(node)) {
      frontier.add(child)
    }
  }
  return false
}
