export class TableDrivenAgent {
  constructor (table = {}) {
    this.percepts = []
    this.table = table
  }

  action (percept) {
    this.percepts.push(percept)
    const action = this.table[this.percepts]
    return action
  }
}
