import { makePriorityQueue } from './priority-queue.mjs'
import { strict as assert } from 'assert'

const PriorityQueue = makePriorityQueue(x => x[1])
const queue = new PriorityQueue()
queue.add([1, 2])
queue.add([2, 3])
queue.add([3, 4])
queue.add([4, 1])
queue.add([5, 1])
queue.sort()
assert.deepEqual(queue.queue, [[4, 1], [5, 1], [1, 2], [2, 3], [3, 4]])
