import sortBy from 'lodash.sortby'

export class PriorityQueue {
  constructor (mapFunc) {
    this.mapFunc = mapFunc
    this.queue = []
  }

  add (item) {
    this.queue.unshift(item)
  }

  poll () {
    // sortBy from lodash.sortby is stable
    // unlike Array.prototype.sort()
    this.queue = sortBy(this.queue, this.mapFunc)
    return this.queue.pop()
  }

  some (func) {
    return this.queue.some(func)
  }

  find (func) {
    return this.queue.find(func)
  }

  get length () {
    return this.queue.length
  }
}
