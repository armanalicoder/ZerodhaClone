import React from 'react'
import {Link} from "react-router-dom";
function Pricing() {
  return (
   <div className="row">
    <div className="col-sm-6">
      <h2>Unbeatable pricing</h2>
      <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
      <Link to='/pricing' className='nav-link text-primary'>See pricing &rarr;</Link>
    </div>
    <div className="col-sm-6 d-flex">
      <div className="col-sm-4 d-flex flex-column text-center">
        <img src='img/pricing0.svg' className='img-fluid'/>
        <p>Free Account Opening</p>
      </div>
      <div className='col-sm-4 text-center'>
        <img src='img/pricing0.svg'  className='img-fluid'/>
        <p>Free equity delivery<br/>
        and direct mutual funds</p>
      </div>
      <div className='col-sm-4 text-center'>
        <img src='img/intradayTrades.svg' className='img-fluid'/>
        <p>Intraday and F&O</p>
      </div>
    </div>
   </div>
  )
}

export default Pricing
