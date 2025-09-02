import React from "react";
import "./Home.css";

const cardsData = [
  {
    image: "https://source.unsplash.com/400x300/?coding,programming",
    title: "Optimisez vos compétences",
    description:
      "Construisez un profil qui valorise votre savoir-faire technique et vos réalisations professionnelles.",
  },
  {
    image: "https://source.unsplash.com/400x300/?job,career",
    title: "Trouvez votre emploi idéal",
    description:
      "Découvrez les offres les plus pertinentes et saisissez votre nouvelle opportunité professionnelle.",
  },
  {
    image: "https://source.unsplash.com/400x300/?developer,talent",
    title: "Attirez les talents d’exception",
    description:
      "Identifiez des développeurs compétents parfaitement adaptés à vos exigences.",
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
        {cardsData.map(({ image, title, description }, idx) => (
          <div className="card" key={idx}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="btn-secondary">En savoir plus</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
