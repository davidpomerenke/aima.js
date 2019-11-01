import { makeGraphSearch } from '../graph-search.mjs'
import { PriorityQueue } from '../queues/priority-queue.mjs'

export const uniformCostSearch = makeGraphSearch(PriorityQueue)
