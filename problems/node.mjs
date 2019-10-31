export class Node {
  constructor ({
    state,
    parent = null,
    action = null,
    pathCost = 0
  }) {
    this.state = state
    this.parent = parent
    this.action = action
    this.pathCost = pathCost
  }
}

export const childNode = (problem, node, action) => {
  return new Node({
    state: problem.result(node.state, action),
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
