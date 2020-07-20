import React, { useState } from "react";
import "./App.scss";
import Menu from "./comps/Menu";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Suggest from "./comps/Suggest";
import { ReactComponent as CloseIcon } from "./icons/close.svg";
import { ReactComponent as MenuIcon } from "./icons/menu.svg";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="main">
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
        <Link to="/">Proposals &rarr;</Link>
        <Link to="/suggest">Suggest &rarr;</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/suggest" component={Suggest} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
