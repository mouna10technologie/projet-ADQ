import React, { useEffect, useRef } from "react";
import "./Carousel.css";

const logos = [
  "https://cdn.worldvectorlogo.com/logos/javascript.svg",
  "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  "https://cdn.worldvectorlogo.com/logos/java-4.svg",
  "https://cdn.worldvectorlogo.com/logos/go.svg",
  "https://cdn.worldvectorlogo.com/logos/docker.svg",
];

function Carousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const step = 1; // pixels per interval
    const delay = 20; // ms

    const scroll = () => {
      if (!carousel) return;
      scrollAmount += step;
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += step;
      }
    };

    const intervalId = setInterval(scroll, delay);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel-track">
        {[...logos, ...logos].map((logo, idx) => (
          <img
            src={logo}
            alt="Langage logo"
            key={idx}
            className="carousel-logo"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
