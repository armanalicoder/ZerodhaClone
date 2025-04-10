import React, { useState } from "react";

function Team() {
  const profile = [
    {
      id: 1,
      name: "Nikhil Kamath",
      pos: "Co-Founder & CFO",
      bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
      url: "img/Nikhil.jpg",
    },
    {
      id: 2,
      name: "Dr. Kailash Nadh",
      pos: "CTO",
      bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.",
      url: "img/Kailash.jpg",
    },
    {
      id: 3,
      name: "Venu Madhav",
      pos: "COO",
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.",
      url: "img/Venu.jpg",
    },
    {
      id: 4,
      name: "Hanan Delvi",
      pos: "CCO",
      bio: "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.",
      url: "img/Hanan.jpg",
    },
    {
      id: 5,
      name: "Seema Patil",
      pos: "Director",
      bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.",
      url: "img/Seema.jpg",
    },
    {
      id: 6,
      name: "Karthik Rangappa",
      pos: "Chief of education",
      bio: "Karthik Guru Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.",
      url: "img/karthik.jpg",
    },
  ];
  const [showBioid, setShowBioid] = useState(null);
  const handleTogglebio = (id)=>{
    if(showBioid===id){
      setShowBioid(null)
    }
    else{
      setShowBioid(id)
    }
  }
  return (
    <div className="row">
      {profile.map((Data) => {
        return (
          <div className="col-sm-4">
            <div className="text-center p-5">
              <img src={Data.url} className="img-fluid rounded-pill" />
              <h5 className="mt-2">{Data.name}</h5>
              <p>{Data.pos}</p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  {
                    handleTogglebio(Data.id);
                  }
                }}
              >
                Bio{" "}
                {showBioid===Data.id ? (
                  <i className="fa-solid fa-angle-up"></i>
                ) : (
                  <i className="fa-solid fa-angle-down"></i>
                )}
              </p>
              {showBioid===Data.id && <p className="text-sm text-gray-700 mt-2">{Data.bio}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
