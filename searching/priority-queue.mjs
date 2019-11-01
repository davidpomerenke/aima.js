import sortBy from 'lodash.sortby'
import deepEqual from 'deep-equal'

export class PriorityQueue {
  constructor (mapFunc) {
    this.mapFunc = mapFunc
    this.queue = []
  }

  add (item) {
    this.queue.push(item)
  }

  poll () {
    // sortBy from lodash.sortby is stable
    // unlike Array.prototype.sort()
    this.queue = sortBy(this.queue, this.mapFunc)
    return this.queue.shift()
  }

  some (func) {
    return this.queue.some(func)
  }

  find (func) {
    return this.queue.find(func)
  }

  replace (a, b) {
    this.queue[this.queue.indexOf(a)] = b
  }

  sort () {
    this.queue = sortBy(this.queue, this.mapFunc)
  }

  get length () {
    return this.queue.length
  }
}
