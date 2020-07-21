import React, { useState } from "react";
import "./styles/App.scss";
import Menu from "./comps/Menu";
import Faq from './comps/Faq'
import Contact from './comps/Contact'
import Credentials from './comps/Credentials'
import Proposals from './comps/Proposals'
import { Route, Switch, Link, useLocation } from "react-router-dom";
import Suggest from "./comps/Suggest";
import { ReactComponent as CloseIcon } from "./icons/close.svg";
import { ReactComponent as MenuIcon } from "./icons/menu.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransitions } from "./animations";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial="enter"
      exit="exit"
      animate="in"
      variants={pageTransitions}
      className="main"
    >
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {!open ? <MenuIcon /> : <CloseIcon fill="white" />}
      </div>
      {open ? <Menu /> : null}
      <div className="main-pic">photo</div>
      <div className="main-content">
        <span className="main-content-title">
          Hello{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
          , <br /> I am Abhinav
        </span>
        <span className="main-content-sub">
          4th year Undergraduate Student at <br /> Indian Institute of
          technology, Kharagpur
        </span>
      </div>
      <div className="btn-group">
        <Link to="/proposals">
          Proposals <ArrowIcon />
        </Link>
        <Link to="/suggest">
          Suggest <ArrowIcon />
        </Link>
      </div>
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/suggest" component={Suggest} />
          <Route path="/proposals" component={Proposals} />
          <Route path="/contact" component={Contact} />
          <Route path="/credentials" component={Credentials} />
          <Route path="/faq" component={Faq} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
