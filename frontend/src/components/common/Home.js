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
          <div>
            
          </div>
          <h1 className="font-rock z-10 relative text-white text-xl md:text-9xl">Terroirista</h1>
          <div
            className="
              z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40
            "          
          />
        </div>
      </div>
    </div>
  )
}



export default Home