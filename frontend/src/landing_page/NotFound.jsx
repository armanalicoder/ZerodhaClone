import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="row" style={{height:"100vh", width:"100%"}}>
      <div className="col-sm-12 my-auto">
        <div className="text-center">
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h4 className="mb-3">Page Not Found</h4>
          <p className="mb-4 text-secondary">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
