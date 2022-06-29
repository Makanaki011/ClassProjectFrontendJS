import React, { useState } from "react";
import "../styles/Adventures.css";

import Adventure from "./Adventure";
import Refresh from "./Refresh";

const Adventures = ({ adventures, removeAdventures, refresh }) => {
  if (adventures.length === 0) {
    return (
      < Refresh refresh = {refresh} />
    );
  }
  return (
    <div className="adventure-item grid">
      {adventures.map((adventure) => {
        return (
          <Adventure
            key={adventure.id}
            {...adventure}
            removeAdventures={removeAdventures}
          />
        );
      })}
    </div>
  );
};

export default Adventures;
