import React from 'react'
import { getSingleWine } from '../../lib/api'
import { Redirect, useParams } from 'react-router-dom'
import useFetch from '../../utils/useFetch'

import PageContainer from '../../components/common/PageContainer'
import LoadingSpinner from '../common/LoadingSpinner'



const WineShow = () => {
  const { id } = useParams() 
  const { data: wine, isLoading, error } = useFetch(getSingleWine, id)

  if (error) {
    return <Redirect to="not-found"/>
  }


  return (
    <PageContainer>
      {isLoading ? <LoadingSpinner/> : 
        <>
          <img src={wine.image} alt={wine.name} className="w-full"/>
          <div>{wine.name}</div> 
          <div>{wine.producer}</div>
          <div>{wine.vintage}</div>
          <div>{wine.country}</div>
          <div>{wine.description}</div>    
        </>
      }     
    </PageContainer>
  )
}
  


export default WineShow