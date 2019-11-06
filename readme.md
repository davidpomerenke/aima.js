# aima.js

[*Artificial Intelligence - A Modern Approach*](http://aima.cs.berkeley.edu/) (*AIMA*) by Stuart Russell and Peter Norvig is the reference textbook on artificial intelligence. 

This module implements some of the algorithms and data structures from the *AIMA* book in modern Node Javascript. The focus is on code understandability. 

## Installation

`git clone https://github.com/davidpomerenke/aima.js.git && cd aima.js && npm test`

**Note:** This package uses ES6 modules which require running `node` with the `--experimental-modules` flag. ES6 modules are expected to become standard features by the end of November 2019. 

## Usage

Almost every code file `my-file.mjs` is accompanied by some test file `my-file.test.mjs`. The test files provide easy examples on how to use the code files. 

## Book References

Section | Page | Type | Algorithm | File
--- | ---:| --- | --- | ---
2.4 | 47 | Agent | **Table-Driven Agent** | `intelligent-agents/table-driven-agent.mjs`
2.4 | 49 | Agent | **Simple Reflex Agent** | `intelligent-agents/simple-reflex-agent.mjs`
3.1.1 | 67 | Abstraction | **Search Problem** | `search/search-problem.mjs`
3.1 | 68 | Data | **Map of Romania** | `search/search-problems/real-world-problems/cities`
3.2.1 | 70 | Problem | **Vacuum World** | `search/search-problems/toy-problems/vacuum-world.mjs`
3.2.1 | 71 | Problem | **8-Puzzle** | `search/search-problems/toy-problems/eight-puzzle.mjs`
3.2.1 | 72 | Problem | Incremental **8-Queens Problem** | `search/search-problems/toy-problems/eight-queens-problem.mjs`
3.2.1 | 73 | Problem | **Knuth Conjecture** | `search/search-problems/toy-problems/knuth-conjecture.mjs`
3.2.2 | 73 | Problem | **Route Finding** | `search/search-problems/real-world-problems/route-finding-problem.mjs`
3.2.2 | 74 | Problem | **Touring Problem** | `search/search-problems/real-world-problems/touring-problem.mjs`
3.2.2 | 74 | Problem | **Traveling Salesperson Problem** | `search/search-problems/real-world-problems/traveling-salesperson-problem.mjs`
3.3 | 77 | Search | **Tree Search** | `search/tree-search.mjs`
3.3 | 77 | Search | **Graph Search** | `search/graph-search.mjs`
3.3.1 | 79 | Abstraction | **Node Structure** | cf. `problem.mjs`
3.3.1 | 80 | Abstraction | FIFO, LIFO, and Priority **Queue** | `search/queues/queue.mjs`
3.4.1 | 82 | Search | **Breadth-First Search** | `search/uninformed-search/breadth-first-search.mjs`
3.4.2 | 84 | Search | **Uniform Cost Search** | `search/uninformed-search/uniform-cost-search.mjs`
3.4.3 | 87 | Search | **Depth-First Search** | `search/uninformed-search/depth-first-search.mjs`
3.4.4 | 88 | Search | **Depth-Limited Search** | `search/uninformed-search/depth-limited-search.mjs`
3.4.5 | 89 | Search | **Iterative Deepening Search** | `search/uninformed-search/iterative-deepening-search.mjs`
3.5.1 | 92 | Search | **Greedy Best-First Search** | `search/heuristic-search/greedy-search.mjs`
3.5.2 | 93 | Search | **A\* Search** | `search/heuristic-search/a-star-search.mjs`
3.5.2 | 99 | Search | **Recursive Best-First Search** | cf. branch `feature-recursive-best-first-search`
4.1 | 121 | Abstraction | **Optimization Problem** | `optimization/optimization-problem.mjs`
4.1.1 | 122 | Problem | Complete-State **8-Queens Problem** | `optimization/optimization-problems/eight-queens-problem.mjs`
4.1.1 | 122 | Search | **Hill-Climbing** | `optimization/hill-climbing-search.mjs`
4.1.2 | 126 | Search | **Simulated Annealing / Gradient Descent** | `optimization/simulated-annealing.mjs`
5.1 | 162 | Abstraction | **Game Problem** | `games/game.mjs`
5.1 | 163 | Problem | **Tic Tac Toe** | `games/games/tic-tac-toe.mjs`
5.2.1 | 166 | Search | **MiniMax Algorithm** | `games/minimax-decision.mjs`
5.3 | 170 | Search | **Alpha-Beta Search** | `games/alpha-beta-search.mjs`


## Related Work

To my knowledge, there are exactly two other Javascript projects related to *AIMA*: 

- [aimacode/aima-javascript](https://github.com/aimacode/aima-javascript) is an implementation maintained by *AIMA* co-author Peter Norvig. Its aim is to power some beautiful [interactive visualizations](http://aimacode.github.io/aima-javascript/). It is written in browser Javascript rather than Node Javascript. The *aimacode* organization also features repositories with *AIMA* implementations in other programming languages, notably [Java](https://github.com/aimacode/aima-java) and [Python](https://github.com/aimacode/aima-python). 

- [ajlopez/NodeAima](https://github.com/ajlopez/NodeAima) is an abandoned implementation of only the *vacuum world* in Node Javascript. 

The existing code from these projects still has to be harnessed for this project! 

## Contributing

Every contribution is very welcome: Modifications of existing code to make it more understandable and beautiful; additional algorithms and data structures from the book; additional problems and games; additional usage examples; additional documentation; anything else you have in mind. Please create an issue or a pull request! 

The coding style is *Javascript Standard Style*, there is an extension called *vscode-standardjs* for using this style in Visual Studio Code. Node module dependencies are okay, but please restrict them to very basic functions. 

Thank you very much in advance for your contribution :)
