import React from "react";
import "./Home.css";
import Carousel from "./Carousel";

const heroCard = {
  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  title: "Bienvenue chez DevJob",
  subtitle:
    "Découvrez les meilleures opportunités tech et développez votre carrière dès aujourd'hui.",
  cta: "Commencer maintenant",
};

const cardsData = [
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    title: "Développez vos compétences",
    description:
      "Explorez des projets passionnants et améliorez vos talents.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    title: "Trouvez votre emploi idéal",
    description:
      "Postulez aux meilleures offres du marché avec facilité.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    title: "Collaborez avec les meilleurs",
    description:
      "Rejoignez une communauté active de professionnels passionnés.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=400&q=80",
    title: "Restez à jour",
    description:
      "Recevez des conseils et actualités technologiques.",
  },
];

function Home() {
  return (
    <section className="home-section">
      {/* Hero card */}
      <div
        className="hero-card"
        style={{ backgroundImage: `url(${heroCard.image})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>{heroCard.title}</h1>
          <p>{heroCard.subtitle}</p>
          <button className="btn-primary">{heroCard.cta}</button>
        </div>
      </div>

      {/* Grid cards */}
      <div className="cards-grid">
        {cardsData.map(({ image, title, description }, idx) => (
          <div className="card" key={idx}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="card-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <button className="btn-secondary">En savoir plus</button>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel logos */}
      <h2 className="carousel-title">Technologies & Langages</h2>
      <Carousel />
    </section>
  );
}

export default Home;
