import React from "react";
import { useState } from "react";
import "../styles/Testimonial.css";
import people from "../user";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";


const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { id, comment, image, name, job } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prevPerson =()=>{
    setIndex((index) => {
    let newIndex = index - 1;
    return checkNumber(newIndex);
    });
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };


  return (
    <div className="testimonial">
      <div className="sec2-head">
        <h2 className="section2_h1">Clients Testimonial</h2>
        <h2 className="section2_h2">Adventure Ideas</h2>
      </div>
      <div key={id} className="testimonial-main">
        <img src={image} alt={name} />
        <p> {comment} </p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <HiOutlineArrowSmLeft className="icon" />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <HiOutlineArrowSmRight className="icon" />
          </button>
        </div>
        <h2> {name} </h2>
        <h3> {job} </h3>
      </div>
    </div>
  );
};

export default Testimonial;
