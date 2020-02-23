# aima-coffee

[![NPM Package](https://img.shields.io/npm/v/aima.svg)]("https://www.npmjs.com/package/aima")
[![Tests](https://github.com/davidpomerenke/aima-coffee/workflows/Node%20CI/badge.svg)](https://github.com/davidpomerenke/aima-coffee/actions?query=workflow%3A%22Node+CI%22)
[![Coverage](https://codecov.io/gh/davidpomerenke/aima-coffee/branch/master/graph/badge.svg)](https://codecov.io/gh/davidpomerenke/aima-coffee)

[*Artificial Intelligence - A Modern Approach*](http://aima.cs.berkeley.edu/) (*AIMA*) by Stuart Russell and Peter Norvig is the reference textbook on artificial intelligence. 

This package implements some of the algorithms and data structures from the *AIMA* book in function-oriented [CoffeeScript](https://coffeescript.org/), which is compatible with JavaScript.
The focus is on code understandability. 

## Installation and Usage

For using this package as a module in your own Node JavaScript project, install it with the [node package manager](https://github.com/npm/cli):

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

## Extensions
- [aima-checkers](https://github.com/davidpomerenke/aima-checkers): Checkers rulebase.

## Applications
- [aima-checkers-gui](https://github.com/davidpomerenke/aima-checkers-gui): Graphical checkers browsergame for desktop and mobile.

## Code & More
This is just the beginning of the literate code file. For information on development & contributing, as well as the source code (including many usage examples), please visit the [Github repository](https://github.com/davidpomerenke/aima-coffee).
