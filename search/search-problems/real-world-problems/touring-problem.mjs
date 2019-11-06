import { SearchProblem } from '../../search-problem.mjs'
import deepEqual from 'deep-equal'

export const makeTouringProblem = (graph, start, end) => new SearchProblem({
  initialState: [start],
  actions: state => Object.keys(graph.dist[state[state.length - 1]])
    .filter(city => !state.includes(city)),
  result: (state, action) => action in graph.dist[state[state.length - 1]]
    ? [...state, action]
    : undefined,
  stepCost: (state, action) => graph.dist[state[state.length - 1]][action],
  heuristic: state => graph.straightLineDist[state[state.length - 1]][end],
  goalTest: state => deepEqual(state[state.length - 1], end)
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