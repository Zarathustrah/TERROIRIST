import React from 'react'
import Navbar from './Navbar'
import Hero from '../../assets/Hero.jpg'

function Home() {
  return (
    <div className="min-h-full bg-gray-100 font-body">
      <div className="h-screen flex flex-col">
        <Navbar />
        <div
          className="
            relative flex items-center justify-center h-full
            bg-no-repeat bg-cover bg-center bg-fixed          
          "
          style={{
            backgroundImage: `url(${Hero})`,
          }}
        >
          <h1 className="text-white uppercase text-xl md:text-9xl">terroirista</h1>
        </div>
      </div>
    </div>
  )
}
 


export default Home