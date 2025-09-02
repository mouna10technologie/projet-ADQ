import React from "react";
import "./Home.css";

const cardsData = [
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    title: "Optimisez vos compétences",
    description:
      "Créez un profil qui met en avant votre savoir-faire et vos projets uniques.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    title: "Trouvez l'emploi parfait",
    description:
      "Explorez les offres exclusives et décrochez votre prochaine aventure professionnelle.",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    title: "Connectez avec les recruteurs",
    description:
      "Mettez-vous en avant et attirez les meilleurs talents et recruteurs.",
  },
];

function Home() {
  return (
    <section className="home-section">
      <div className="hero">
        <h2>Construisez votre avenir, valorisez votre talent</h2>
        <p>
          Montrez ce que vous valez. Créez votre profil, exposez vos projets et
          faites-vous remarquer par les recruteurs qui comptent.
        </p>
        <button className="btn-primary">Commencer</button>
      </div>

      <div className="cards">
        {cardsData.map(({ image, title, description }, i) => (
          <div className="card" key={i}>
            <div className="card-image" style={{ backgroundImage: `url(${image})` }} />
            <div className="card-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <button className="btn-secondary">En savoir plus</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
