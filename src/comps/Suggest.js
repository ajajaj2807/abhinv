import React, { useState } from "react";
import "../suggest.scss";
import { motion } from "framer-motion";
import { firestore } from "../firebase";
import { ReactComponent as SuccessIcon } from "../icons/success.svg";

export default function Suggest() {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState({});
  const transitions = {
    duration: 0.5,
    damping: 0,
  };

  const submitForm = async () => {
    setSlide(-1);
    const createdAt = Date.parse(Date());
    const post = { ...data, time: createdAt };
    const docRef = await firestore.collection("responses").add(post);
    const doc = await docRef.get();

    setSlide(3);
  };

  return (
    <div className="suggest-wrapper">
      <div className="progress">
        {slide === -1 ? (
          <div className="bar" style={{ width: "100%", background: '#2196f3' }}></div>
        ) : (
          <div className="bar" style={{ width: slide * 33.33 + "%" }}></div>
        )}
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
          <button className="back" onClick={() => setSlide(0)}>
            {" "}
            &larr; Back
          </button>
          <div className="title">Basic Details</div>
          <div className="des">
            This information is just to contact you if required blah blah
          </div>
          <div className="form-content">
            <input
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              name="email"
              placeholder="Email Address"
            ></input>
            <input
              value={data.roll}
              onChange={(e) => setData({ ...data, roll: e.target.value })}
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
          <button className="back" onClick={() => setSlide(1)}>
            {" "}
            &larr; Back
          </button>

          <div className="title">Your Suggestion</div>
          <div className="des">Please be clear blah blah some text here</div>
          <div className="form-content">
            <textarea
              value={data.suggestion}
              onChange={(e) => setData({ ...data, suggestion: e.target.value })}
              name="suggestion"
              placeholder="Write your suggestion here"
            ></textarea>
          </div>
          <button onClick={submitForm}>Submit</button>
        </motion.div>
      ) : null}
      {slide === -1 ? (
        <div>
          <b>Hold on, We are submitting your response!</b>
        </div>
      ) : null}
      {slide === 3 ? (
        <motion.div
          className="thank"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: transitions }}
        >
          <SuccessIcon fill="white" />
          <span className="title">Thank you!</span>
          <span className="des">
            Your response has been successfully shared
          </span>
          <div className="controls">
            <button onClick={() => setSlide(0)}>Submit Another</button>
            <button>Back to Home</button>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
