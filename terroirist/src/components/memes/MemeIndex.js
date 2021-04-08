import React from 'react'
import { getAllMemes } from '../lib/api'

import MemeCard from './MemeCard'


class MemeIndex extends React.Component {

  state = {
    memes: []
  }
  
  async componentDidMount() {


    try {
      const res = await getAllMemes()  
      this.setState({ memes: res.data.data.memes })
      // console.log(res)    
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    // console.log(this.state.memes)
    return (
        <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.memes.map(meme => (
              <MemeCard key={meme.id} {...meme}/>
            ))}
            {console.log(this.state.memes)}
          </div>
        </div>
      </section>
    )
  }

}

export default MemeIndex