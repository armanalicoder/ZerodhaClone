import React from 'react'

function OpendematAccount() {
  return (
    <div className="row p-5">
      <div className="col-sm-12 text-center p-5">
        <h2>Steps to open a demat account with Zerodha</h2>
      </div>
      <div className="col-sm-6">
      <img src='img/steps-acop.svg' className='img-fluid' alt='open-demat-account'/>
      </div>
      <div className="col-sm-6 my-auto">
        <div className='d-flex'>
          <div className='border border-1 rounded-pill p-2'>01</div>
          <p className='my-auto fs-4 ms-4'>Enter the requested details </p>
        </div><hr/>
        <div className='d-flex my-4'>
          <div className='border border-1 rounded-pill p-2'>02</div>
          <p className='my-auto fs-4 ms-4'>Complete e-sign & verification </p>
        </div><hr/>
        <div className='d-flex'>
          <div className='border border-1 rounded-pill p-2'>03</div>
          <p className='my-auto fs-4 ms-4'>Start investing!</p>
        </div>
      </div>
    </div>
  )
}

export default OpendematAccount
