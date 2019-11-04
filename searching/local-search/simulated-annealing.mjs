import { Node } from '../../problems/node.mjs'
import gen from 'random-seed'

export const simulatedAnnealing = (problem, schedule = (time) => 1 / time, seed) => {
  const rand = gen.create(seed)
  const randEl = (array) => array[Math.floor(rand.random() * array.length)]

  let current = new Node(problem.initialState)
  current.value = problem.value(current.state)

  let time = 1
  let temp = schedule(1)
  let next
  let evalSlope
  while (temp > 0) {
    temp = schedule(time)
    if (temp === 0) return current

    next = randEl(current.expand(problem))
    evalSlope = next.value - current.value

    if (evalSlope > 0) current = next
    else if (Math.E ** (evalSlope / temp) * rand.random() > 0.5) current = next
    time += 1
  }
}
