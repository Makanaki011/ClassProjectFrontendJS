import React from "react";
import "../styles/Section1.css";
import logo from "../images/Adventor.png";

const Section1 = () => {
  return (
    <div className="section1">
      <nav>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Adventures</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button className="explorebtn">Explore</button>
            </li>
          </ul>
        </div>
      </nav>

      <section className="landing-desc">
        <div className="discover">Discover</div>
        <div className="discover2">The Adventure Travel</div>
        <div className="discover3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium explicabo, repudiandae quaerat est officia consectetur a
            modi? Accusantium culpa quas soluta eaque deserunt ex quaerat
            pariatur, commodi aspernatur maiores voluptatem omnis, at iusto
            labore, qui quos in expedita blanditiis minus! Quia praesentium
            sapiente fugiat rerum doloribus qui nam accusantium dicta.
          </p>
        </div>
        <div className="discover4">
          <button className="viewbtn">View Adventures</button>
        </div>
      </section>
    </div>
  );
};

export default Section1;
