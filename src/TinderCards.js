import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import db from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);
  //   {
  //     name: "Kim Kardeshian",
  //     url: "https://hollywoodlife.com/wp-content/uploads/2021/03/Kim-Kardashian-Wearing-Yeezy-After-Divorce-BACKGRID-embed.jpg",
  //   },
  //   {
  //     name: "Timothee Chamalet",
  //     url: "https://cdn.britannica.com/36/231936-050-63D849FB/Timothee-Chalamet-2021.jpg",
  //   },
  // ]);
  useEffect(() => {
    const unsubsribe = db
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((docs) => docs.data()))
      );
    return () => {
      // clean up
      // there may be thousand of listeners - better practice to unsubscribe
      unsubsribe();
    };
  }, []);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
