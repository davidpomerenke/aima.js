import { Node, childNode, solution } from '../problems/node.mjs'

export const depthFirstSearch = (problem) => {
  let node = new Node({ state: problem.initialState })
  if (problem.goalTest(node.state)) return solution(node)
  const frontier = [node]
  const explored = new Set()
  while (frontier.length > 0) {
    node = frontier.pop()
    explored.add(node.state)
    for (const action of problem.actions(node.state)) {
      const child = childNode(problem, node, action)
      if (
        !frontier.some(node => node.state === child.state) &&
        !explored.has(child.state)
      ) {
        if (problem.goalTest(child.state)) return solution(child)
        frontier.push(child)
      }
    }
  }
  return false
}
