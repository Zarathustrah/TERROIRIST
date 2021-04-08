import React from 'react'
import { getSingleMeme } from '../lib/api'

class MemeShow extends React.Component {

  state = {
    meme: null
  }

  async componentDidMount() {
    const memeID = this.props.id
    try {
      const res = await getSingleMeme(memeID)
      this.setState({ meme: res.data })
    } catch (err) {
      console.log(err)
    }

  }



  render() {
    const { meme } = this.state
    return (
      <div>{meme.url}</div>
    )
  }
}

export default MemeShow