import React from "react";

function BenefitsDemat() {
  const RightMessage = [
    {
      id: 1,
      heading: "Unbeatable pricing",
      msg: "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
    },
    {
      id: 2,
      heading: "Best investing experience",
      msg: "Simple and intuitive trading platform with an easy-to-understand user interface.",
    },
    {
      id: 3,
      heading: "No spam or gimmicks",
      msg: "Committed to transparency — no gimmicks, spam, 'gamification', or intrusive push notifications.",
    },
    {
      id: 4,
      heading: "The Zerodha universe",
      msg: "More than just an app — gain free access to the entire ecosystem of our partner products.",
    },
  ];
  return (
    <div className="row p-5">
      <div className="col-sm-6 ps-5 pe-5 my-auto">
        <img src="img/acop-benefits.svg" className="h-80 w-100 img-fluid " />
        <h2>Benefits of opening a Zerodha demat account</h2>
      </div>
      <div className="col-sm-6 my-auto">
        {RightMessage.map((Data) => {
          return (
            <div key={Data.id} className="my-4">
              <h4>{Data.heading}</h4>
              <p className="fs-5">
                {Data.msg}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BenefitsDemat;
