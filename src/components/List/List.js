import React from "react";
import Card from "../Card/Card";

export default function List({ id, title, cards }) {
  return (
    <div className="List">
      <p className="list-title">{title}</p>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
