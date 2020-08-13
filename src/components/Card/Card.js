import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Card({ listId, card, handleDeleteCard }) {
  const deleteCard = () => {
    handleDeleteCard(listId, card.id);
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">{card.title}</div>
        <button className="regular-button" onClick={deleteCard}>
          <IconContext.Provider
            value={{ color: "color: rgb(58, 57, 57)", size: "2rem" }}
          >
            <AiFillDelete />
          </IconContext.Provider>
        </button>
      </div>

      <div className="card-description">{card.description}</div>
    </div>
  );
}
