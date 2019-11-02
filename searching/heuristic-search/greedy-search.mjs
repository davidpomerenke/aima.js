import { makeGraphSearch } from '../graph-search.mjs'
import { makePriorityQueue } from '../queues/priority-queue.mjs'

export const greedySearch = makeGraphSearch(makePriorityQueue(node => node.heuristic))
