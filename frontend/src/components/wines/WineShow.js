import React from 'react'
import { getSingleWine } from '../../lib/api'
import { Redirect, useParams } from 'react-router-dom'
import useFetch from '../../utils/useFetch'

import LoadingSpinner from '../common/LoadingSpinner'



const WineShow = () => {
  const { id } = useParams() 
  const { data: wine, isLoading, error } = useFetch(getSingleWine, id)

  if (error) {
    return <Redirect to="not-found"/>
  }







}
  


export default WineShow