import { makeGraphSearch } from '../graph-search.mjs'
import { LifoQueue } from '../queues/lifo-queue.mjs'

export const depthFirstSearch = makeGraphSearch(LifoQueue)
