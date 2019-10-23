import { Agent } from './agent.mjs'

export class SimpleReflexAgent extends Agent {
  constructor (rules) {
    super()
    this.rules = rules
  }

  action (percept) {
    const state = this.interpretInput(percept)
    const rule = SimpleReflexAgent.ruleMatch(state, this.rules)
    const action = rule.action
    return action
  }

  interpretInput (percept) {
    return percept
  }

  static ruleMatch (state, rules) {
    for (const rule of rules) {
      if (rule.condition(...state)) return rule
    }
    // fallback if no rule applies
    return { action: undefined }
  }
}

export const reflexVacuumAgent = new SimpleReflexAgent([
  {
    condition: ([_location, status]) => status === 'dirty',
    action: 'suck'
  },
  {
    condition: ([location, _status]) => location === 'A',
    action: 'right'
  },
  {
    condition: ([location, _status]) => location === 'B',
    action: 'left'
  }
])
