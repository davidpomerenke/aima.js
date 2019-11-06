export const hillClimbingSearch = (problem) => recursiveHillClimbingSearch(problem, problem.rootNode)

const recursiveHillClimbingSearch = (problem, current) =>
  biggestValueNode(problem.expand(current)).value <= current.value
    ? current
    : recursiveHillClimbingSearch(problem, biggestValueNode(problem.expand(current)))

const biggestValueNode = array => array.reduce(
  (prev, node) =>
    node.value > prev.value
      ? node
      : prev
)
