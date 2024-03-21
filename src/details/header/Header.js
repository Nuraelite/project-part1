import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="data:image/png;base64,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"
          alt="Logo"
        />
      </Link>
      <ul className="nav_bar">
          <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/profile"></Link>
          <button class="btn">Buy Challenge</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
