import React from "react";
import "../styles/home.css";

function Home() {

  const scrollToPricing = () => {
    const pricingSection = document.querySelector("#pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="home-container">
      <h1>Kastleton Janitor</h1>
      <p>
        Manage your community with ease. Simplify your guild management and bring order to your chaos. Start now and feel the difference.
      </p>
      <button className="cta-button" onClick={scrollToPricing}>Get Started</button>
    </section>
  );
}

export default Home;
