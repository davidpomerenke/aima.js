import { makeGraphSearch } from './graph-search.mjs'
import { LifoQueue } from './queues/lifo-queue.mjs'

export const depthFirstSearch = makeGraphSearch(LifoQueue)
/* export const depthFirstSearch = (problem) => {
  let node = new Node({ state: problem.initialState })
  if (problem.goalTest(node.state)) return node.solution()
  const frontier = [node]
  const explored = new Set()
  while (frontier.length > 0) {
    node = frontier.pop()
    explored.add(node.state)
    for (const child of node.expand(problem)) {
      if (
        !frontier.some(node => node.state === child.state) &&
        !explored.has(child.state)
      ) {
        if (problem.goalTest(child.state)) return child.solution()
        frontier.push(child)
      }
    }
  }
  return false
}*/
