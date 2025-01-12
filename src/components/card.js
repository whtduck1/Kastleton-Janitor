import React from "react";
import "../styles/card.css";

function Card() {
  return (
    <div className="block-section">
      <div className="block-card">
        <h2>Kastleton Free Packet</h2>
        <p><strong>$0</strong></p>
        <ul>
          <li>Made lorem ipsum calar bomba</li>
          <li>Perfect for management</li>
        </ul>
        <button className="select-button">SELECT</button>
      </div>
      <div className="block-card">
        <h2>Katleton Premium Packet</h2>
        <p><strong>$15 per month</strong></p>
        <ul>
          <li>Handmade craftsmanship</li>
          <li>Natural look</li>
        </ul>
        <button className="select-button">SELECT</button>
      </div>
    </div>
  );
}

export default Card;
