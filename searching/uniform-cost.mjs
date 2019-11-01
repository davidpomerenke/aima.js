import { Node, childNode, solution } from '../problems/node.mjs'
import { PriorityQueue } from './priority-queue.mjs'

export const uniformCostSearch = (problem, t=false) => {
  let node = new Node({ state: problem.initialState })
  const frontier = new PriorityQueue(node => node.pathCost)
  frontier.add(node)
  const explored = new Set()
  while (frontier.length > 0) {
    if (t) console.log(explored)
    if (t) console.log(frontier.queue)
    node = frontier.poll()
    if (problem.goalTest(node.state)) return solution(node)
    explored.add(node.state)
    for (const action of problem.actions(node.state)) {
      const child = childNode(problem, node, action)
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
