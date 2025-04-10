import React from 'react'

function CreateTicket() {
  return (
    <>
    <h3 className='text-center'>Support To create a ticket, select a relevant topic
    </h3>
    <div className="row my-5">
      <div className="col-sm-4">
        <ul type="none" className='text-primary'>
        <h5 className='text-black'><i className="fa-solid fa-plus"></i> Account Opening</h5>
          <li>Resident individual</li>
          <li>Minor</li>
          <li>Non Resident indian(NRI)</li>
          <li>Company, Partnership, HUF and LLP</li>
          <li>Glossary</li>
        </ul>
      </div>
      <div className="col-sm-4">
        <ul type="none" className='text-primary'>
        <h5 className='text-black'><i className="fa-solid fa-user"></i> Your Zerodha Account</h5>
          <li>Your Profile</li>
          <li>Account Modification</li>
          <li>Client Master Report (CMR) and Depository Participant (DP)</li>
          <li>Nomination</li>
          <li>Transfer and conversion of securities</li>
        </ul>
      </div>
      <div className="col-sm-4">
        <ul type="none" className='text-primary'>
        <h5 className='text-black'><i className="fa-solid fa-chart-simple"></i> Kite</h5>
          <li>IPO</li>
          <li>Trading FAQs</li>
          <li>Margin Trading Facility (MTF) and Margins</li>
          <li>Charts and orders</li>
          <li>Alerts and Nudges</li>
        </ul>
      </div>
    </div>
    <div className="row my-5">
      <div className="col-sm-4">
      <ul type="none" className='text-primary'>
        <h5 className='text-black'><i className="fa-solid fa-credit-card"></i> Funds</h5>
          <li>Add Money</li>
          <li>Withdraw Money</li>
          <li>Add bank accounts</li>
          <li>eMandates</li>
        </ul>
      </div>
      <div className="col-sm-4">
      <ul type="none" className='text-primary'>
        <h5 className='text-black'><i className="fa-solid fa-envelopes-bulk"></i> Console</h5>
          <li>Portfolio</li>
          <li>Corporate actions</li>
          <li>Funds statements</li>
          <li>Reports</li>
          <li>Profile</li>
          <li>Segments</li>
        </ul>
      </div>
      <div className="col-sm-4">
      <ul type="none" className='text-primary'>
        <h5 className='text-black'><i className="fa-solid fa-coins"></i> Coin</h5>
          <li>Understanding mutual funds and Coin</li>
          <li>Coin app</li>
          <li>Coin web</li>
          <li>Transactions and reports</li>
          <li>National Pension Scheme (NPS)</li>
        </ul>
      </div>
    </div>
    </>
    
  )
}

export default CreateTicket
