import React from "react";
function Stats() {
  const LeftMessage = [
    {
      id: 1,
      heading: "Customer-first always",
      msg: "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
    },
    {
      id: 2,
      heading: "No spam or gimmicks",
      msg: "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like.",
    },
    {
      id: 3,
      heading: "The Zerodha universe",
      msg: "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India",
    },
    {
      id: 4,
      heading: "Do better with money",
      msg: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];
  return (
    <div className="row my-5 p-4">
      <div className="col-sm-6 mt-5">
        <h2>Trust With Confidence</h2>
        {LeftMessage.map((Data) => {
          return (
            <div className="col-sm-12 mt-4" key={Data.id}>
              <h4>{Data.heading}</h4>
              <p>{Data.msg}</p>
            </div>
          );
        })}
      </div>
      <div className="col-sm-6 text-center">
        <img src="img/ecosystem.png" className="img-fluid" />
        <a href="/" className="nav-link text-primary">Explore Our Products&rarr;</a>
      </div>
      <div className="col-sm-12 text-center my-5">
        <a href="/">
        <img src="img/pressLogos.png" className="img-fluid" alt="press-Logo"/>
        </a>
      </div>
    </div>
  );
}

export default Stats;
