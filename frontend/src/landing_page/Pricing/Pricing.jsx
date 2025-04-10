import React from 'react'

function Pricing() {
  return (
    <div className="row">
      <div className="col-sm-12 text-center my-5">
        <h1>Charges</h1>
        <p className='fs-4'>List of all charges and taxes</p>
      </div>
      <div className="col-sm-4 text-center">
        <div className='p-4'>
        <img src='img/pricingMF.svg' className='img-fluid' alt='pricingMF'/>
        <h2>Free equity delivery</h2>
        <p className='mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
      </div>
      <div className="col-sm-4 text-center">
        <div className='p-4'>
          <img src='img/intradayTrades.svg' className='img-fluid' alt='intradayTrades'/>
          <h2>Intraday and F&O trades</h2>
          <p className='mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
      </div>
      <div className="col-sm-4 text-center">
        <div className='p-4'>
        <img src='img/pricingMF.svg' className='img-fluid' alt='pricingMF'/>
        <h2>Free Direct MF</h2>
        <p className='mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
