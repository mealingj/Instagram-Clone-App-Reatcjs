import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Instagram Clone</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
}

export default Header;