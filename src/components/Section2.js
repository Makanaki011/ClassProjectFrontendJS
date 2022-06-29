import React, { useState } from "react";
import "../styles/Section2.css";
import Adventures from "./Adventures";
import data from "../data";

const Section2 = () => {
  const [adventures, setAdventures] = useState(data);
  const removeAdventures = (id) => {
    const newAdventures = adventures.filter((adventure) => adventure.id !== id);
    setAdventures(newAdventures);
  };

  const refresh = () => {
    setAdventures(data);
  };

  return (
    <div className="section2" id="section2">
      <div className="sec2-head">
        <h2 className="section2_h1">Take Yourself</h2>
        <h2 className="section2_h2">Adventure Ideas</h2>
      </div>
      <div>
        <Adventures
          adventures={adventures}
          removeAdventures={removeAdventures}
          refresh = {refresh}
        />
      </div>
    </div>
  );
};

export default Section2;
