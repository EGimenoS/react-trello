import React from "react";

export default function Card({ card }) {
  return (
    <div className="card">
      <div className="card-title">{card.title}</div>
      <div className="card-description">{card.description}</div>
    </div>
  );
}
