import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./streams/GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Fake Twitch.tv
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
      <GoogleAuth />
    </div>
  );
};

export default Header;
