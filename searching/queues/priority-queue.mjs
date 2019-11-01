import { Queue } from './queue.mjs'
import sortBy from 'lodash.sortby'

export class PriorityQueue extends Queue {
  constructor (firstElement, mapFunc = (el) => el.pathCost) {
    super(firstElement)
    this.mapFunc = mapFunc
  }

  poll () {
    // sortBy from lodash.sortby is stable,
    // Array.prototype.sort() is also stable in node but not in all browsers,
    // so maybe it would be unstable with webpack etc.
    this.queue = sortBy(this.queue, this.mapFunc)
    return this.queue.shift()
  }

  sort () {
    this.queue = sortBy(this.queue, this.mapFunc)
  }
}
