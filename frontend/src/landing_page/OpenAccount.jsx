import React from 'react'
import { Link } from 'react-router-dom'

function OpenAccount() {
  return (
   <div className="row my-3">
    <div className="col-sm-12 text-center p-5">
      <h4 className='fs-1'>Open a Zerodha account</h4>
      <p className='fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
      <Link to="/signup" className='btn btn-primary ps-5 pe-5 fs-5'>Sign up for free</Link>
    </div>
   </div>
  )
}

export default OpenAccount
