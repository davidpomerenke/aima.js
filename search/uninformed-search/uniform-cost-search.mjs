import { makeGraphSearch } from '../graph-search.mjs'
import { makePriorityQueue } from '../queues/priority-queue.mjs'

export const uniformCostSearch = makeGraphSearch(makePriorityQueue(node => node.pathCost))
