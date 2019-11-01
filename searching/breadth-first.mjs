import { makeGraphSearch } from './graph-search.mjs'
import { FifoQueue } from './queues/fifo-queue.mjs'

export const breadthFirstSearch = makeGraphSearch(FifoQueue)
