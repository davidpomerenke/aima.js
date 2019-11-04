import { Node } from '../../problems/node.mjs'

export const hillClimbingSearch = (problem) => {
  let current = new Node(problem.initialState)
  current.value = problem.value(current.state)
  while (true) {
    const neighbor = biggestValueNode(current.expand(problem))
    if (neighbor.value <= current.value) return current.solution()
    current = neighbor
  }
}

const biggestValueNode = (array) => array.reduce(
  (prev, node) =>
    node.value > prev.value
      ? node
      : prev
)
