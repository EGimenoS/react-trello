import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Card({ listId, card, handleDeleteCard }) {
  const deleteCard = () => {
    handleDeleteCard(listId, card.id);
  };

  const handleDragStart = (e) => {
    console.log("ondrag");
    const dragData = {
      listId,
      cardId: card.id,
      title: card.title,
      description: card.description,
    };
    e.currentTarget.classList.add("dragged-element");
    e.dataTransfer.setData("text/plain", JSON.stringify(dragData));
    e.stopPropagation();
  };

  const handleDragEnd = (e) => {
    console.log("ondragend");
    e.currentTarget.classList.remove("dragged-element");
    e.stopPropagation();
  };
  return (
    <div
      draggable="true"
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      className="card"
    >
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
