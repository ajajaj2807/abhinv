import React, { useState } from "react";
import "../suggest.scss";
import { motion } from "framer-motion";

export default function Suggest() {
  const [slide, setSlide] = useState(0);
  const transitions = {
    duration: 0.5,
    damping: 0,
  };
  return (
    <div className="suggest-wrapper">
      <div className="progress">
        <div className="bar" style={{ width: slide * 33.33 + "%" }}></div>
      </div>
      {slide === 0 ? (
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: transitions }}
          className="header"
        >
          <span className="title">Suggest your views</span>
          <span className="des">
            Abhinav is asking for your help to suggest improvements which can be
            made blah blah blah here.
          </span>
          <button onClick={() => setSlide(1)}>Start</button>
        </motion.div>
      ) : null}
      {slide === 1 ? (
        <motion.div
          className="section"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: transitions }}
        >
          <div className="title">Basic Details</div>
          <div className="des">
            This information is just to contact you if required blah blah
          </div>
          <div className="form-content">
            <input name="email" placeholder="Email Address"></input>
            <input
              name="roll"
              placeholder="Roll Number (Ex: 15ME30048)"
            ></input>
          </div>
          <button onClick={() => setSlide(2)}>Next</button>
        </motion.div>
      ) : null}
      {slide === 2 ? (
        <motion.div
          className="section"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: transitions }}
        >
          <div className="title">Your Suggestion</div>
          <div className="des">Please be clear blah blah some text here</div>
          <div className="form-content">
            <textarea
              name="suggestion"
              placeholder="Write your suggestion here"
            ></textarea>
          </div>
          <button onClick={() => setSlide(3)}>Submit</button>
        </motion.div>
      ) : null}
      {slide === 3 ? (
        <motion.div
          className="thank"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: transitions }}
        >
          <span className="title">Thank you 😊</span>
          <span className="des">
            Your response has been successfully shared lauda lasusn
          </span>
          <div className="controls">
            <button>Submit Another</button>
            <button>Back to Home</button>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
