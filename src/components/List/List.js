import React, { useState } from "react";
import Card from "../Card/Card";
import AddCardForm from "../AddCardForm/AddCardForm";

export default function List({ id, title, cards, handleAddCardForm }) {
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleShowAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const renderAddForm = () => {
    if (showAddForm) {
      return (
        <AddCardForm
          handleAddCardForm={handleAddCardForm}
          toggleShowAddForm={toggleShowAddForm}
          listId={id}
        />
      );
    }
  };

  const showAddButton = () => {
    if (!showAddForm) {
      return (
        <button onClick={toggleShowAddForm} className="regular-button">
          <span role="img" aria-label="Snowman">
            ➕
          </span>
          Añadir tarjeta
        </button>
      );
    }
  };

  return (
    <div className="List">
      <p className="list-title">{title}</p>
      {cards.map((card) => (
        <Card key={card.id} card={card} listId={id} />
      ))}
      {renderAddForm()}
      {showAddButton()}
    </div>
  );
}
