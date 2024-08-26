import React, {Component} from 'react'
import './index.css'

class Matrix extends Component {
  state = {
    colors: Array(9).fill('white'), // Initial colors of the 3x3 grid
    clickOrder: [], // To keep track of the order of clicks
  }

  handleClick = index => {
    const {colors, clickOrder} = this.state

    if (colors[index] === 'white') {
      // Change color to green when clicked
      const newColors = [...colors]
      newColors[index] = 'green'

      // Update state with new colors and order of clicks
      this.setState({
        colors: newColors,
        clickOrder: [...clickOrder, index],
      })

      // If it's the last box click, change all colors to orange in click order
      if (clickOrder.length === 8) {
        this.changeAllToOrange([...clickOrder, index])
      }
    }
  }

  changeAllToOrange = order => {
    order.forEach((i, idx) => {
      setTimeout(() => {
        const newColors = [...this.state.colors]
        newColors[i] = 'orange'
        this.setState({colors: newColors})
      }, idx * 300) // Delay for each change
    })
  }

  render() {
    return (
      <div className="matrix">
        {this.state.colors.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{backgroundColor: color}}
            onClick={() => this.handleClick(index)}
          ></div>
        ))}
      </div>
    )
  }
}

export default Matrix
