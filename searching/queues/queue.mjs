export class Queue {
  constructor (firstElement = []) {
    this.queue = [firstElement]
  }

  add (item) {
    this.queue.push(item)
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

  get length () {
    return this.queue.length
  }
}
