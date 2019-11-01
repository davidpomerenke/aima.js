import { Problem } from '../problem.mjs'
import deepEqual from 'deep-equal'

export const makeRouteFindingProblem = (graph, start, end) => new Problem({
  initialState: start,
  actions: state => Object.keys(graph[state]),
  result: (state, action) => action in graph[state]
    ? action
    : undefined,
  pathCost: (state, action) => graph[state][action],
  goalTest: state => deepEqual(state, end)
})

/*

graph format example:

graph_ = {
  node_1: {
    node_2: path_cost(node_1, node_2),
    node_3: path_cost(node_1, node_3)
  },
  node_2: {
    node_1: path_cost(node_2, node_1)
  },
  ...
}

*/
