import React from "react";
import "../styles/Refresh.css";
import refresh2 from "../images/refresh2.png";
const Refresh = ({ refresh }) => {
  return (
    <div>
      <div className="no-adventures">
        <img src={refresh2} alt="refresh" className="refresh" />
        <h2>No Adventures left</h2>
        <p>
          Refresh page to view different adventures from the long list of ideas
          available.
        </p>
        <button className="notinterested" onClick={refresh}>
          refresh
        </button>
      </div>
    </div>
  );
};

export default Refresh;
