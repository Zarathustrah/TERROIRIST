import React from 'react'
import axios from 'axios'

function WinesIndex() {
  const [wines, setWines] = React.useState([])


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('./api/wines')
        setWines(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  


  console.log(wines)
  return (
    <h1>WineIndex: </h1>
  )

}

export default WinesIndex

// class WineIndex extends React.Component {

//   state = {
//     wines: [],
//   }


//   async componentDidMount() {
//     try {
//       const res = await axios.get('/api/wines')
//       this.setState({ wines: res.data })
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   render() {
//     console.log(this.state.wines)
//     return (
//       <h1>Wine Index Page</h1>
//     )
//   }
// }

// export default WineIndex






