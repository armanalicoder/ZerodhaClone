import React from "react";
import {Link} from "react-router-dom"
function People() {
  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <h1>People</h1>
      </div>
      <div className="col-sm-6 p-5 text-center">
        <img
          src="img/nithinKamath.jpg"
          className="img-fluid rounded-pill p-5"
        />
        <h5 className="lh-1">Nithin Kamath</h5>
        <p>Founder & CEO</p>
      </div>
      <div className="col-sm-6 my-auto fs-5 p-5">
        <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry.
        </p>
        <p>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
          and the Market Data Advisory Committee (MDAC).
        </p>
        <p>Playing basketball is
        his zen.</p>
        {/* <p className="d-flex">Connect on <Link to="/" className="ms-2 nav-link text-primary">Homepage /</Link><Link to="/trading" className="ms-2 nav-link text-primary">TradingQnA /</Link><Link to="/twitter" className="ms-2 nav-link text-primary">Twitter</Link></p> */}
      </div>
    </div>
  );
}

export default People;
