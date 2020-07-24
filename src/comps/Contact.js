import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageTransitions } from "../animations";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../icons/arrow.svg";
import "../styles/contact.scss";
import { ReactComponent as AddressIcon } from "../icons/address.svg";
import { ReactComponent as MailIcon } from "../icons/mail.svg";
import { ReactComponent as PhoneIcon } from "../icons/phone.svg";
import { ReactComponent as SocialIcon } from "../icons/social.svg";
import { ReactComponent as FbIcon } from "../icons/fb.svg";
import { ReactComponent as IgIcon } from "../icons/ig.svg";
import { ReactComponent as LiIcon } from "../icons/li.svg";
import { ReactComponent as SuccessIcon } from "../icons/success.svg";

export default function Contact() {
  const [sent, setSent] = useState(0);

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
      <div className="contact-wrapper">
        {sent === 1 ? (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="thank-wrapper"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: 0.2 } }}
            >
              <SuccessIcon/>
            </motion.div>
            <span className="title">Message Sent Successfully</span>
          </motion.div>
        ) : null}
        {sent === 1 ? null : (
          <div className="form-wrapper">
            <div className="fi">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="name"
                placeholder="Abhinav Kumar"
              ></input>
            </div>
            <div className="fi">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
              ></input>
            </div>
            <div className="fta">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message Here"
              ></textarea>
            </div>
            <span className="form-warn">
              Note: If you want to send a suggestion, please go to{" "}
              <Link to="/suggest">Suggestions</Link> page.
            </span>
            <button
              disabled={sent === -1 ? true : false}
              onClick={() => setSent(1)}
              className="send-btn"
            >
              Send
            </button>
          </div>
        )}
        <div className="info-wrapper">
          <div className="isec">
            <span className="ist">
              <AddressIcon /> Address
            </span>
            <span class="isd">
              SDS 348, MMM Hall of Residence, <br />
              IIT Kharagpur, WB, India 721-302
            </span>
          </div>
          <div className="isec">
            <span className="ist">
              <MailIcon />
              Mail
            </span>
            <span class="isd">ajajaj2807@gmail.com</span>
          </div>
          <div className="isec">
            <span className="ist">
              <PhoneIcon /> Phone
            </span>
            <span class="isd">+91-7426082035</span>
          </div>
          <div className="isec">
            <span className="ist">
              <SocialIcon /> Social
            </span>
            <div class="isd">
              <div className="icons-bar">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FbIcon />{" "}
                </a>
                <a href="https://www.instagram.com">
                  {" "}
                  <IgIcon />{" "}
                </a>
                <a href="https://www.linkedin.com">
                  {" "}
                  <LiIcon />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
