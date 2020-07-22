import React from "react";
import { motion } from "framer-motion";
import { pageTransitions } from "../animations";
import {Link} from 'react-router-dom'
import {ReactComponent as Arrow} from '../icons/arrow.svg'

export default function Contact() {
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
      <h1 className="title">Contact</h1>
      
    </motion.div>
  );
}
