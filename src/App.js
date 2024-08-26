import React from 'react'
import Matrix from './components/matrix'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Interactive 3x3 Matrix</h1>
        <Matrix />
      </div>
    )
  }
}

export default App
