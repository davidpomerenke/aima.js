import { makeGraphSearch } from '../graph-search.mjs'
import { makePriorityQueue } from '../queues/priority-queue.mjs'

export const aStarSearch = makeGraphSearch(makePriorityQueue(node => node.pathCost + node.heuristic))
