import React from "react";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";

export default function Menu() {
  const easing = [0.17, 0.37, 0.63, 0.47];

  return (
    <div className="menu">
      <motion.div
        initial={{ y: "-120%", skewY: 20 }}
        animate={{
          y: 0,
          skewY: 0,
          transition: { ease: easing, delay: 0, damping: 0 },
        }}
        className="menu-overlay-one"
      ></motion.div>
      <motion.div
        initial={{ y: "-110%", skewY: 20 }}
        animate={{
          y: 0,
          skewY: 0,
          transition: {
            ease: easing,
            delay: 0.05,
            damping: 0,
          },
        }}
        className="menu-overlay-two"
      ></motion.div>
      <motion.div
        initial={{ y: "-110%", skewY: 20 }}
        animate={{
          y: 0,
          skewY: 0,
          transition: { ease: easing, delay: 0.1, damping: 0 },
        }}
        className="menu-overlay-three"
      ></motion.div>
      <motion.div
        initial={{ y: "-110%", skewY: 20 }}
        animate={{
          y: 0,
          skewY: 0,
          transition: {
            ease: easing,
            delay: 0.15,
            damping: 0,
          },
        }}
        className="menu-overlay-four"
      ></motion.div>
      <motion.div
        initial={{ y: "-100%", skewY: 20 }}
        animate={{
          y: 0,
          skewY: 0,
          transition: {
            ease: easing,
            delay: 0.2,
            damping: 0,
          },
        }}
        className="menu-content"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 1 } }}
          className="menu-content-social"
        >
          <div className="btns">
            <Link className="btn" to="/">
              <div className="arrow"><ArrowIcon/></div>
              <div className="wrapper">
                <span className="title">Proposals</span>
                <span className="des">
                  A list of proposals for academic year 2020-2021
                </span>
              </div>
            </Link>
            <Link to="/suggest" className="btn">
              <div className="arrow"><ArrowIcon/></div>
              <div className="wrapper">
                <span className="title">Suggest</span>
                <span className="des">
                  Fill a short form to send your suggestions
                </span>
              </div>
            </Link>
          </div>
          <div className="address">
            SDS 348, MMM Hall of Residence,
            <br /> IIT Kharagpur, WB 721-302
            <br />
            <br />
            ajajaj2807@gmail.com
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.8, staggerChildren: 1 },
          }}
          className="menu-content-nav"
        >
          <motion.a href="#">About</motion.a>
          <motion.a href="#">Credentials</motion.a>
          <motion.a href="#">Contact</motion.a>
          <motion.a href="#">FAQ</motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
