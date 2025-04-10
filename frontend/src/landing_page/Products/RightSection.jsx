import React from 'react'

function RightSection({productImg, productName, productDescription, learnMore}) {
  return (
    <div className="row">
      <div className="col-sm-6 my-auto">
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        <a href={learnMore} className='nav-link text-primary'>Learn More &rarr;</a>
      </div>
      <div className="col-sm-6">
        <img src={productImg} className='img-fluid'/>
      </div>
    </div>
  )
}

export default RightSection
