import React from 'react'
import {Link} from "react-router-dom"
function Hero() {
  return (
    <div className="row">
      <div className="col-12 text-center">
          <img src="img/homeHero.png" className='img-fluid ps-5 pe-5' alt='landing-image'/>
          <h1>Invest in everything</h1>
          <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <Link to='/signup' className='btn btn-primary ps-5 pe-5 rounded-1 fs-5'>Sign up for free</Link>
      </div>
    </div>
  )
}

export default Hero
