import React from "react";
import { motion } from "framer-motion";
import { pageTransitions } from "../animations";
import '../styles/faq.scss'
import Question from './Questions'

export default function faq() {
  return (
    <motion.div
      initial="enter"
      exit="exit"
      animate="in"
      variants={pageTransitions}
      className="page-wrapper"
    >
      <h1 className="title">Frequently Asked Questions</h1>
      <div className="faq-container">
        <Question q="What is your name?" a="My name is Oliver Queen" />
        <Question q="What is your height?" a="I am 7 feet tall" />
        <Question q="What is this?" a="This is shit" />
        <Question q="Are you on Tinder?" a="Yes babe, I am." />
      </div>
    </motion.div>
  );
}
