import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>DevJob</h1>
        <nav>
          <a href="#home">Accueil</a>
          <a href="#jobs">Offres</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
