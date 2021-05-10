import React from 'react'
import axios from 'axios'

class App extends React.Component {

  async componentDidMount() {
    try {
      const res = await axios.get('/api/wines')
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    return (
      <h1>Hello World</h1>
    )
  }

}

export default App
