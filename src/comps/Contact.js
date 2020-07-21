import React from "react";
import { motion } from "framer-motion";
import { pageTransitions } from "../animations";

export default function Contact() {
  return (
    <motion.div
      initial="enter"
      exit="exit"
      animate="in"
      variants={pageTransitions}
    >
      Contact
    </motion.div>
  );
}
