import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"


const LoadingSpinner = () => (
  <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        margin={'0, auto'}
      />

)

export default LoadingSpinner