import React from 'react'

function ChargesForOptionvalue() {
  return (
    <div className="row">
      <h4 className="mb-3">Charges for optional value added services</h4>
      <div className="col-sm-12 p-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Service</th>
            <th>Billing Frquency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 2000 | Historical: 2000</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>
  )
}

export default ChargesForOptionvalue
