import React, { useState, useRef } from "react";
import Card from "../Card/Card";
import AddCardForm from "../AddCardForm/AddCardForm";

import { AiFillDelete } from "react-icons/ai";
import { MdAddBox } from "react-icons/md";
import { IconContext } from "react-icons";

export default function List({
  id,
  title,
  cards,
  handleAddCardForm,
  handleDeleteList,
  handleDeleteCard,
  handleUpdateDataAfterDrop,
}) {
  const [showAddForm, setShowAddForm] = useState(false);
  const refList = useRef(null);

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
        <div className="list-footer">
          <button onClick={toggleShowAddForm} className="regular-button">
            <IconContext.Provider
              value={{
                color: "color: rgb(58, 57, 57)",
                size: "2rem",
                className: "add-icon",
              }}
            >
              <MdAddBox />
            </IconContext.Provider>
          </button>
          <span>Añadir tarjeta</span>
        </div>
      );
    }
  };

  const deleteList = () => {
    handleDeleteList(id);
  };

  const handleCardDrop = (e) => {
    refList.current.style.opacity = "1";
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    handleUpdateDataAfterDrop(
      data.listId,
      data.cardId,
      data.title,
      data.description,
      id
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    refList.current.style.opacity = "0.4";
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    refList.current.style.opacity = "1";
  };

  return (
    <div
      ref={refList}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleCardDrop(e)}
      className="List"
    >
      <div className="list-header">
        <div className="list-title">{title}</div>
        <IconContext.Provider
          value={{ color: "color: rgb(58, 57, 57)", size: "3rem" }}
        >
          <button className="regular-button" onClick={deleteList}>
            <AiFillDelete />
          </button>
        </IconContext.Provider>
      </div>

      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          listId={id}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
      {renderAddForm()}
      {showAddButton()}
    </div>
  );
}
