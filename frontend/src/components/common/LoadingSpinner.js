import React from 'react'
import '../../styles/loadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className="loader">
      <ul>
        <li className="text-9xl"></li>
        <li></li>
        <li></li>
      </ul>
      <div className="wineglass left">
        <div className="top"></div>
      </div>
      <div className="wineglass right">
        <div className="top"></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
