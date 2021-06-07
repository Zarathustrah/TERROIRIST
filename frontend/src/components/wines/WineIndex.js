import React from 'react'
import { getAllWines } from '../../lib/api'
import WineCard from './WineCard'
import WineSearch from '../common/WineSearch'
import LoadingSpinner from '../common/LoadingSpinner'
import { Redirect } from 'react-router-dom'


const WinesIndex = () => {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [filteredWines, setFilteredWines] = React.useState([])
  const [error, setError] = React.useState(false)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllWines()
        setData(data.sort((a, b) => a.country.localeCompare(b.country)))
        setIsLoading(false)
      } catch (err) {
        setError(err)
      }
    }
    getData()
  }, [])

  React.useEffect(() => {
    setFilteredWines(
      data.filter(wine => {
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
  }, [searchTerm, data])

  if (error) {
    return <Redirect to="not-found"/>
  }

  console.log(error)

  return (
    <div className="mx-auto">
      <WineSearch 
        searchText={(text) => setSearchTerm(text)}
      />

      {!isLoading && filteredWines.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No wines found</h1>}

      {isLoading ? <LoadingSpinner /> :
        <div className="grid grid-cols-3 gap-3">{filteredWines.map(wine => <WineCard key={wine.name} {...wine}/> )}</div> 
      } 
    </div>
    
  )

}

export default WinesIndex







