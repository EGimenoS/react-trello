import React, { useState } from "react";
import starterLists from "../../starter_data";
import List from "../List/List";
import { getNewCardId } from "../../utils/utils";
export default function Board() {
  const [lists, setLists] = useState(starterLists);

  const buildDataToUpdate = ({ title, description, listId }) => {
    const newId = getNewCardId(lists, listId);
    const newCard = { id: newId, title, description };
    const updatedCards = [...lists[listId]?.cards, newCard];

    const updatedLists = {
      ...lists,
      [listId]: { ...lists[listId], cards: updatedCards },
    };
    return updatedLists;
  };

  const handleAddCardForm = ({ title, description, listId }) => {
    if (title) {
      const newLists = buildDataToUpdate(arguments);
      setLists(newLists);
    }
  };

  return (
    <>
      <h1 className="board-title">Tablero: Cosas por hacer</h1>
      <div className="Board">
        {Object.keys(lists).map((listId) => (
          <List
            key={listId}
            id={listId}
            title={lists[listId].title}
            cards={lists[listId].cards}
            handleAddCardForm={handleAddCardForm}
          />
        ))}
      </div>
    </>
  );
}
