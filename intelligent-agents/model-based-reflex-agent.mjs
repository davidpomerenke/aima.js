export class ModelBasedReflexAgent {
  constructor (model = {}, rules = {}) {
    this.state = null
    this.model = model
    this.rules = rules
    this.action = null
  }

  action (percept) {
    this.state = ModelBasedReflexAgent.updateState(this.state, this.action, this.percept, this.model)
    const rule = ModelBasedReflexAgent.ruleMatch(this.state, this.rules)
    this.action = rule.action
    return this.action
  }

  updateState (state, action, percept, model) {
    this.state = model([state, action])
    // use percept to update state
    // ...
    return this.state
  }

  static ruleMatch (state, rules) {
    for (const rule of rules) {
      if (rule.condition(...state)) return rule
    }
    // fallback if no rule applies
    return { action: undefined }
  }
}
