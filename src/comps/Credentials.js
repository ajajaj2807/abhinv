import React from "react";
import { motion } from "framer-motion";
import { pageTransitions } from "../animations";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../icons/arrow.svg";
import "../styles/creds.scss";
import Sac from "../images/sac.png";
import TM from "../images/tm.png";
import GS from "../images/gs.png";
import Grad from '../images/grad.jpg'
import Iiit from '../images/iiit.png'

export default function Credentials() {
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
      <h1 className="title">Credentials</h1>
      <div className="creds-wrapper">
        <div className="card">
          <img className="c-img" src={Sac} alt="SAC" />
          <div className="card-content">
            <span className="ctitle">Students' Alumni Cell</span>
            <span className="post">Associate Member</span>
            <span className="time">2017-2018</span>
            <span className="post">Student Member</span>
            <span className="time">2017-2018</span>
          </div>
        </div>
        <div className="card">
          <img className="c-img" src={TM} alt="TM" />
          <div className="card-content">
            <span className="ctitle">Tech Mahindra</span>
            <span className="post">Business Analyst Intern</span>
            <span className="time">2018-2019</span>
          </div>
        </div>
        <div className="card">
          <img className="c-img" src={GS} alt="GS" />
          <div className="card-content">
            <span className="ctitle">Great Step, IIT Kharagpur</span>
            <span className="post">Volunteer</span>
            <span className="time">2018-2019</span>
          </div>
        </div>
        <div className="card">
          <img className="c-img" src={Iiit} alt="GS" />
          <div className="card-content">
            <span className="ctitle">Inter IIT Sports Meet 2019</span>
            <span className="post">Sponsorship and Publicity Head</span>
            <span className="time">2018-2019</span>
          </div>
        </div>
        <div className="card">
          <img className="c-img" src={Grad} alt="GS" />
          <div className="card-content">
            <span className="ctitle">GradSpace</span>
            <span className="post">Product Management Intern</span>
            <span className="time">2018-2019</span>
          </div>
        </div>
        <div className="card">
          <img className="c-img" src={Grad} alt="GS" />
          <div className="card-content">
            <span className="ctitle">Pt. Madan Mohan Malviya Hall of Residence</span>
            <span className="post">Technology Co-ordinator</span>
            <span className="time">2018-2019</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
