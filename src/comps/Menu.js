import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as SuggestIcon } from "../icons/suggest.svg";
import { ReactComponent as ProposalsIcon } from "../icons/proposals.svg";
import { ReactComponent as ContactIcon } from "../icons/contact.svg";
import { ReactComponent as FaqIcon } from "../icons/faq.svg";
import { ReactComponent as CredsIcon } from "../icons/credentials.svg";

export default function Menu() {
  const easing = [0.17, 0.37, 0.63, 0.47];

  return (
    <div className="menu">
      <motion.div
        key="main-menu"
        initial={{ y: "-120%", skewY: 20 }}
        animate={{
          y: 0,
          skewY: 0,
          transition: { ease: easing, delay: 0, damping: 0 },
        }}
        exit={{ opacity: 0, y: -500 }}
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
          initial={{ x: -30, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 1 },
          }}
          className="menu-content-social"
        >
          <div className="btns">
            <Link className="btn" to="/proposals">
              <div className="arrow">
                <ArrowIcon />
              </div>
              <div className="wrapper">
                <ProposalsIcon />
                <span className="title">Proposals</span>
                <span className="des">
                  A list of proposals for academic year 2020-2021
                </span>
              </div>
            </Link>
            <Link to="/suggest" className="btn">
              <div className="arrow">
                <ArrowIcon />
              </div>
              <div className="wrapper">
                <SuggestIcon />
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
          initial={{ x: -30, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.8, staggerChildren: 1 },
          }}
          className="menu-content-nav"
        >
          <Link to="/credentials"> <CredsIcon/> Credentials</Link>
          <Link to="/faq"> <FaqIcon/> FAQ</Link>
          <Link to="/contact"> <ContactIcon/> Contact</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
