import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Questions({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-single" onClick={() => setOpen(!open)}>
      <div className="head">
        <span className="question">{q}</span>
        <span className="icon" style={{ transform: `rotateZ(${open ? 45 : 0}deg)` }}>+</span>
      </div>
      {open ? (
        <motion.span
          initial={{ scaleY: 0, transformOrigin: 'top', opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1, transition:{damping:0} }}
          className="answer"
        >
          {a}
        </motion.span>
      ) : null}
    </div>
  );
}
