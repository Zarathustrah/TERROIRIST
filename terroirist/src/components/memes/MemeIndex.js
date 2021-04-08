import React from 'react'
import axios from 'axios'

import MemeCard from './MemeCard'


class MemeIndex extends React.Component {

  state = {
    memes: []
  }
  
  async componentDidMount() {


    try {
      const res = await axios.get('https://api.imgflip.com/get_memes')  
      this.setState({ memes: res.data.data.memes })
      console.log(res)    
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
              console.log(<MemeCard key={meme.id} {...meme}/>)
            ))}
          </div>
        </div>
      </section>
    )
  }

}

export default MemeIndex