import { Node, childNode, solution } from '../problems/node.mjs'

export const breadthFirstSearch = (problem, verbose = false) => {
  let node = new Node({
    state: problem.initialState,
    parent: null,
    action: null,
    pathCost: 0
  })
  if (problem.goalTest(node.state)) return solution(node)
  const frontier = [node]
  const explored = new Set()
  while (true) {
    if (frontier.length === 0) return false
    node = frontier.shift()
    explored.add(node.state)
    if (verbose) console.log('-- '.repeat(node.depth) + node.action + ': ' + JSON.stringify(node.state))
    // console.log(node.depth) // suspicious
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
}
