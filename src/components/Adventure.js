import React from 'react'
import { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const Adventure = ({ id, image, info, title, removeAdventures}) => {
const [readmore, setReadMore] = useState(true);
  return (
    <div>
      <div key={id}>
        <img src={image} alt={title} className="photo" />
        <footer>
          <div className="title-icons">
            <h5> {title} </h5>
            <div>
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiOutlineStar className="icon" />
              <AiOutlineStar className="icon" />
            </div>
          </div>
          <p className="adventure-text">
            {" "}
            {readmore ? `${info.substring(0, 50)}...` : info}{" "}
            <button className="readmore" onClick={() => setReadMore(!readmore)}>
              {" "}
              {readmore ? (
                <AiOutlinePlusCircle className="icon2" />
              ) : (
                <AiOutlineMinusCircle className="icon2" />
              )}{" "}
            </button>
          </p>
        </footer>
        <button className="notinterested" onClick={() => removeAdventures(id)}>
          Not Interested
        </button>
      </div>

    </div>
  );
}

export default Adventure