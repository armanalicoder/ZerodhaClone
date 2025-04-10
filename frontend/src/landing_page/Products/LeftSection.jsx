import React from "react";

function LeftSection({
  productImg,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="row">
      <div className="col-sm-6 p-4">
        <img src={productImg} className="img-fluid" alt="product_image"/>
      </div>
      <div className="col-sm-6 my-auto p-4">
        <div>
          <h2>{productName}</h2>
          <p>{productDescription}</p>
        </div>
        <div className="d-flex text-primary my-3">
          <a href={tryDemo} className="nav-link me-5 ">Try Demo &rarr;</a>
          <a href={learnMore} className="nav-link">Learn More &rarr;</a>
        </div>
        <div>
          <a href={googlePlay} className="me-4"><img src="img/googlePlayBadge.svg" className="img-fluid"/></a>
          <a href={appStore}><img src="img/appstoreBadge.svg" className="img-fluid"/></a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
