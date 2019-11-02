import { Node } from '../problems/node.mjs'

export const makeTreeSearch = (Queue) => (problem) => {
  const frontier = new Queue()
  frontier.add(new Node({ state: problem.initialState }))
  let node
  while (frontier.length > 0) {
    node = frontier.poll()
    if (problem.goalTest(node.state)) return node.solution()
    for (const child of node.expand()) {
      frontier.add(child)
    }
  }
  return false
}
