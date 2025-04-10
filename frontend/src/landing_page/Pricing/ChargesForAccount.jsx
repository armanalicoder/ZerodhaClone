import React from "react";

function ChargesForAccount() {
  return (
    <div className="row">
      <h4 class="mb-3">Charges for account opening</h4>
      <div className="col-sm-12 p-3">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td>
              <span class="badge bg-success">FREE</span>
            </td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td>
              <span class="badge bg-success">FREE</span>
            </td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>
  );
}

export default ChargesForAccount;
