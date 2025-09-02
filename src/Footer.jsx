import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-section about">
          <h3>À propos</h3>
          <p>
            DevJob connecte les développeurs aux meilleures opportunités dans
            le monde de la tech.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Liens utiles</h3>
          <a href="#jobs">Offres d'emploi</a>
          <a href="#candidats">Espace candidats</a>
          <a href="#recruteurs">Espace recruteurs</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>📧 contact@devjob.com</p>
          <p>📞 +212 6 12 34 56 78</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 DevJob. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
