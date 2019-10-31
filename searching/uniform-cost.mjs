import { Node, childNode, solution } from '../problems/node.mjs'
import { PriorityQueue } from './priority-queue.mjs'
import deepEqual from 'deep-equal'

export const uniformCostSearch = (problem, verbose = false) => {
  let node = new Node({ state: problem.initialState })
  const frontier = new PriorityQueue(node => node.pathCost)
  frontier.add(node)
  const explored = new Set()
  while (frontier.length > 0) {
    console.log(JSON.stringify(frontier.queue.map(item => item.state)))
    node = frontier.poll()
    if (problem.goalTest(node.state)) return solution(node)
    explored.add(node.state)
    if (verbose) {
      console.log('-- '.repeat(node.depth) +
        (node.parent === null ? null : node.parent.action) +
        ' - ' + node.action + ':')
    }
    for (const action of problem.actions(node.state)) {
      const child = childNode(problem, node, action)
      if (
        !frontier.some(node => deepEqual(node.state, child.state)) &&
        !explored.has(child.state)
      ) {
        if (verbose) {
          console.log('-- '.repeat(child.depth) + child.action +
          ' (' + child.pathCost + '): ' + JSON.stringify(child.state))
        }
        frontier.add(child)
      } else if (frontier.some(node => deepEqual(node.state, child.state))) {
        let frontierChild = frontier.find(node => deepEqual(node.state, child.state))
        if (frontierChild.pathcode > child.pathCost) {
          if (verbose) {
            console.log('-- '.repeat(child.depth) + child.action +
            ' (' + child.pathCost + '): ' + JSON.stringify(child.state))
          }
          frontierChild = child
        }
      }
    }
  }
  return false
}
