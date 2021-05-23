import React from 'react'

const WineCard = ({ name, producer, vintage, image }) => (
  <div className="max-w-sm overflow-hidden rounded shadow-lg mb-2">
    <img src={image} alt={name} className="w-full"/>
    <h3>{producer}<br/>{name}</h3>
    <p>{vintage}</p> 
  </div>   
)  

export default WineCard