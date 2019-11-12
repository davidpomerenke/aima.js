import { Queue } from './queue.mjs'

export const makePriorityQueue = (mapFunc) => class PriorityQueue extends Queue {
  constructor () {
    super()
    this.mapFunc = mapFunc
    this.sortFunc = (a, b) => (mapFunc(a) - mapFunc(b))
  }

  poll () {
    this.queue = this.queue.sort(this.sortFunc)
    return this.queue.shift()
  }

  sort () {
    this.queue = this.queue.sort(this.sortFunc)
  }
}
