import React from 'react'
import { getAllWines } from '../../lib/api'
import { Redirect } from 'react-router-dom'
import WineCard from './WineCard'
import WineSearch from '../common/WineSearch'
import LoadingSpinner from '../common/LoadingSpinner'
import Footer from '../common/Footer'
// import PageContainer from '../../components/common/PageContainer'



const WinesIndex = () => {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [filteredWines, setFilteredWines] = React.useState([])
  const [error, setError] = React.useState(null)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllWines()
        setData(data)
        data.sort((a, b) => a.country.localeCompare(b.country))
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

  return (
    //!DEBUG LOADING SPINNER SCREEN POSITION
    <div className="w-full max-w-full mx-auto"> 
      <WineSearch 
        searchText={(text) => setSearchTerm(text)}
      />
      <div className="w-full max-w-7xl mx-auto">
        {!isLoading && filteredWines.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No wines found</h1>}

        {isLoading ? <LoadingSpinner /> :
          <div className="m-8">
            <div className="grid grid-cols-3 gap-32">{filteredWines.map(wine => <WineCard key={wine._id} {...wine}/> )}</div> 
          </div>        
        } 
      </div>
      <Footer />
    </div>
  )
}

export default WinesIndex







