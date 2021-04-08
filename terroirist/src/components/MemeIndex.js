import React from 'react'
import axios from 'axios'


class MemeIndex extends React.Component {

  state = {
    memes: []
  }
  
  async componentDidMount() {


    try {
      const res = await axios.get('https://api.imgflip.com/get_memes')  
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
              <div key={meme._id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-header-title">{meme.name}</h4>
                  </div>
                  <div className="card-image">
                    <figure className="image image is-1by1">
                      <img src={meme.url} alt={meme.name} loading="lazy" width="255" height="255" />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

}

export default MemeIndex