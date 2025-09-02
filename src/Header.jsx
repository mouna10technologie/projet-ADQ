import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">DevJob</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact" className="btn-primary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
