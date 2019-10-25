export class Node {
  constructor ({ state, parent, action, pathCost }) {
    this.state = state
    this.parent = parent
    this.action = action
    this.pathCost = pathCost
  }
}
