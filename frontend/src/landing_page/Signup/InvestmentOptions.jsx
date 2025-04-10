import React from 'react'

function InvestmentOptions() {
  return (
    <div className="row my-4">
      <div className="col-sm-12 text-center p-5">
        <h2>Investment options with Zerodha demat account</h2>
      </div>
      <div className="col-sm-6 p-3">
        <div className='d-flex justify-content-start'>
          <div>
            <img src='img/stocks-acop.svg' className='img-fluid'/>
          </div>
          <div className='ms-3'>
            <h3>Stocks</h3>
            <p>Invest in all exchange-listed securities</p>
          </div>
        </div>
        <div className='d-flex justify-content-start my-5'>
          <div>
          <img src='img/ipo-acop.svg' className='img-fluid'/>
          </div>
        <div className='ms-3'>
        <h3>IPO</h3>
        <p>Apply to the latest IPOs instantly via UPI</p>
        </div>
          
        </div>
      </div>
      <div className="col-sm-6 p-3">
      <div className='d-flex justify-content-start'>
          <div>
            <img src='img/mf-acop.svg' className='img-fluid'/>
          </div>
          <div className='ms-3'>
            <h3>Mutual funds</h3>
            <p>Invest in commission-free direct mutual funds</p>
          </div>
        </div>
        <div className='d-flex justify-content-start my-5'>
          <div>
          <img src='img/fo-acop.svg' className='img-fluid'/>
          </div>
        <div className='ms-3'>
        <h3>Futures & options</h3>
        <p>Hedge and mitigate market risk through simplified F&O trading</p>
        </div>
        </div>
      </div>
      <div className="col-sm-12 text-center">
        <button className='btn btn-primary btn-lg ps-5 pe-5'>Explore Investments</button>
      </div>
    </div>
  )
}

export default InvestmentOptions
