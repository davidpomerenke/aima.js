export class Node {
  constructor ({ state, parent, action, pathCost, depth = 0 }) {
    this.state = state
    this.parent = parent
    this.action = action
    this.pathCost = pathCost
    this.depth = depth
  }
}

export const childNode = (problem, node, action) => {
  const result = problem.result(node.state, action)
  return new Node({
    state: result,
    parent: node,
    action: action,
    pathCost: node.pathCost + problem.pathCost(node.state, action),
    depth: node.depth + 1
  })
}

export const solution = (node) => {
  if (node.parent === null) return [node.state]
  else return [...solution(node.parent), node.state]
}
