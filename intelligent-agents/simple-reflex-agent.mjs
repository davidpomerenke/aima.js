export class SimpleReflexAgent {
  constructor (rules) {
    this.rules = rules
  }

  action (percept) {
    const state = this.interpretInput(percept)
    const rule = this.rules.find(rule => rule.condition(...state))
    const action = rule ? rule.action : undefined
    return action
  }

  interpretInput (percept) {
    return percept
  }
}
