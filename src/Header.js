import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import tinder from "./images/580b57fcd9996e24bc43c53b.png";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      {/* <h1>I am a header</h1> */}
      <IconButton>
        <PersonIcon fontSize="small" className="header__icon" />
      </IconButton>

      <img className="header__logo" src={tinder} alt="tinder logo" />

      <IconButton>
        <ForumIcon fontSize="small" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
