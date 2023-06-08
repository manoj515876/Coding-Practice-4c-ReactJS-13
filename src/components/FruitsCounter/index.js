// Write your code here

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}
  mango = () => {
    this.setState(preState => {
      return {count1: preState.count1 + 1}
    })
  }
  banana = () => {
    this.setState(preState => {
      return {count2: preState.count2 + 1}
    })
  }
  render() {
    const {count1, count2} = this.state
    return (
      <div>
        <div>
          <h1 className="heading">
            Bob ate {count1} mangoes {count2} bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div>
            <button className="button" onClick={this.mango}>
              Eat Mango
            </button>
            <button className="button" onClick={this.banana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
