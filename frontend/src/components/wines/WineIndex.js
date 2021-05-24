import React from 'react'
import axios from 'axios'
import WineCard from './WineCard'
import LoadingSpinner from '../common/LoadingSpinner'



function WinesIndex() {
  const [wines, setWines] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [term, setTerm] = React.useState('')


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('./api/wines')
        setWines(data.sort((a, b) => a.country.localeCompare(b.country)))
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  
  return (
    <div className="container mx-auto">
      {isLoading ? <div className="mx-auto"><LoadingSpinner /></div> :
        <div className="grid grid-cols-3 gap-4">{wines.map(wine => <WineCard key={wine.name} {...wine}/> )} </div>
      }
    </div>
    
  )

}

export default WinesIndex







