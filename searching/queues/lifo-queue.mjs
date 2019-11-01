import { Queue } from './queue.mjs'

export class LifoQueue extends Queue {
  poll () {
    return this.queue.pop()
  }
}
