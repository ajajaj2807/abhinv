import React from "react";
import { motion } from "framer-motion";
import { pageTransitions } from "../animations";
import "../styles/faq.scss";
import Question from "./Questions";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../icons/arrow.svg";

export default function faq() {
  return (
    <motion.div
      initial="enter"
      exit="exit"
      animate="in"
      variants={pageTransitions}
      className="page-wrapper"
    >
      <Link className="home-btn" to="/">
        <button className="back">
          <Arrow /> Home
        </button>
      </Link>
      <h1 className="title">Frequently Asked Questions</h1>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, duration:0.5},
        }}
        className="faq-container"
      >
        <Question q="What is your name?" a="My name is Oliver Queen" />
        <Question q="What is your height?" a="I am 7 feet tall" />
        <Question q="What is this?" a="This is shit" />
        <Question q="Are you on Tinder?" a="Yes babe, I am." />
      </motion.div>
      <span className="more">
        For any other query, feel free to <Link to="/contact">Contact Me</Link>
      </span>
    </motion.div>
  );
}
