import React from 'react'

function Education() {
  return (
   <div className="row my-5">
    <div className="col-sm-6 mb-3 p-3">
      <img src='img/education.svg' className='img-fluid p-3' alt='education-logo'/>
    </div>
    <div className="col-sm-6 my-auto">
      <h2>Free and open market education</h2>
      <div className='my-2'>
        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a href='/' className='nav-link text-primary lh-5'>Varsity &rarr;</a>
      </div>
      <div>
        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        <a href='/' className='nav-link text-primary'>TradingQ&A &rarr;</a>
      </div>
      
    </div>
   </div>
  )
}

export default Education
