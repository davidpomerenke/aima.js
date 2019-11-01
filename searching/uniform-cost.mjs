import { Node } from '../problems/node.mjs'
import { PriorityQueue } from './priority-queue.mjs'

export const uniformCostSearch = (problem) => {
  let node = new Node({ state: problem.initialState })
  const frontier = new PriorityQueue(node => node.pathCost)
  frontier.add(node)
  const explored = new Set()
  while (frontier.length > 0) {
    node = frontier.poll()
    if (problem.goalTest(node.state)) return node.solution()
    explored.add(node.state)
    for (const child of node.expand(problem)) {
      if (
        !frontier.some(node => node.state === child.state) &&
        !explored.has(child.state)
      ) {
        frontier.add(child)
      } else {
        const frontierChild = frontier.find(node => (node.state === child.state))
        if (
          typeof frontierChild !== 'undefined' &&
          frontierChild.pathCost > child.pathCost
        ) {
          frontier.replace(frontierChild, child)
        }
      }
    }
  }
  return false
}
