import { Queue } from './queue.mjs'

export class FifoQueue extends Queue {
  poll () {
    return this.queue.shift()
  }
}
