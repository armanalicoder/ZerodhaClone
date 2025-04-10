import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  const Universe = [
    {
      id: 1,
      url: "img/zerodhaFundhouse.png",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      id: 2,
      url: "img/streakLogo.png",
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      id: 3,
      url: "img/tijori.svg",
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      id: 4,
      url: "img/streakLogo.png",
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      id: 5,
      url: "img/smallcaseLogo.png",
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      id: 6,
      url: "img/dittoLogo.png",
      description:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];
  return (
    <div className="row p-5">
      <div className="col-sm-12 text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      {Universe.map((Data) => {
        return (
          <div className="col-sm-4 p-3" key={Data.id}>
            <div className="p-5 text-center">
              <img src={Data.url} className="img-fluid" />
              <p className="mt-2">{Data.description}</p>
            </div>
          </div>
        );
      })}
      <div className="col-sm-12 text-center">
        <Link to="/signup" className="btn btn-primary ps-5 pe-5">Sign up for free</Link>
      </div>
    </div>
  );
}

export default Universe;
