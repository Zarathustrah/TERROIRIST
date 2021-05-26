import React from 'react'
import axios from 'axios'
import WineCard from './WineCard'
import WineSearch from '../common/WineSearch'
import LoadingSpinner from '../common/LoadingSpinner'




const WinesIndex = () => {
  const [wines, setWines] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [filteredWines, setFilteredWines] = React.useState([])


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

  React.useEffect(() => {
    setFilteredWines(
      wines.filter(wine => {
        if (searchTerm === '') {
          return wine
        } else if (Object.values(wine)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) {
          return wine
        }
      })
    )
  }, [searchTerm, wines])



  return (
    <div className="mx-auto">
      <WineSearch searchText={(text) => setSearchTerm(text)}/>

      {!isLoading && filteredWines.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No wines found</h1>}

      {isLoading ? <LoadingSpinner /> :
        <div className="grid grid-cols-3 gap-3">{filteredWines.map(wine => <WineCard key={wine.name} {...wine}/> )}</div> 
      } 
    </div>
    
  )

}

export default WinesIndex







