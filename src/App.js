import React, { useState } from "react";
import "./App.scss";
import Menu from './comps/Menu'

function App() {

  const [open, setOpen] = useState(true)

  return (
    <div className="main">
      <div className="menu-icon" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</div>
      {
        open ? <Menu /> : null
      }
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
        <a href="#">Proposals &rarr;</a>
        <a href="#">Suggest &rarr;</a>
      </div>
    </div>
  );
}

export default App;
