import React from 'react'
import axios from 'axios'

class WineIndex extends React.Component {

  state = {
    wines: [],
  }


  async componentDidMount() {
    try {
      const res = await axios.get('/api/wines')
      this.setState({ wines: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state.wines)
    return (
      <h1>Wine Index Page</h1>
    )
  }
}

export default WineIndex






