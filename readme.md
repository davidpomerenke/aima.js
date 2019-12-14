# aima.js

[![NPM version](https://img.shields.io/npm/v/aima.svg)](https://www.npmjs.com/package/aima)
[![Node CI](https://github.com/davidpomerenke/aima.js/workflows/Node%20CI/badge.svg)](https://github.com/davidpomerenke/aima.js/actions?query=workflow%3A%22Node+CI%22)
[![codecov](https://codecov.io/gh/davidpomerenke/aima.js/branch/master/graph/badge.svg)](https://codecov.io/gh/davidpomerenke/aima.js)
[![Depfu](https://badges.depfu.com/badges/e04a4818c5dd19a107c3d0dd8dbb7c0a/overview.svg)](https://depfu.com/github/davidpomerenke/aima.js?project_id=10309)
[![Gitter](https://badges.gitter.im/aima-js/community.svg)](https://gitter.im/aima-js/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[*Artificial Intelligence - A Modern Approach*](http://aima.cs.berkeley.edu/) (*AIMA*) by Stuart Russell and Peter Norvig is the reference textbook on artificial intelligence. 

This package implements some of the algorithms and data structures from the *AIMA* book in modern, function-oriented Node Javascript. The focus is on code understandability. 

## Installation and Usage

For using this package as a module in your own node project: 

`npm install aima`

```javascript
import { Problem, makeEightPuzzle, aStarSearch } from 'aima'

const simpleEightPuzzle = makeEightPuzzle([
  [1, 2, 7],
  [6, 0, 4],
  [8, 3, 5]
])

console.log(Problem.solutionPath(aStarSearch(simpleEightPuzzle)))
```

Put the above example code in `example.mjs` and run it: 

`node example.mjs`

## Documentation

Almost every `.mjs` code file is accompanied by some `.test.mjs` test file. The test files provide easy examples on how to use the code files. They are only included in the Github repository, not in the npm module. 

## Book References

Section | Page | Type | Algorithm | File
--- | ---:| --- | --- | ---
2.4 | 47 | Agent | **Table-Driven Agent** | [`TableDrivenAgent`](https://github.com/davidpomerenke/aima.js/blob/master/intelligent-agents/table-driven-agent.mjs)
2.4 | 49 | Agent | **Simple Reflex Agent** | [`SimpleReflexAgent`](https://github.com/davidpomerenke/aima.js/blob/master/intelligent-agents/simple-reflex-agent.mjs)
3.1.1 | 67 | Abstraction | **Search Problem** | [`SearchProblem`](https://github.com/davidpomerenke/aima.js/blob/master/search/search-problem.mjs)
3.1 | 68 | Data | **Map of Romania** | [`cities`](https://github.com/davidpomerenke/aima.js/blob/master/search/search-problems/real-world-problems/cities.mjs)
3.2.1 | 70 | Problem | **Vacuum World** | [`vacuumWorld`](https://github.com/davidpomerenke/aima.js/blob/master/search/search-problems/toy-problems/vacuum-world.mjs)
3.2.1 | 71 | Problem | **8-Puzzle** | [`makeEightPuzzle`](https://github.com/davidpomerenke/aima.js/blob/master/search/search-problems/toy-problems/eight-puzzle.mjs)
3.2.1 | 72 | Problem | Incremental **8-Queens Problem** | [`incrementalEightQueensProblem`](https://github.com/davidpomerenke/aima.js/blob/master/search/search-problems/toy-problems/eight-queens-problem.mjs)
3.2.1 | 73 | Problem | **Knuth Conjecture** | [`makeKnuthConjecture`](https://github.com/davidpomerenke/aima.js/blob/master/search/search-problems/toy-problems/knuth-conjecture.mjs)
3.2.2 | 73 | Problem | **Route Finding** | [`makeRouteFindingProblem`](https://github.com/davidpomerenke/aima.js/blob/master/search/search-problems/real-world-problems/route-finding-problem.mjs)
3.2.2 | 74 | Problem | **Touring Problem** | [`makeTouringProblem`](https://github.com/davidpomerenke/aima.js/blob/master/search/search-problems/real-world-problems/touring-problem.mjs)
3.2.2 | 74 | Problem | **Traveling Salesperson Problem** | [`makeTravelingSalespersonProblem`](https://github.com/davidpomerenke/aima.js/blob/master/search/search-problems/real-world-problems/traveling-salesperson-problem.mjs)
3.3 | 77 | Algorithm | **Tree Search** | [`makeTreeSearch`](https://github.com/davidpomerenke/aima.js/blob/master/search/tree-search.mjs)
3.3 | 77 | Algorithm | **Graph Search** | [`makeGraphSearch`](https://github.com/davidpomerenke/aima.js/blob/master/search/graph-search.mjs)
3.3.1 | 79 | Abstraction | **Node Structure** | cf. [`Problem`](https://github.com/davidpomerenke/aima.js/blob/master/problem.mjs)
3.3.1 | 80 | Abstraction | FIFO, LIFO, and Priority **Queue** | [`Queue`](https://github.com/davidpomerenke/aima.js/blob/master/search/queues/queue.mjs)
3.4.1 | 82 | Algorithm | **Breadth-First Search** | [`breadthFirstSearch`](https://github.com/davidpomerenke/aima.js/blob/master/search/uninformed-search/breadth-first-search.mjs)
3.4.2 | 84 | Algorithm | **Uniform Cost Search** | [`uniformCostSearch`](https://github.com/davidpomerenke/aima.js/blob/master/search/uninformed-search/uniform-cost-search.mjs)
3.4.3 | 87 | Algorithm | **Depth-First Search** | [`depthFirstSearch`](https://github.com/davidpomerenke/aima.js/blob/master/search/uninformed-search/depth-first-search.mjs)
3.4.4 | 88 | Algorithm | **Depth-Limited Search** | [`depthLimitedSearch`](https://github.com/davidpomerenke/aima.js/blob/master/search/uninformed-search/depth-limited-search.mjs)
3.4.5 | 89 | Algorithm | **Iterative Deepening Search** | [`iterativeDeepeningSearch`](https://github.com/davidpomerenke/aima.js/blob/master/search/uninformed-search/iterative-deepening-search.mjs)
3.5.1 | 92 | Algorithm | **Greedy Best-First Search** | [`greedySearch`](https://github.com/davidpomerenke/aima.js/blob/master/search/heuristic-search/greedy-search.mjs)
3.5.2 | 93 | Algorithm | **A\* Search** | [`aStarSearch`](https://github.com/davidpomerenke/aima.js/blob/master/search/heuristic-search/a-star-search.mjs)
3.5.2 | 99 | Algorithm | **Recursive Best-First Search** | cf. branch [`feature-recursive-best-first-search`](https://github.com/davidpomerenke/aima.js/blob/feature-recursive-best-first-search/searching/heuristic-search/recursive-best-first-search.mjs)
4.1 | 121 | Abstraction | **Optimization Problem** | [`OptimizationProblem`](https://github.com/davidpomerenke/aima.js/blob/master/optimization/optimization-problem.mjs)
4.1.1 | 122 | Problem | Complete-State **8-Queens Problem** | [`completeStateEightQueensProblem`](https://github.com/davidpomerenke/aima.js/blob/master/optimization/optimization-problems/eight-queens-problem.mjs)
4.1.1 | 122 | Algorithm | **Hill-Climbing Search** | [`hillClimbingSearch`](https://github.com/davidpomerenke/aima.js/blob/master/optimization/hill-climbing-search.mjs)
4.1.2 | 126 | Algorithm | **Simulated Annealing / Gradient Descent** | [`simulatedAnnealing`](https://github.com/davidpomerenke/aima.js/blob/master/optimization/simulated-annealing.mjs)
5.1 | 162 | Abstraction | **Game** | [`Game`](https://github.com/davidpomerenke/aima.js/blob/master/games/game.mjs)
5.1 | 163 | Problem | **Tic Tac Toe** | [`ticTacToe`](https://github.com/davidpomerenke/aima.js/blob/master/games/games/tic-tac-toe.mjs)
5.2.1 | 166 | Algorithm | **MiniMax Algorithm** | [`minimaxDecision`](https://github.com/davidpomerenke/aima.js/blob/master/games/minimax-decision.mjs)
5.3 | 170 | Algorithm | **Alpha-Beta Search** | [`alphaBetaSearch`](https://github.com/davidpomerenke/aima.js/blob/master/games/alpha-beta-search.mjs)
6.1 | 202 | Abstraction | **Constraint Satisfaction Problem** | [`ConstraintSatisfactionProblem`](https://github.com/davidpomerenke/aima.js/blob/master/constraints/constraint-satisfaction-problem.mjs)
6.1.1 | 203 | Problem | **Map Coloring Problem** | [`mapColoringProblem`](https://github.com/davidpomerenke/aima.js/blob/master/constraints/constraint-satisfaction-problems/map-coloring-problem.mjs)
6.1.3 | 205 | Problem | Constraint-Satisfaction **8-Queens Problem** | [`constraintSatisfactionEightQueensProblem`](https://github.com/davidpomerenke/aima.js/blob/master/constraints/constraint-satisfaction-problems/eight-queens-problem.mjs)
6.2.1 | 208 | Algorithm | **Node-Consistency** | [`makeNodeConsistent`](https://github.com/davidpomerenke/aima.js/blob/master/constraints/node-consistency.mjs)
7.4.1 | 244 | Algorithm | **Syntax** of Propositional Logic | [`plParse`](https://github.com/davidpomerenke/aima.js/blob/master/logics/syntax.mjs)
t.b.c. | | | |


## Related Work

To my knowledge, there are exactly two other Javascript projects related to *AIMA*: 

- [aimacode/aima-javascript](https://github.com/aimacode/aima-javascript) is an implementation maintained by *AIMA* co-author Peter Norvig. Its aim is to power some beautiful [interactive visualizations](http://aimacode.github.io/aima-javascript/). It is written in browser Javascript rather than Node Javascript. The *aimacode* organization also features repositories with *AIMA* implementations in other programming languages, notably [Java](https://github.com/aimacode/aima-java) and [Python](https://github.com/aimacode/aima-python). 

- [ajlopez/NodeAima](https://github.com/ajlopez/NodeAima) is an abandoned implementation of only the *vacuum world* in Node Javascript. 

The existing code from these projects still has to be harnessed for this project! 

## Extensions
- [aima-checkers](https://github.com/davidpomerenke/aima-checkers)

## Applications
- [aima-checkers-gui](https://github.com/davidpomerenke/aima-checkers-gui)

## Contributing

Every contribution is very welcome: Modifications of existing code to make it more understandable and beautiful; additional algorithms and data structures from the book; additional problems and games; additional usage examples; additional documentation; anything else you have in mind. Please create an issue or a pull request! 

The coding style is *Javascript Standard Style*, there is an extension called *vscode-standardjs* for using this style in Visual Studio Code. Node module dependencies are okay, but please restrict them to very basic functions. 

Thank you very much in advance for your contribution :)
