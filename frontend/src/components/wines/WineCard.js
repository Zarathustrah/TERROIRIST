import React from 'react'
import { Link } from 'react-router-dom'

const WineCard = ({ name, producer, vintage, image, country, _id }) => {
  
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
      <Link to={`/wines/${_id}`}>
        <img src={image} alt={name} className="w-full"/>
        <h3>{name}<br/>{producer}</h3>
        <p>{vintage}</p> 
        <p>{country}</p>
      </Link>
    </div> 
  )    
}

export default WineCard