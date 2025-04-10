import React from 'react'
import {Link} from "react-router-dom"
function Hero() {
  return (
    <div className="row">
      <div className="col-sm-12 p-5">
        <div className='text-center'>
        <h1>Zerodha Products</h1>
        <p>Sleek, modern, and intuitive trading platforms</p>
        <p>Check out our <Link to="/" className='text-primary'>investment offerings →</Link></p>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Hero
