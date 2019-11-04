export const hillClimbingSearch = (problem) => {
  let current = problem.rootNode
  while (true) {
    const neighbor = biggestValueNode(problem.expand(current))
    if (neighbor.value <= current.value) return current
    current = neighbor
  }
}

const biggestValueNode = (array) => array.reduce(
  (prev, node) =>
    node.value > prev.value
      ? node
      : prev
)
