# aima-coffee

<p align="center">
  <a href="https://www.npmjs.com/package/aima">
    <img src="https://img.shields.io/npm/v/aima.svg" alt="NPM Package" />
  </a>
  <a href="https://github.com/davidpomerenke/aima-coffee/actions?query=workflow%3A%22Node+CI%22">
    <img src="https://github.com/davidpomerenke/aima-coffee/workflows/Node%20CI/badge.svg" alt="Tests" />
  </a>
  <a href="https://codecov.io/gh/davidpomerenke/aima-coffee">
    <img src="https://codecov.io/gh/davidpomerenke/aima-coffee/branch/master/graph/badge.svg" alt="Tests" />
  </a>
  <a href="https://gitter.im/aima-coffee/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge">
    <img src="https://badges.gitter.im/aima-coffee/community.svg" alt="Chat" />
  </a>
</p>

[*Artificial Intelligence - A Modern Approach*](http://aima.cs.berkeley.edu/) (*AIMA*) by Stuart Russell and Peter Norvig is the reference textbook on artificial intelligence. 

This package implements some of the algorithms and data structures from the *AIMA* book in literate, function-oriented [CoffeeScript](https://coffeescript.org/), which is compatible with JavaScript.
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

## Related Work

To my knowledge, there are exactly two other JavaScript projects related to *AIMA*: 

- [aimacode/aima-javascript](https://github.com/aimacode/aima-javascript) is an implementation maintained by *AIMA* co-author Peter Norvig.
  Its aim is to power some beautiful [interactive visualizations](http://aimacode.github.io/aima-javascript/).
  It is written in browser JavaScript rather than Node Java- / CoffeeScript.
  The *aimacode* organization also features repositories with *AIMA* implementations in other programming languages, notably 
  [Java](https://github.com/aimacode/aima-java) and 
  [Python](https://github.com/aimacode/aima-python). 

- [ajlopez/NodeAima](https://github.com/ajlopez/NodeAima) is an abandoned implementation of only the *vacuum world* in Node JavaScript. 

The existing code from these projects still has to be harnessed for this project! 

## Extensions
- [aima-checkers](https://github.com/davidpomerenke/aima-checkers): Checkers rulebase.

## Applications
- [aima-checkers-gui](https://github.com/davidpomerenke/aima-checkers-gui): Graphical checkers browsergame for desktop and mobile.

## Contributing

Every contribution is very welcome: Modifications of existing code to make it more understandable and beautiful; additional algorithms and data structures from the book; additional problems and games; additional usage examples; additional documentation; anything else you have in mind. Please create an issue or a pull request!

Thank you very much in advance for your contribution :)

## Pre-Requisites

### Dependencies

    import deepEqual            from 'deep-equal'
    import gen                  from 'random-seed'
    import { strict as assert } from 'assert'

### Utilities

#### Sum

    sum = (array, func) ->
      array.reduce ((accumulator, value, index) ->
        accumulator + func value, index, array), 0
    #
    array = [ [100, 1000], [200, 2000], [300, 3000] ]
    assert.equal (sum array, (x)           -> x[1]),                        6000
    assert.equal (sum array, (x, i)        -> x[1] + 10 * i),               6030
    assert.equal (sum array, (x, i, array) -> x[1] + 10 * i + array[0][0]), 6330

#### Factorial

    factorial = (n) -> 
      [...Array(n).keys()]
        .reduce ((prev, i) -> prev * (i + 1)), 1
    #
    assert.equal factorial(5), 1 * 2 * 3 * 4 * 5
    assert.equal factorial(10), factorial(5) * 6 * 7 * 8 * 9 * 10

## Intelligent Agents

#### Table-Driven Agent

Confer section 2.4, p. 47.

    export class TableDrivenAgent
      constructor: (@table = {}) ->
        @percepts = []

      action: (percept) ->
        @percepts.push percept
        @table[this.percepts]

Example: __Table Vacuum Agent__

    tableVacuumAgent = new TableDrivenAgent
      [ [ ['A', 'clean'] ] ]: 'right'
      [ [ ['A', 'dirty'] ] ]: 'suck'
      [ [ ['B', 'clean'] ] ]: 'left'
      [ [ ['B', 'dirty'] ] ]: 'suck'
      [ [ ['A', 'clean'], ['A', 'clean'] ] ]: 'right'
      [ [ ['A', 'clean'], ['A', 'dirty'] ] ]: 'suck'
      [ [ ['A', 'clean'], ['B', 'clean'] ] ]: 'left'
      [ [ ['A', 'clean'], ['B', 'dirty'] ] ]: 'suck'
      [ [ ['A', 'dirty'], ['A', 'clean'] ] ]: 'right'
      [ [ ['A', 'dirty'], ['A', 'dirty'] ] ]: 'suck'
      [ [ ['A', 'dirty'], ['B', 'clean'] ] ]: 'left'
      [ [ ['A', 'dirty'], ['B', 'dirty'] ] ]: 'suck'
      [ [ ['B', 'clean'], ['A', 'clean'] ] ]: 'right'
      [ [ ['B', 'clean'], ['A', 'dirty'] ] ]: 'suck'
      [ [ ['B', 'clean'], ['B', 'clean'] ] ]: 'left'
      [ [ ['B', 'clean'], ['B', 'dirty'] ] ]: 'suck'
      [ [ ['B', 'clean'], ['A', 'clean'] ] ]: 'right'
      [ [ ['B', 'clean'], ['A', 'dirty'] ] ]: 'suck'
      [ [ ['B', 'clean'], ['B', 'clean'] ] ]: 'left'
      [ [ ['B', 'clean'], ['B', 'dirty'] ] ]: 'suck'
      [ [ ['A', 'clean'], ['A', 'clean'], ['A', 'clean'] ] ]: 'right'
      [ [ ['A', 'clean'], ['A', 'clean'], ['A', 'dirty'] ] ]: 'suck'  #...
    #
    assert.equal tableVacuumAgent.action([ ['A', 'dirty'] ]), 'suck'
    assert.equal tableVacuumAgent.action([ ['A', 'clean'] ]), 'right'
    assert.equal tableVacuumAgent.action([ ['B', 'dirty'] ]), undefined

#### Simple Reflex Agent

Confer section 2.4, p. 49.

    export class SimpleReflexAgent
      constructor: (@rules) ->

      action: (percept) ->
        state = @interpretInput percept
        rule  = @rules.find (rule) ->
          rule.condition ...state
        rule?.action

      interpretInput: (percept) ->
        percept

Example: __Reflex Vacuum Agent__

    reflexVacuumAgent = new SimpleReflexAgent [
      condition: ([..., status  ]) -> status   == 'dirty'
      action: 'suck'
    ,
      condition: ([location, ...]) -> location == 'A'
      action: 'right'
    ,	
      condition: ([location, ...]) -> location == 'B'
      action: 'left'
    ]
    #
    assert.equal (reflexVacuumAgent.action [ ['A', 'dirty'] ]), 'suck'
    assert.equal (reflexVacuumAgent.action [ ['A', 'clean'] ]), 'right'
    assert.equal (reflexVacuumAgent.action [ ['B', 'dirty'] ]), 'suck'
    assert.equal (reflexVacuumAgent.action [ ['C', 'dirty'] ]), 'suck'
    assert.equal (reflexVacuumAgent.action [ ['C', 'clean'] ]), undefined

## Problem Solving

For the node structure, confer section 3.3.1, p. 79.

    export class Problem
      constructor: ({ @initialState, @actions, result }) ->
        @_result = result

      result: (state, action) ->
        if @actions(state).some (a) -> deepEqual action, a
          @_result state, action

      rootNode: ->
        state: @initialState

      childNode: (node, action) -> {
        state:  @result node.state, action
        parent: node
        action: action
      }

      expand: (node) ->
        @childNode(node, action) for action in @actions(node.state)

      @solutionPath: (node) ->
        if 'parent' of node
          [...Problem.solutionPath(node.parent), node.state]
        else
          [node.state]

## Search

Confer section 3.1.1, p. 67.

    export class SearchProblem extends Problem
      constructor: ({ initialState, actions, result, stepCost, @heuristic = (-> 0), @goalTest }) ->
        super
          initialState: initialState,
          actions:      actions,
          result:       result
        @_stepCost = stepCost

      stepCost: (state, action) ->
        this._stepCost state, action if (@actions state).some (a) -> deepEqual action, a

      rootNode: -> {
        ...super()
        pathCost:  0
        heuristic: @heuristic @initialState
      }

      childNode: (node, action) -> {
        ...super node, action
        pathCost:  node.pathCost + @stepCost node.state, action
        heuristic: @heuristic @result node.state, action
      }

### Toy Problems

#### Vacuum World

Confer section 3.2.1, p. 70.

    export vacuumWorld = new SearchProblem
      initialState: 
        location: 'A'
        A:        'dirty'
        B:        'dirty'
      actions: (state) -> [
        'left'
        'right'
        'suck'
      ]
      result: (state, action) ->
        location:
          if action == 'left'
            'A'
          else if action == 'right'
            'B'
          else
            state.location
        A: 
          if state.location == 'A' and action == 'suck'
            'clean'
          else
            state.A
        B: 
          if state.location == 'B' and action == 'suck'
            'clean'
          else
            state.B
      stepCost: (state, action) -> 1
      goalTest: (state) ->
        state.A == 'clean' and
        state.B == 'clean'
    #
    state = vacuumWorld.initialState
    assert.deepEqual state, { location: 'A', A: 'dirty', B: 'dirty' }

    state = vacuumWorld.result state, 'suck'
    assert.deepEqual state, { location: 'A', A: 'clean', B: 'dirty' }

    state = vacuumWorld.result state, 'suck'
    assert.deepEqual state, { location: 'A', A: 'clean', B: 'dirty' }

    state = vacuumWorld.result state, 'left'
    assert.deepEqual state, { location: 'A', A: 'clean', B: 'dirty' }

    state = vacuumWorld.result state, 'right'
    assert.deepEqual state, { location: 'B', A: 'clean', B: 'dirty' }
    assert not vacuumWorld.goalTest state

    state = vacuumWorld.result state, 'suck'
    assert.deepEqual state, { location: 'B', A: 'clean', B: 'clean' }
    assert vacuumWorld.goalTest state

#### 8-Puzzle

Confer section 3.2.1, p. 71.

    export makeEightPuzzle = (initialState) ->
      moveIsValid = (zero) ->
        zero.y in [0, 1, 2] and
        zero.x in [0, 1, 2]

      zero = (state) -> # position of zero
        y: state.indexOf(state.filter((row) -> row.includes 0)[0])
        x: state.filter(              (row) -> row.includes 0)[0].indexOf 0

      goalPosition = (nr) -> [
        goalState.findIndex (row) -> row.includes(nr)
        goalState.find(     (row) -> row.includes(nr)).indexOf nr
      ]

      manhattanDist = ([y1, x1], [y2, x2]) ->
        Math.abs(y1 - y2) +
        Math.abs(x1 - x2)

      moves =
        up:    { y: -1, x:  0 }
        down:  { y:  1, x:  0 }
        left:  { y:  0, x: -1 }
        right: { y:  0, x:  1 }

      goalState = [
        [0, 1, 2]
        [3, 4, 5]
        [6, 7, 8]
      ]

      new SearchProblem
        initialState: initialState
        actions: (state) ->
          Object.keys(moves)
            .filter (key) -> moveIsValid
              y: (zero state).y + moves[key].y
              x: (zero state).x + moves[key].x
        result: (state, action) ->
          state.map (row, y) ->
            row.map (nr, x) ->
              # Shift zero to new position.
              if y == (zero state).y + moves[action].y and
              x    == (zero state).x + moves[action].x
                0
              # Shift number to old position of zero.
              else if nr == 0
                state[(zero state).y + moves[action].y][(zero state).x + moves[action].x]
              # Keep all other numbers.
              else
                nr
        stepCost: (state, action) -> 1
        heuristic: (state) ->
          sum state, (numbers, y) ->
            sum numbers, (number, x) ->
              manhattanDist [y, x], goalPosition number
        goalTest: (state) ->
          deepEqual state, goalState
    #
    simpleEightPuzzle = makeEightPuzzle [
      [1, 4, 2]
      [3, 0, 5]
      [6, 7, 8]
    ]

    state = simpleEightPuzzle.initialState
    assert.deepEqual state, [
      [1, 4, 2]
      [3, 0, 5]
      [6, 7, 8]
    ]
    assert.equal (simpleEightPuzzle.heuristic state), 4

    state = simpleEightPuzzle.result state, 'up'
    assert.deepEqual state, [
      [1, 0, 2]
      [3, 4, 5]
      [6, 7, 8]
    ]
    assert.equal (simpleEightPuzzle.heuristic state), 2
    assert not simpleEightPuzzle.goalTest state

    state = simpleEightPuzzle.result state, 'left'
    assert.deepEqual state, [
      [0, 1, 2]
      [3, 4, 5]
      [6, 7, 8]
    ]
    assert.equal (simpleEightPuzzle.heuristic state), 0
    assert simpleEightPuzzle.goalTest state
    #
    complexEightPuzzle = makeEightPuzzle [
      [7, 2, 4]
      [5, 0, 6]
      [8, 3, 1]
    ]
    state = complexEightPuzzle.initialState
    assert.equal (simpleEightPuzzle.heuristic state), 20

#### Incremental 8-Queens Problem

Incremental formulation of the 8-queens problem. Confer section 3.2.1, p. 72.

    export incrementalEightQueensProblem = new SearchProblem
      initialState: []
      actions: (state) ->
        y = state.length
        if y < 8
          [0, 1, 2, 3, 4, 5, 6, 7]
            .filter (x) ->
              not isAttacked [y, x], state
        else []
      result: (state, action) -> [...state, action]
      stepCost: (state, action) -> 0
      goalTest: (state) -> state.length == 8

    isAttacked = ([y0, x0], state) ->
      state.some (x, y) ->
        x == x0 or
        y == y0 or
        Math.abs(y - y0) == Math.abs(x - x0)
    #
    state = incrementalEightQueensProblem.initialState

    state = incrementalEightQueensProblem.result state, 3
    assert.deepEqual state, [3]
    assert.deepEqual (incrementalEightQueensProblem.result state, 3), undefined

    state = incrementalEightQueensProblem.result state, 5
    assert.deepEqual state, [3, 5]
    assert.deepEqual (incrementalEightQueensProblem.result state, 1), undefined

#### Knuth Conjecture

Confer section 3.2.1, p. 73.

    export makeKnuthConjecture = (goal) ->
      calc = (state) ->
        state.reduce (total, operation) ->
          if operation.isNumber
            operation
          else if operation == 'factorial'
            factorial total
          else if operation == 'square_root'
            Math.sqrt total
          else if operation == 'floor'
            Math.floor total
      new SearchProblem
        initialState: [4]
        actions: (state) ->
          if Number.isInteger calc(state)
            ['square_root', 'factorial']
          else
            ['square_root', 'floor']
        result: (state, action) -> [...state, action],
        stepCost: (state, action) -> 1,
        goalTest: (state) -> (calc state) == goal
    #
    simpleKnuthConjecture  = makeKnuthConjecture 1
    complexKnuthConjecture = makeKnuthConjecture 5

    state = complexKnuthConjecture.initialState
    assert.deepEqual state, [4]

    state = complexKnuthConjecture.result state, 'factorial'
    state = complexKnuthConjecture.result state, 'factorial'
    state = complexKnuthConjecture.result state, 'square_root'
    state = complexKnuthConjecture.result state, 'square_root'
    state = complexKnuthConjecture.result state, 'square_root'
    state = complexKnuthConjecture.result state, 'square_root'

    state = complexKnuthConjecture.result state, 'square_root'
    assert not complexKnuthConjecture.goalTest state

    state = complexKnuthConjecture.result state, 'floor'
    assert complexKnuthConjecture.goalTest state

### Real World Problems

Confer section 3.1, p. 68.

    cities =
      dist:
        Arad:
          Zerind: 75
          Sibiu: 140
          Timisoara: 118
        Zerind:
          Arad: 75
          Oradea: 71
        Oradea:
          Zerind: 71
          Sibiu: 151
        Sibiu:
          Arad: 140
          Oradea: 151
          Fagaras: 99
          RimnicuVilcea: 80
        Fagaras:
          Sibiu: 99
          Bucharest: 211
        Bucharest:
          Fagaras: 211
          Urziceni: 85
          Giurgiu: 90
          Pitesti: 101
        Urziceni:
          Bucharest: 85
          Vaslui: 142
          Hirsova: 98
        Vaslui:
          Urziceni: 142
          Iasi: 92
        Iasi:
          Vaslui: 92
          Neamt: 87
        Neamt:
          Iasi: 87
        Hirsova:
          Urziceni: 98
          Eforie: 86
        Eforie:
          Hirsova: 86
        Giurgiu:
          Bucharest: 90
        Pitesti:
          Bucharest: 101
          Craiova: 138
          RimnicuVilcea: 97
        Craiova:
          Pitesti: 138
          Drobeta: 120
          RimnicuVilcea: 146
        Drobeta:
          Craiova: 120
          Mehadia: 75
        Mehadia:
          Drobeta: 120
          Lugoj: 70
        Lugoj:
          Mehadia: 70
          Timisoara: 111
        Timisoara:
          Lugoj: 111
          Arad: 118
        RimnicuVilcea:
          Sibiu: 80
          Pitesti: 97
          Craiova: 146
      straightLineDist:
        Bucharest:
          Arad: 366
          Mehadia: 241
          Bucharest: 0
          Neamt: 234
          Craiova: 160
          Oradea: 380
          Drobeta: 242
          Pitesti: 100
          Eforie: 161
          RimnicuVilcea: 193
          Fagaras: 176
          Sibiu: 253
          Giurgiu: 77
          Timisoara: 329
          Hirsova: 151
          Urziceni: 80
          Iasi: 226
          Vaslui: 199
          Lugoj: 244
          Zerind: 374
        Arad:
          Bucharest: 366
        Mehadia:
          Bucharest: 241
        Neamt:
          Bucharest: 234
        Craiova:
          Bucharest: 160
        Oradea:
          Bucharest: 380
        Drobeta:
          Bucharest: 242
        Pitesti:
          Bucharest: 100
        Eforie:
          Bucharest: 161
        RimnicuVilcea:
          Bucharest: 193
        Fagaras:
          Bucharest: 176
        Sibiu:
          Bucharest: 253
        Giurgiu:
          Bucharest: 77
        Timisoara:
          Bucharest: 329
        Hirsova:
          Bucharest: 151
        Urziceni:
          Bucharest: 80
        Iasi:
          Bucharest: 226
        Vaslui:
          Bucharest: 199
        Lugoj:
          Bucharest: 244
        Zerind:
          Bucharest: 374

#### Route Finding Problem

Confer section 3.2.2, p. 73.

    export makeRouteFindingProblem = (graph, start, end) ->
      new SearchProblem
        initialState: start
        actions: (state) ->
          Object.keys graph.dist[state]
        result: (state, action) ->
          action if action of graph.dist[state]
        stepCost: (state, action) ->
          graph.dist[state][action]
        heuristic: (state) ->
          graph.straightLineDist[state][end]
        goalTest: (state) ->
          deepEqual state, end
    #
    routeFindingProblem = makeRouteFindingProblem cities, 'Arad', 'Bucharest'

    state = routeFindingProblem.initialState
    assert.equal state, 'Arad'
    assert.equal (routeFindingProblem.stepCost state, 'Sibiu'), 140

    state = routeFindingProblem.result state, 'Sibiu'
    assert.equal state, 'Sibiu'
    assert.equal (routeFindingProblem.stepCost state, 'RimnicuVilcea'), 80

    state = routeFindingProblem.result state, 'RimnicuVilcea'
    assert.equal state, 'RimnicuVilcea'
    assert.equal (routeFindingProblem.stepCost state, 'Arad'), undefined

    state = routeFindingProblem.result state, 'Arad'
    assert.equal state, undefined

#### Touring Problem

Confer section 3.2.2, p. 74.

    export makeTouringProblem = (graph, start, end) ->
      new SearchProblem
        initialState: [start]
        actions: (state) ->
          Object.keys graph.dist[state[state.length - 1]]
            .filter (city) -> not state.includes city
        result: (state, action) ->
          if action of graph.dist[state[state.length - 1]]
            [...state, action]
        stepCost: (state, action) ->
          graph.dist[state[state.length - 1]][action]
        heuristic: (state) ->
          graph.straightLineDist[state[state.length - 1]][end]
        goalTest: (state) ->
          deepEqual state[state.length - 1], end
    #
    touringProblem = makeTouringProblem cities, 'Arad', 'Bucharest'

    state = touringProblem.initialState
    assert.deepEqual state, ['Arad']
    assert.equal (touringProblem.stepCost state, 'Sibiu'), 140

    state = touringProblem.result state, 'Sibiu'
    assert.deepEqual state, ['Arad', 'Sibiu']
    assert.equal (touringProblem.stepCost state, 'RimnicuVilcea'), 80

    state = touringProblem.result state, 'RimnicuVilcea'
    assert.deepEqual state, ['Arad', 'Sibiu', 'RimnicuVilcea']
    assert.equal (touringProblem.stepCost state, 'Sibiu'), undefined

    state = touringProblem.result state, 'Sibiu'
    assert.deepEqual state, undefined

#### Traveling Salesperson Problem

Confer section 3.2.2, p. 74.

    export makeTravelingSalespersonProblem = (graph, start, end) ->
      new SearchProblem
        initialState: [start]
        actions: (state) ->
          Object.keys graph.dist[state[state.length - 1]]
            .filter (city) -> not state.includes city
        result: (state, action) -> [...state, action]
        stepCost: (state, action) ->
          graph.dist[state[state.length - 1]][action]
        goalTest: (state) ->
          state.length == (Object.keys graph.dist).length and
          state[state.length - 1] == end
    #
    travelingSalespersonProblem = makeTravelingSalespersonProblem cities, 'Arad', 'Bucharest'

    state = travelingSalespersonProblem.initialState
    assert.deepEqual state, ['Arad']
    assert.equal (travelingSalespersonProblem.stepCost state, 'Sibiu'), 140

    state = travelingSalespersonProblem.result state, 'Sibiu'
    assert.deepEqual state, ['Arad', 'Sibiu']
    assert.equal (travelingSalespersonProblem.stepCost state, 'Arad'), undefined

    state = travelingSalespersonProblem.result state, 'Arad'
    assert.deepEqual state, undefined

### Tree Search

Confer section 3.3, p. 77.

    export makeTreeSearch = (Queue) ->
      (problem) ->
        frontier = new Queue
        frontier.add problem.initialState.rootNode()
        while frontier.length > 0
          node = frontier.poll()
          if problem.goalTest node.state
            return node
          (frontier.add child) for child of problem.expand node
        false

### Graph Search

Confer section 3.3, p. 77.

    export makeGraphSearch = (Queue) ->
      (problem) ->
        frontier = new Queue
        frontier.add problem.rootNode()
        explored = new Set
        while frontier.length() > 0
          node = frontier.poll()
          if problem.goalTest node.state
            return node
          explored.add node
          for child in problem.expand node
            if (not explored.has child) and
            not frontier.some (node) -> node.state == child.state
              frontier.add child
            else if frontier.constructor.name == 'PriorityQueue'
              frontierChild = frontier
                .find (node) -> deepEqual node.state, child.state
              if typeof frontierChild != 'undefined' and
              frontierChild.pathCost > child.pathCost
                frontier.replace frontierChild, child
        false

#### Queues

Confer section 3.3.1, p. 80.

    export class Queue
      constructor: ->
        @queue = []
    
      add: (item) ->
        @queue.push item

      some: (func) ->
        @queue.some func

      find: (func) ->
        @queue.find func

      replace: (a, b) ->
        @queue[@queue.indexOf a] = b

      length: ->
        @queue.length

#### FIFO Queue

    export class FifoQueue extends Queue
      poll: ->
        @queue.shift()

#### LIFO Queue (Stack)

    export class LifoQueue extends Queue
      poll: ->
        @queue.pop()

#### Priority Queue

    export makePriorityQueue = (mapFunc) ->
      class PriorityQueue extends Queue
        constructor: ->
          super()
          @mapFunc = mapFunc
          @sortFunc = (a, b) -> mapFunc(a) - mapFunc(b)

        poll: ->
          @queue = @queue.sort @sortFunc
          @queue.shift()

        sort: ->
          @queue = @queue.sort @sortFunc

### Uninformed Search

#### Breadth-First Search

Confer section 3.4.1, p. 82.

    export breadthFirstSearch = makeGraphSearch FifoQueue
    #

    assert.deepEqual (Problem.solutionPath breadthFirstSearch vacuumWorld), [
      { location: 'A', A: 'dirty', B: 'dirty' }
      { location: 'A', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'clean' }]
    assert.deepEqual (Problem.solutionPath breadthFirstSearch simpleEightPuzzle), [
      [ [ 1, 4, 2 ]
        [ 3, 0, 5 ]
        [ 6, 7, 8 ] ]
      [ [ 1, 0, 2 ]
        [ 3, 4, 5 ]
        [ 6, 7, 8 ] ]
      [ [ 0, 1, 2 ]
        [ 3, 4, 5 ]
        [ 6, 7, 8 ] ] ]
    assert.deepEqual (breadthFirstSearch incrementalEightQueensProblem).state, [
      [1, 0, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 1, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 0, 1]
      [0, 0, 0, 0, 0, 1, 0, 0]
      [0, 0, 1, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 1, 0]
      [0, 1, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 1, 0, 0, 0, 0]
    ].map (row) -> row.indexOf 1
    assert.deepEqual (breadthFirstSearch simpleKnuthConjecture).state, \
      [4, 'square_root', 'square_root', 'floor']
    assert.deepEqual (Problem.solutionPath breadthFirstSearch routeFindingProblem), \
      [ 'Arad', 'Sibiu', 'Fagaras', 'Bucharest' ]
    assert.deepEqual (breadthFirstSearch touringProblem).state, \
      [ 'Arad', 'Sibiu', 'Fagaras', 'Bucharest' ]
    assert.equal (breadthFirstSearch travelingSalespersonProblem), false

#### Uniform Cost Search

Confer section 3.4.2, p. 84.

    export uniformCostSearch = makeGraphSearch makePriorityQueue (node) -> node.pathCost
    #

    assert.deepEqual (Problem.solutionPath uniformCostSearch vacuumWorld), [
      { location: 'A', A: 'dirty', B: 'dirty' }
      { location: 'A', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'clean' }]
    assert.deepEqual (Problem.solutionPath uniformCostSearch simpleEightPuzzle), [
      [ [ 1, 4, 2 ]
        [ 3, 0, 5 ]
        [ 6, 7, 8 ] ]
      [ [ 1, 0, 2 ]
        [ 3, 4, 5 ]
        [ 6, 7, 8 ] ]
      [ [ 0, 1, 2 ]
        [ 3, 4, 5 ]
        [ 6, 7, 8 ] ]]
    assert.deepEqual (uniformCostSearch incrementalEightQueensProblem).state, [
      [1, 0, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 1, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 0, 1]
      [0, 0, 0, 0, 0, 1, 0, 0]
      [0, 0, 1, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 1, 0]
      [0, 1, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 1, 0, 0, 0, 0]
    ].map (row) -> row.indexOf 1
    assert.deepEqual (uniformCostSearch simpleKnuthConjecture).state, \
      [4, 'square_root', 'square_root', 'floor']
    assert.deepEqual (Problem.solutionPath uniformCostSearch routeFindingProblem), \
      [ 'Arad', 'Sibiu', 'RimnicuVilcea', 'Pitesti', 'Bucharest' ]
    assert.deepEqual (uniformCostSearch touringProblem).state, \
      [ 'Arad', 'Sibiu', 'RimnicuVilcea', 'Pitesti', 'Bucharest' ]
    assert.equal (uniformCostSearch travelingSalespersonProblem), false

#### Depth-First Search

Confer section 3.4.3, p. 87.

    export depthFirstSearch = makeGraphSearch LifoQueue
    #

    assert.deepEqual (depthFirstSearch incrementalEightQueensProblem).state, [
      [0, 0, 0, 0, 0, 0, 0, 1]
      [0, 0, 0, 1, 0, 0, 0, 0]
      [1, 0, 0, 0, 0, 0, 0, 0]
      [0, 0, 1, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 1, 0, 0]
      [0, 1, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 1, 0]
      [0, 0, 0, 0, 1, 0, 0, 0]
    ].map (row) -> row.indexOf 1
    assert.deepEqual (depthFirstSearch touringProblem).state, [
      'Arad',
      'Timisoara',
      'Lugoj',
      'Mehadia',
      'Drobeta',
      'Craiova',
      'RimnicuVilcea',
      'Pitesti',
      'Bucharest'
    ] # depends on the (arbitrary) order of attributes in the cities graph
    assert.equal (depthFirstSearch travelingSalespersonProblem), false

#### Depth-Limited Search

Confer section 3.4.4, p. 88.

    export depthLimitedSearch = (problem, limit) ->
      recursiveDepthLimitedSearch problem.rootNode(), problem, limit

    recursiveDepthLimitedSearch = (node, problem, limit) ->
      if problem.goalTest node.state
        node
      else if limit == 0
        'cutoff'
      else
        cutoffOccurred = false
        for child in problem.expand node
          result = recursiveDepthLimitedSearch child, problem, limit - 1
          if result == 'cutoff'
            cutoffOccurred = true
          else if result
            return result
        if cutoffOccurred
          'cutoff'
        else
          false
    #

    assert.equal (depthLimitedSearch vacuumWorld, 2), 'cutoff'
    assert.deepEqual (Problem.solutionPath (depthLimitedSearch vacuumWorld, 3)), [
      { location: 'A', A: 'dirty', B: 'dirty' }
      { location: 'A', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'clean' }]

    assert.equal (depthLimitedSearch simpleEightPuzzle, 1), 'cutoff'
    assert simpleEightPuzzle.goalTest (depthLimitedSearch simpleEightPuzzle, 2).state

    assert.deepEqual (depthLimitedSearch incrementalEightQueensProblem, 8).state, [
      [1, 0, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 1, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 0, 1]
      [0, 0, 0, 0, 0, 1, 0, 0]
      [0, 0, 1, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 1, 0]
      [0, 1, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 1, 0, 0, 0, 0]
    ].map (row) -> row.indexOf 1

    assert.equal (depthLimitedSearch simpleKnuthConjecture, 2), 'cutoff'
    assert (depthLimitedSearch simpleKnuthConjecture, 3).state, 1

    assert.deepEqual (Problem.solutionPath (depthLimitedSearch routeFindingProblem, 4)), \
      ['Arad', 'Sibiu', 'Fagaras', 'Bucharest']

    assert.deepEqual (depthLimitedSearch touringProblem, 4).state, \
      ['Arad', 'Sibiu', 'Fagaras', 'Bucharest']

    assert.equal (depthLimitedSearch travelingSalespersonProblem, 20), false

#### Iterative Deepening Search

Confer section 3.4.5, p. 89.

    export iterativeDeepeningSearch = (problem) ->
      recursiveIterativeDeepeningSearch problem, 0

    recursiveIterativeDeepeningSearch = (problem, depth) ->
      result = depthLimitedSearch problem, depth
      if result != 'cutoff'
        result
      else
        recursiveIterativeDeepeningSearch problem, (depth + 1)
    #

    assert.deepEqual (Problem.solutionPath iterativeDeepeningSearch vacuumWorld), [
      { location: 'A', A: 'dirty', B: 'dirty' }
      { location: 'A', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'clean' }]
    assert.deepEqual (Problem.solutionPath iterativeDeepeningSearch simpleEightPuzzle), [
      [ [ 1, 4, 2 ]
        [ 3, 0, 5 ]
        [ 6, 7, 8 ] ]
      [ [ 1, 0, 2 ]
        [ 3, 4, 5 ]
        [ 6, 7, 8 ] ]
      [ [ 0, 1, 2 ]
        [ 3, 4, 5 ]
        [ 6, 7, 8 ] ]]
    assert.deepEqual (iterativeDeepeningSearch incrementalEightQueensProblem).state, [
      [1, 0, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 1, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 0, 1]
      [0, 0, 0, 0, 0, 1, 0, 0]
      [0, 0, 1, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 1, 0]
      [0, 1, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 1, 0, 0, 0, 0]
    ].map (row) -> row.indexOf 1
    assert.deepEqual (iterativeDeepeningSearch simpleKnuthConjecture).state, \
      [4, 'square_root', 'square_root', 'floor']
    assert.deepEqual (Problem.solutionPath iterativeDeepeningSearch routeFindingProblem), \
      [ 'Arad', 'Sibiu', 'Fagaras', 'Bucharest' ]
    assert.deepEqual (iterativeDeepeningSearch touringProblem).state, \
      [ 'Arad', 'Sibiu', 'Fagaras', 'Bucharest' ]
    assert.equal (iterativeDeepeningSearch travelingSalespersonProblem), false

### Heuristic Search

#### Greedy Best-First Search

Confer section 3.5.1, p. 92.

    export greedySearch = makeGraphSearch \
      makePriorityQueue (node) -> node.heuristic
    #

    assert.deepEqual (Problem.solutionPath greedySearch vacuumWorld), [
      { location: 'A', A: 'dirty', B: 'dirty' }
      { location: 'A', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'clean' }]
    assert.deepEqual (Problem.solutionPath greedySearch simpleEightPuzzle), [
      [ [ 1, 4, 2 ]
        [ 3, 0, 5 ]
        [ 6, 7, 8 ] ]
      [ [ 1, 0, 2 ]
        [ 3, 4, 5 ]
        [ 6, 7, 8 ] ]
      [ [ 0, 1, 2 ]
        [ 3, 4, 5 ]
        [ 6, 7, 8 ] ]]
    assert.deepEqual (greedySearch incrementalEightQueensProblem).state, [
      [1, 0, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 1, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 0, 1]
      [0, 0, 0, 0, 0, 1, 0, 0]
      [0, 0, 1, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 1, 0]
      [0, 1, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 1, 0, 0, 0, 0]
    ].map (row) -> row.indexOf 1
    assert.deepEqual (greedySearch simpleKnuthConjecture).state, \
      [4, 'square_root', 'square_root', 'floor']
    assert.deepEqual (Problem.solutionPath greedySearch routeFindingProblem), \
      [ 'Arad', 'Sibiu', 'Fagaras', 'Bucharest' ]
    assert.deepEqual (greedySearch touringProblem).state, \
      [ 'Arad', 'Sibiu', 'Fagaras', 'Bucharest' ]
    assert.equal (greedySearch travelingSalespersonProblem), false

#### A* Search

Confer section 3.5.2, p. 93.

    export aStarSearch  = makeGraphSearch \
      makePriorityQueue (node) -> node.pathCost + node.heuristic
    #

    assert.deepEqual (Problem.solutionPath aStarSearch vacuumWorld), [
      { location: 'A', A: 'dirty', B: 'dirty' }
      { location: 'A', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'dirty' }
      { location: 'B', A: 'clean', B: 'clean' }]
    assert.deepEqual (Problem.solutionPath aStarSearch simpleEightPuzzle), [
      [ [ 1, 4, 2 ]
        [ 3, 0, 5 ]
        [ 6, 7, 8 ] ]
      [ [ 1, 0, 2 ]
        [ 3, 4, 5 ]
        [ 6, 7, 8 ] ]
      [ [ 0, 1, 2 ]
        [ 3, 4, 5 ]
        [ 6, 7, 8 ] ]]
    assert.deepEqual (aStarSearch incrementalEightQueensProblem).state, [
      [1, 0, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 1, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 0, 1]
      [0, 0, 0, 0, 0, 1, 0, 0]
      [0, 0, 1, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 1, 0]
      [0, 1, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 1, 0, 0, 0, 0]
    ].map (row) -> row.indexOf 1
    assert.deepEqual (aStarSearch simpleKnuthConjecture).state, \
      [4, 'square_root', 'square_root', 'floor']
    assert.deepEqual (Problem.solutionPath aStarSearch routeFindingProblem), \
      [ 'Arad', 'Sibiu', 'RimnicuVilcea', 'Pitesti', 'Bucharest' ]
    assert.deepEqual (aStarSearch touringProblem).state, \
      [ 'Arad', 'Sibiu', 'RimnicuVilcea', 'Pitesti', 'Bucharest' ]
    assert.equal (aStarSearch travelingSalespersonProblem), false

## Optimisation

Confer section 4.1, p. 121.

    export class OptimizationProblem extends Problem
      constructor: ({ initialState, actions, result, @value }) ->
        super
          initialState: initialState,
          actions: actions,
          result: result

      rootNode: -> {
        ...super()
        value: @value @initialState
      }

      childNode: (node, action) -> {
        ...super node, action
        value: @value @result node.state, action
      }

#### Complete-State 8-Queens Problem

Complete-state formulation of the 8-queens problem. From section 4.1.1, p. 122.

    export completeStateEightQueensProblem = new OptimizationProblem
      initialState: [
        [1, 0, 0, 0, 0, 0, 0, 0]
        [1, 0, 0, 0, 0, 0, 0, 0]
        [1, 0, 0, 0, 0, 0, 0, 0]
        [1, 0, 0, 0, 0, 0, 0, 0]
        [1, 0, 0, 0, 0, 0, 0, 0]
        [1, 0, 0, 0, 0, 0, 0, 0]
        [1, 0, 0, 0, 0, 0, 0, 0]
        [1, 0, 0, 0, 0, 0, 0, 0]
      ]
      actions: (state) ->
        state.reduce ((total, row, y) -> [
          ...total,
          ...[0, 1, 2, 3, 4, 5, 6, 7]
            .filter (x) -> row[x] == 0
            .map (x) -> [y, x]
        ]), []
      result: (state, [yMove, xMove]) ->
        state.map (row, y) ->
          row.map (tile, x) ->
            if y == yMove
              if x == xMove
                1
              else
                0
            else
              tile
      value: (state) -> -nrAttackedQueens state

    attacks = ([y1, x1], [y2, x2]) ->
      y1 == y2 or
      x1 == x2 or
      y2 - y1 == x2 - x1

    nrAttackedQueens = (state) ->
      combinations \
        state.map (row, y) ->
          [y, row.indexOf 1]
        .reduce ((total, [q1, q2]) ->
          total + attacks(q1, q2) * 1), 0

    combinations = (array) ->
      array.reduce ((prev, a, i) -> [
        ...prev,
        ...array
          .slice 0, i
          .map (b) -> [a, b]
      ]), []
    #
    state = completeStateEightQueensProblem.initialState
    assert.equal (completeStateEightQueensProblem.actions state).length, 8 * (8 - 1)
    assert.equal (completeStateEightQueensProblem.value state), -(8**2 - 8) / 2

    state = completeStateEightQueensProblem.result state, [3, 6]
    assert.deepEqual state, [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0]
    ]
    assert.equal (completeStateEightQueensProblem.value state), -(28 - 7)

#### Hill-Climbing Search

Confer section 4.1.1, p. 122.

    export hillClimbingSearch = (problem) ->
      recursiveHillClimbingSearch problem, problem.rootNode

    recursiveHillClimbingSearch = (problem, current) ->
      if (biggestValueNode problem.expand current).value <= current.value
        current
      else
        recursiveHillClimbingSearch problem, biggestValueNode problem.expand current

    biggestValueNode = (array) ->
      array.reduce (prev, node) ->
        if node.value > prev.value
          node
        else
          prev
    #

solution = (hillClimbingSearch completeStateEightQueensProblem).state
assert.deepEqual solution, [
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0]
] # TODO:

#### Simulated Annealing

Also known as __Gradient Descent__. From section 4.1.2, p. 126.

Parameter `random`: A random number generator function. Use seeded function for testing!

    export simulatedAnnealing = (problem, schedule, random = Math.random) ->
      schedule ?= (time) -> 1 / time
      randEl = (array) -> array[Math.floor(random() * array.length)]
      current = problem.rootNode()
      time = 1
      temp = schedule 1
      next
      evalSlope
      while temp > 0
        temp = schedule time
        if (temp == 0)
          return current
        next = randEl problem.expand current
        evalSlope = next.value - current.value
        if evalSlope > 0
          current = next
        else if (Math.E**(evalSlope / temp) * random()) > 0.5
          current = next
        time += 1
    #

    rand = gen.create 'seedshrdlu4523' # random seed initialization for testing
    nSteps = 2
    assert.equal \
      (simulatedAnnealing completeStateEightQueensProblem, ((t) -> 1/t - 1/nSteps), rand.random).value, \
      -22

For `nSteps = 100`, this solves the problem (`value == -0`).
This is excluded from testing because it takes too long.

## Games

Confer section 5.1, p. 162.

    export class Game extends Problem
      constructor: ({ 
        initialState, @player, actions, result, @terminalTest, utility, @heuristic = ((state) -> 0)
      }) ->
        super
          initialState: initialState
          actions: actions
          result: result
        @_utility = utility

      utility: (state) ->
        @_utility state if @terminalTest state

      rootNode: -> {
        ...super()
        player: @player @initialState
      }

      childNode: (node, action) -> {
        ...super node, action
        player: @player @initialState
      }

#### Tic Tac Toe

Confer section 5.1, p. 163.

    export ticTacToe = new Game
      initialState: [
        [' ', ' ', ' ']
        [' ', ' ', ' ']
        [' ', ' ', ' ']
      ]
      player: (state) ->
        if (count state, 'x') > (count state, 'o')
          'o'
        else
          'x'
      actions: (state) -> [
        [0, 0], [0, 1], [0, 2]
        [1, 0], [1, 1], [1, 2]
        [2, 0], [2, 1], [2, 2]
      ].filter ([y, x]) ->
          state[y][x] == ' '
      result: (state, [yMove, xMove]) ->
        state.map (row, y) ->
          row.map (tile, x) ->
            if y == yMove and x == xMove
              ticTacToe.player state
            else
              tile
      terminalTest: (state) ->
        (threeInaRow state, 'x') or
        (threeInaRow state, 'o')
      utility: (state) ->
        1 * (threeInaRow state, 'x')

    threeInaRow = (state, p) -> [
        [ [0, 0], [0, 1], [0, 2] ] # horizontal
        [ [1, 0], [1, 1], [1, 2] ] # horizontal
        [ [2, 0], [2, 1], [2, 2] ] # horizontal
        [ [0, 0], [1, 0], [2, 0] ] # vertical
        [ [0, 1], [1, 1], [2, 1] ] # vertical
        [ [0, 2], [1, 2], [2, 2] ] # vertical
        [ [0, 0], [1, 1], [2, 3] ] # diagonal
        [ [0, 2], [1, 2], [2, 0] ] # diagonal
      ].some (row) ->
        row.every ([y, x]) ->
          state[y][x] == p

    count = (state, x) ->
      state
        .flat()
        .filter (square) -> square == x
        .length
    #

    state = ticTacToe.initialState

    state = ticTacToe.result state, [1, 0]
    assert.deepEqual state, [
      [' ', ' ', ' ']
      ['x', ' ', ' ']
      [' ', ' ', ' ']
    ]

    state = ticTacToe.result state, [2, 0]
    assert.deepEqual state, [
      [' ', ' ', ' ']
      ['x', ' ', ' ']
      ['o', ' ', ' ']
    ]

    state = ticTacToe.result state, [1, 1]
    assert.deepEqual state, [
      [' ', ' ', ' ']
      ['x', 'x', ' ']
      ['o', ' ', ' ']
    ]

    state = ticTacToe.result state, [2, 1]
    assert.deepEqual state, [
      [' ', ' ', ' ']
      ['x', 'x', ' ']
      ['o', 'o', ' ']
    ]

    assert not ticTacToe.terminalTest state
    assert.equal ticTacToe.utility(state), undefined

    state = ticTacToe.result state, [1, 2]
    assert.deepEqual state, [
      [' ', ' ', ' ']
      ['x', 'x', 'x']
      ['o', 'o', ' ']
    ]
    assert ticTacToe.terminalTest state
    assert.equal ticTacToe.utility(state), 1

#### MiniMax Algorithm

Confer section 5.2.1, p. 166.
[Pseudocode](https://github.com/aimacode/aima-pseudocode/blob/master/md/Minimax-Decision.md).

Changes to the pseudocode:
- A depth limit has been added (`Infinity` by default).
- `maximinDecision` has been added for player Min in analogy to `minimaxDecision` for player Max.
  This is applicable to zero-sum games only. Note that the terms 'maximin' and 'minimax' are generally used inconsistently.
- The notation is functional.


    export minimaxDecision = (game, state, limit = Infinity) ->
      game.actions state
        .map (action) ->
          action: action
          outcome: minValue game, (game.result state, action), limit - 1
        .reduce (current, next) ->
          if next.outcome > current.outcome
            next
          else
            current

    export maximinDecision = (game, state, limit = Infinity) ->
      game.actions state
        .map (action) ->
          action: action
          outcome: maxValue game, (game.result state, action), limit - 1
        .reduce (current, next) ->
          if next.outcome < current.outcome
            next
          else
            current

    maxValue = (game, state, limit) ->
      if game.terminalTest state
        game.utility state
      else
        if limit < 1
          game.heuristic state
        else
          game.actions state
            .reduce ((prev, current) ->
              Math.max prev, (minValue game, (game.result state, current), limit - 1)), -Infinity

    minValue = (game, state, limit) ->
      if game.terminalTest state
        game.utility state
      else
        if limit < 1
          game.heuristic state
        else
          game.actions state
            .reduce ((prev, current) ->
              Math.min prev, (minValue game, (game.result state, current), limit - 1)), Infinity

The `minimaxDecision` algorithm is tested at the end of the next section, together with the `alphaBetaSearch` algorithm.

#### Alpha-Beta Search

Confer section 5.3, p. 170. 
[Pseudocode](https://github.com/aimacode/aima-pseudocode/blob/master/md/Alpha-Beta-Search.md).

Changes to the pseudocode:
- A depth limit has been added (`Infinity` by default).
- `betaAlphaSearch` has been added for player Min in analogy to `alphaBetaSearch` for player Max.
  This is applicable to zero-sum games only.


    export alphaBetaSearch = (game, state, limit = Infinity) ->
      game.actions state
        .map (action) ->
          action: action,
          outcome: alphaBetaMinValue game, (game.result state, action), limit - 1, -Infinity, +Infinity
        .reduce (current, next) ->
          if next.outcome > current.outcome
            next
          else
            current

    export betaAlphaSearch = (game, state, limit = Infinity) ->
      game.actions state
        .map (action) ->
          action: action,
          outcome: alphaBetaMaxValue game, (game.result state, action), limit - 1, -Infinity, +Infinity
        .reduce (current, next) ->
          if next.outcome > current.outcome
            next
          else
            current

    alphaBetaMaxValue = (game, state, limit, alpha, beta) ->
      if game.terminalTest state
        game.utility state
      if limit < 1
        game.heuristic state
      v = -Infinity
      for action in game.actions state
        v = Math.max v, (alphaBetaMinValue game, (game.result state, action), limit, alpha, beta)
        if v >= beta
          v
        alpha = Math.max alpha, v
      v

    alphaBetaMinValue = (game, state, limit, alpha, beta) ->
      if game.terminalTest state
        game.utility state
      if limit < 1
        game.heuristic state
      v = +Infinity
      for action in game.actions state
        v = Math.min v, (alphaBetaMaxValue game, (game.result state, action), limit, alpha, beta)
        if v <= beta
          v
        alpha = Math.min alpha, v
      v
    #

    for algorithm in [minimaxDecision, alphaBetaSearch]
      state = [
        ['x', 'o', 'x']
        ['o', 'x', 'x']
        [' ', 'o', ' ']
      ]

      # player 2
      decision = algorithm ticTacToe, state
      state = ticTacToe.result state, decision.action
      assert.deepEqual state, [
        ['x', 'o', 'x']
        ['o', 'x', 'x']
        ['o', 'o', ' ']
      ]
      assert not ticTacToe.terminalTest state
      assert.equal ticTacToe.utility(state), undefined

      # player 1
      decision = algorithm ticTacToe, state
      state = ticTacToe.result state, decision.action
      assert.deepEqual state, [
        ['x', 'o', 'x']
        ['o', 'x', 'x']
        ['o', 'o', 'x']
      ]
      assert ticTacToe.terminalTest state
      assert.equal ticTacToe.utility(state), 1

## Constraint Satisfaction

Confer section 6.1, p. 202.

    export class ConstraintSatisfactionProblem extends SearchProblem
      constructor: ({ domains, constraints }) ->
        get = (pairList, key) ->
          pairList.find(([key2, value]) -> key == key2)[1]
        super
          initialState: []
          actions: (state) ->
            if state.length < domains.length
              domains[state.length][1]
                .map (value) ->
                  [domains[state.length][0], value]
            else
              []
          result: (state, action) -> [...state, action]
          stepCost: (state) -> 0
          goalTest: (state) ->
            state.length == domains.length and
            (domains.every ([varName, domain]) ->
              domain.some (v) ->
                deepEqual v, (get state, varName)) and
            constraints.every ([varList, constraint]) ->
              varList.every (vars) ->
                constraint \
                  ...vars.map (varName) ->
                    get state, varName
        @domains     = domains
        @constraints = constraints

      variables: ->
        @domains.keys()

      satisfied: (solution) ->
        @goalTest solution

#### Map Coloring Problem

Confer section 6.1.1, p. 203.

    export mapColoringProblem = new ConstraintSatisfactionProblem
      domains: ['WA', 'NT', 'Q', 'NSW', 'V', 'SA', 'T'] \
        .map (state) -> [state, ['red', 'green', 'blue'] ]
      constraints: [
        [
          [
            ['SA' , 'WA' ]
            ['SA' , 'NT' ]
            ['SA' , 'Q'  ]
            ['SA' , 'NSW']
            ['SA' , 'V'  ]
            ['WA' , 'NT' ]
            ['NT' , 'Q'  ]
            ['Q'  , 'NSW']
            ['NSW', 'V'  ]
          ]
          (a, b) -> a != b
        ]
      ]
    #

    state = mapColoringProblem.initialState
    assert.deepEqual state, []
    assert not mapColoringProblem.satisfied state
    assert.deepEqual (mapColoringProblem.actions state), [['WA', 'red'], ['WA', 'green'], ['WA', 'blue']]

    state = mapColoringProblem.result state, ['WA', 'red']
    assert.deepEqual state, [['WA', 'red']]
    assert not mapColoringProblem.satisfied state
    assert.deepEqual (mapColoringProblem.actions state), [['NT', 'red'], ['NT', 'green'], ['NT', 'blue']]

    state = mapColoringProblem.result state, ['NT', 'green']
    assert.deepEqual state, [['WA', 'red'], ['NT', 'green']]
    assert not mapColoringProblem.satisfied state
    assert.deepEqual (mapColoringProblem.actions state), [['Q', 'red'], ['Q', 'green'], ['Q', 'blue']]

    solution = [
      ['WA' , 'blue' ]
      ['NT' , 'green']
      ['Q'  , 'red'  ]
      ['NSW', 'green']
      ['V'  , 'red'  ]
      ['SA' , 'blue' ]
      ['T'  , 'red'  ]
    ]
    assert not mapColoringProblem.satisfied solution

    solution = [
      ['WA' , 'red' ]
      ['NT' , 'green']
      ['Q'  , 'red'  ]
      ['NSW', 'green']
      ['V'  , 'red'  ]
      ['SA' , 'green' ]
      ['T'  , 'red'  ]
    ]
    assert not mapColoringProblem.satisfied solution

    solution = [
      ['WA' , 'red'  ]
      ['NT' , 'green']
      ['Q'  , 'red'  ]
      ['NSW', 'green']
      ['V'  , 'blue' ]
      ['SA' , 'blue' ]
      ['T'  , 'red'  ]
    ]
    assert not mapColoringProblem.satisfied solution

    solution = [
      ['WA' , 'red'  ]
      ['NT' , 'green']
      ['Q'  , 'red'  ]
      ['NSW', 'green']
      ['V'  , 'red'  ]
      ['SA' , 'blue' ]
      ['T'  , 'red'  ]
    ]
    assert mapColoringProblem.satisfied solution

    assert.deepEqual (depthFirstSearch mapColoringProblem).state, [
      ['WA' , 'blue' ]
      ['NT' , 'green']
      ['Q'  , 'blue' ]
      ['NSW', 'green']
      ['V'  , 'blue' ]
      ['SA' , 'red'  ]
      ['T'  , 'blue' ]
    ]

#### Constraint-Satisfaction 8-Queens Problem

Constraint-satisfaction formulation of the eight-queens problem.
Confer section 6.1.3, p. 205.

    queens = [0, 1, 2, 3, 4, 5, 6, 7]
    attacks = ([y1, x1], [y2, x2]) -> 
      y1 == y2 or
      x1 == x2 or
      y2 - y1 == x2 - x1

    export constraintSatisfactionEightQueensProblem = new ConstraintSatisfactionProblem
      domains: queens.map (queen) -> [
        queen
        [0, 1, 2, 3, 4, 5, 6, 7].flatMap (y) ->
          [0, 1, 2, 3, 4, 5, 6, 7].map (x) ->
            [y, x]
      ]
      constraints: [
        [
          queens.flatMap (queen1) ->
            queens
              .filter (queen2) -> queen1 != queen2
              .map (queen2) -> [queen1, queen2]
          (a, b) -> not attacks a, b
        ]
      ]
    #

    solution = [
      [1, 0, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 0, 1]
      [0, 0, 0, 0, 1, 0, 0, 0]
      [0, 0, 0, 0, 0, 1, 0, 0]
      [0, 0, 1, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 1, 0]
      [0, 1, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 1, 0, 0, 0, 0]
    ].map (row, y) -> [y, [y, row.findIndex (x) -> x == 1] ]
    assert not constraintSatisfactionEightQueensProblem.satisfied solution

    solution = [
      [1, 0, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 1, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 0, 1]
      [0, 0, 0, 0, 0, 1, 0, 0]
      [0, 0, 1, 0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0, 0, 1, 0]
      [0, 1, 0, 0, 0, 0, 0, 0]
      [0, 0, 0, 1, 0, 0, 0, 0]
    ].map (row, y) -> [y, [y, row.findIndex (x) -> x == 1] ]
    assert constraintSatisfactionEightQueensProblem.satisfied solution

#### Node Consistency

Confer section 6.2.1, p. 208.

    export makeNodeConsistent = (problem) ->
      new ConstraintSatisfactionProblem
        domains: problem.domains.map ([varName, domain]) ->
          [
            varName,
            domain.filter (value) ->
              applicableUnaryConstraints problem.constraints, varName
                .every ([varList, constraintFunc]) ->
                  constraintFunc value
          ]
        constraints: nonUnaryConstraints problem.constraints

    applicableUnaryConstraints = (constraints, varName) ->
      unaryConstraints constraints
        .filter (constraint) ->
          constraint[0].some (varName2) ->
            varName2 == varName

    unaryConstraints = (constraints) ->
      constraints.filter (constraint) -> constraint[1].length == 1

    nonUnaryConstraints = (constraints) ->
      constraints.filter (constraint) -> constraint[1].length > 1
    #

    problem = new ConstraintSatisfactionProblem
      domains: [
        ['Northern Australia', ['red', 'blue', 'green'] ]
        ['Southern Australia', ['red', 'blue', 'green'] ]
      ]
      constraints: [
        [['Northern Australia', 'Southern Australia'], (a, b) -> a != b]
        [['Southern Australia'], (a) -> a != 'green']
      ]

    problem = makeNodeConsistent problem
    assert.deepEqual problem.domains, [
      ['Northern Australia', ['red', 'blue', 'green']]
      ['Southern Australia', ['red', 'blue']]
    ]

## Logic

The following syntax of propositional logic is currently used (in deviation from the book syntax).
It would be desirable to refactor the syntax to match the book.
- Operator symbols: `~`, `&`, `|`, `>`, `=`
- Truth symbols: `T`, `F`
- Compulsory brackets around each expression. This is pretty ugly.

Confer section 7.4.1, p. 244.

#### Syntax of Propositional Logic

    export plParse = (sentence, vars) ->
      recursiveParse sentence.split(''), vars

    unaryOperators  = ['~']
    binaryOperators = ['&', '|', '>', '=']
    operators       = [...unaryOperators, ...binaryOperators]

    recursiveParse = (sentence, vars) ->
      if (levels sentence)[sentence.length - 1] == 0 and
      sentence[0] == '(' and
      sentence[sentence.length - 1] == ')'
        if (levels sentence).some (level) -> level > 1
          if (operatorIndex sentence) > -1
            [
              (sentence.slice (operatorIndex sentence), (operatorIndex sentence) + 1)[0],
              ...if not unaryOperators.includes sentence[operatorIndex sentence]
                [recursiveParse (sentence.slice 1, operatorIndex sentence), vars]
              else
                []
              recursiveParse (sentence.slice (operatorIndex sentence) + 1, -1)
            ]
          else
            recursiveParse sentence.slice 1, -1
        else if operators.some (operator) -> sentence.includes operator
          'ERROR'
        else if sentence.length == 3 and sentence[1] == 'T'
          true
        else if sentence.length == 3 and sentence[1] == 'F'
          false
        else if typeof vars == 'undefined' or
        vars.includes (sentence.slice 1, -1).join ''
          (sentence.slice 1, -1).join ''
        else
          'UNDEFINED'
      else
        'ERROR'

    levels = (sentence) ->
      sentence
        .map (char) ->
          if char == '('
            1
          else if char == ')'
            -1
          else
            0
        .reduce ((prev, derivation) -> [
          ...prev,
          prev[prev.length - 1] + derivation
        ]), [0]
        .slice(1)

    operatorIndex = (sentence) ->
      sentence.findIndex (char, i) ->
        (levels sentence)[i] == 1 and operators.includes char
    #

    for [proposition, syntax] in [
      [ [ 'A'                   ], 'ERROR'                            ]
      [ [ '(A'                  ], 'ERROR'                            ]
      [ [ 'A)'                  ], 'ERROR'                            ]
      [ [ '(A)', ['B']          ], 'UNDEFINED'                        ]
      [ [ '(A)', ['A']          ], 'A'                                ]
      [ [ '(A)'                 ], 'A'                                ]
      [ [ '(T)'                 ], true                               ]
      [ [ '(F)'                 ], false                              ]
      [ [ '((A))'               ], 'A'                                ]
      [ [ '(((A)))'             ], 'A'                                ]
      [ [ '~(A)'                ], 'ERROR'                            ]
      [ [ '(~A)'                ], 'ERROR'                            ]
      [ [ '(~(A))'              ], ['~', 'A']                         ]
      [ [ '((A)&(B))'           ], ['&', 'A', 'B']                    ]
      [ [ '((A)|(B))'           ], ['|', 'A', 'B']                    ]
      [ [ '((A)>(B))'           ], ['>', 'A', 'B']                    ]
      [ [ '((A)=(B))'           ], ['=', 'A', 'B']                    ]
      [ [ '((~(A))&(B))'        ], ['&', ['~', 'A'], 'B']             ]
      [ [ '((A)&(~(B)))'        ], ['&', 'A', ['~', 'B']]             ]
      [ [ '(((A)|(B))&(~(C)))'  ], ['&', ['|', 'A', 'B'], ['~', 'C']] ]
      [ [ '(((A)|(B)&(~(C)))'   ], 'ERROR'                            ]
      [ [ '((A)|(B))&(~(C)))'   ], 'ERROR'                            ]
      [ [ '(((A)|(B)))&(~(C)))' ], 'ERROR'                            ]
      [ [ '(((A)|(B))&(~(C))))' ], 'ERROR'                            ]
    ]
      assert.deepEqual (plParse ...proposition), syntax
