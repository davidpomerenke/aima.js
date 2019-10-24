export class SimpleProblemSolvingAgent {
  constructor (problem) {
    this.problem = problem
    this.seq = []
    this.state = null
    this.goal = null
  }

  action (percept) {
    this.state = SimpleProblemSolvingAgent.updateState(this.state, percept)
    if (this.seq.length === 0) {
      this.goal = this.formulateGoal(this.state)
      this.problem = this.formulateProblem(this.state, this.goal)
      this.seq = this.search(this.problem)
      if (this.seq === 'failure') return null
    }
    const [action, ...rest] = this.seq
    this.seq = rest
    return action
  }

  formulateGoal (state) {
    return null
  }

  formulateProblem (state, goal) {
    return null
  }

  search (problem) {
    return null
  }
}
