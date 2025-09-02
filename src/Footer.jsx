import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>DevJob connecte les développeurs aux meilleures opportunités tech.</p>
        </div>
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <a href="#">Offres d'emploi</a>
          <a href="#">Espace candidats</a>
          <a href="#">Espace recruteurs</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>contact@devjob.com</p>
          <p>+212 6 12 34 56 78</p>
        </div>
      </div>
      <div className="footer-bottom">&copy; 2025 DevJob. Tous droits réservés.</div>
    </footer>
  );
}

export default Footer;
