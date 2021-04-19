import React from 'react'
import { getSingleMeme } from '../lib/api'

class MemeShow extends React.Component {

  state = {
    meme: null
  }

  async componentDidMount() {
    const memeID = this.props.url
    try {
      const res = await getSingleMeme(memeID)
      this.setState({ meme: res.data.data.memes.url })
    } catch (err) {
      console.log(err)
    }

  }



  render() {
    const { meme } = this.state
    return (
      <>
      <div>{meme}</div>
      {console.log('hello')}
      </>

    )
  }
}

export default MemeShow