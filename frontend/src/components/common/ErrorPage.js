import React from 'react'
import Navbar from './Navbar'

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl text-center mx-auto mt-32">Something went wrong. Please try again.</h1>
    </div>
    
  )
}

export default ErrorPage