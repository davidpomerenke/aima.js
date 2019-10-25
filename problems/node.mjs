export class Node {
  constructor ({ state, parent, action, pathCost }) {
    this.state = state
    this.parent = parent
    this.action = action
    this.pathCost = pathCost
  }
}

export const childNode = (problem, node, action) => {
  const result = problem.result(node.state, action)
  return new Node({
    state: result,
    parent: node,
    action: action,
    pathCost: node.pathCost + problem.pathCost(node.state, action)
  })
}

export const solution = (node) => {
  if (node.parent === null) return [node.state]
  else return [...solution(node.parent), node.state]
}
