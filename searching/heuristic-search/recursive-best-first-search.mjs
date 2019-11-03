import { Node } from '../../problems/node.mjs'
import sortBy from 'lodash.sortby'

export const recursiveBestFirstSearch = (problem) => {
  /* TODO: */ console.warn('The recursive best-first search algorithm does not appear to work. I do not understand how it is supposed to work and appreciate any help.')
  const node = new Node(problem.initialState)
  node.f = 0 // otherwise Math.max will always return NaN in line 15
  rbfs(problem, node, Infinity)
}

const rbfs = (problem, node, fLimit) => {
  if (problem.goalTest(problem, node.state)) return node.solution()
  let successors = node.expand(problem)
  if (successors.length === 0) return [false, Infinity]
  for (const s of successors) {
    s.f = Math.max(s.pathCost + s.heuristic, node.f)
  }
  while (true) {
    successors = sortBy(successors, s => s.f)
    const best = successors[0]
    if (best.f > fLimit) return [false, best.f]
    const alternative = successors[1].f
    const [result, f] = rbfs(problem, best, Math.min(fLimit, alternative))
    best.f = f // it is not possible to do direct array destructuring to object attribute
    if (result) return result
  }
}
