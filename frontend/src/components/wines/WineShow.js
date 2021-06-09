import React from 'react'
import { getSingleWine } from '../../lib/api'
import { Redirect, useParams } from 'react-router-dom'
import useFetch from '../../utils/useFetch'

import PageContainer from '../../components/common/PageContainer'
import LoadingSpinner from '../common/LoadingSpinner'



const WineShow = () => {
  const { id } = useParams() 
  console.log(id)
  const { data: wine, isLoading, error } = useFetch(getSingleWine, id)

  if (error) {
    return <Redirect to="not-found"/>
  }

  console.log(wine)
  return (
    <PageContainer>
      {isLoading ? <LoadingSpinner/> : <h1>{wine.name}</h1> }     
    </PageContainer>
  )
}
  


export default WineShow