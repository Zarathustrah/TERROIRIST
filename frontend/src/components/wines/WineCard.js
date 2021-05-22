import React from 'react'

const WineCard = ({ name, producer, vintage, image }) => (
  <div className="grid grid-cols-4">
    <div className="bg-blue-100 gap-y-12">
      <img src={image} alt={name} width="100" height="130"/>
      <h3>{producer}<br/>{name}</h3>
      <p>{vintage}</p>
    </div>   
  </div>
)

export default WineCard