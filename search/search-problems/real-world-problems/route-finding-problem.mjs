import { SearchProblem } from '../../search-problem.mjs'
import deepEqual from 'deep-equal'

export const makeRouteFindingProblem = (graph, start, end) => new SearchProblem({
  initialState: start,
  actions: state => Object.keys(graph.dist[state]),
  result: (state, action) => action in graph.dist[state]
    ? action
    : undefined,
  stepCost: (state, action) => graph.dist[state][action],
  heuristic: state => graph.straightLineDist[state][end],
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
