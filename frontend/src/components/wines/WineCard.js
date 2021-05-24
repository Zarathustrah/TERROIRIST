import React from 'react'

const WineCard = ({ name, producer, vintage, image, country }) => (
  <div className="max-w-sm overflow-hidden rounded shadow-lg ">
    <img src={image} alt={name} className="w-full"/>
    <h3>{producer}<br/>{name}</h3>
    <p>{vintage}</p> 
    <p>{country}</p>
  </div>   
)  

export default WineCard