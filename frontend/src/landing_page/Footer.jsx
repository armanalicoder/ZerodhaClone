import React from "react";

function Footer() {
  return (
      <div className="row">
      <div className="col-sm-3 pt-5">
        <img src="img/logo.svg" className="img-fluid" height={"200px"} width={"200px"} alt="footer-logo" />
        <p className="mt-2">© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
        <ul type="none" className="d-flex">
          <li><a target="_blank" href="https://x.com/zerodhaonline" className="nav-link mx-2"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a target="_blank" href="https://www.facebook.com/zerodha.social" className="nav-link mx-2"><i className="fa-brands fa-facebook"></i></a></li>
          <li><a target="_blank" href="https://www.instagram.com/zerodhaonline/" className="nav-link mx-2"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/company/zerodha" className="nav-link mx-2"><i className="fa-brands fa-linkedin"></i></a></li>
        </ul>
        <hr/>
        <ul type="none" className="d-flex">
          <li><a target="_blank" href="https://www.youtube.com/@zerodhaonline" className="nav-link mx-2"><i className="fa-brands fa-youtube"></i></a></li>
          <li><a target="_blank" href="https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g" className="nav-link mx-2"><i className="fa-brands fa-whatsapp"></i></a></li>
          <li><a target="_blank" href="https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g" className="nav-link mx-2"><i className="fa-brands fa-telegram"></i></a></li>
        </ul>
      </div>
      <div className="col-sm-3 pt-5">
        <ul type="none">
        <h4>Company</h4>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/products" className="nav-link my-2">Product</a></li>
          <li><a href="/pricing" className="nav-link">Pricing</a></li>
          <li><a href="/" className="nav-link my-2">Referral programme</a></li>
          <li><a href="/" className="nav-link">Careers</a></li>
          <li><a href="/" className="nav-link my-2">Zerodha.tech</a></li>
          <li><a href="/" className="nav-link">Open Source</a></li>
          <li><a href="/" className="nav-link my-2">Press & media</a></li>
          <li><a href="/" className="nav-link">Zerodha Cares (CSR)</a></li>
        </ul>
      </div>
      <div className="col-sm-3 pt-5">
        <ul type="none">
        <h4>Support</h4>
          <li><a href="/support" className="nav-link">Contact us</a></li>
          <li><a href="/support" className="nav-link my-2">Support portal</a></li>
          <li><a href="/" className="nav-link">Z-Connect blog</a></li>
          <li><a href="/" className="nav-link my-2">List of charges</a></li>
          <li><a href="/" className="nav-link">Download & resources</a></li>
          <li><a href="/" className="nav-link my-2">Videos</a></li>
          <li><a href="/" className="nav-link">Market overview</a></li>
          <li><a href="/support" className="nav-link my-2">How to file a complaint?</a></li>
          <li><a href="/support" className="nav-link">Status of your complaints</a></li>
        </ul>
      </div>
      <div className="col-sm-3 pt-5">
        <ul type="none">
        <h4>Account</h4>
          <li><a href="/signup" className="nav-link">Open an account</a></li>
          <li><a href="/login" className="nav-link my-2">Fund transfer</a></li>
        </ul>
      </div>
      <div className="col-sm-12 text-center my-2">
        <p className="fs-5">Design & Developed By | Arman Ali</p>
      </div>
    </div>   
  );
}

export default Footer;
