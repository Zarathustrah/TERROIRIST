import React from 'react'
import axios from 'axios'


class CheeseIndex extends React.Component {
  async componentDidMount() {
    try {
      const res = await axios.get('https://cheesebored.herokuapp.com/cheeses')  
      console.log(res)    
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <h1>Cheese Index</h1>
    )
  }

}

export default CheeseIndex