import { Problem } from '../problem.mjs'

export const makeTouringProblem = (graph, start, end) => new Problem({
  initialState: [start],
  actions: state => Object.keys(graph[state[0]])
    .filter(city => !state.includes(city)),
  result: (state, action) => [action, ...state],
  pathCost: (state, action) => graph[state[0]][action],
  goalTest: state => (state[0] === end)
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
