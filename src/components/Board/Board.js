import React, { useState } from "react";
import starterData from "../../starter_data";
import List from "../List/List";
import { getNewCardId } from "../../utils/utils";
export default function Board() {
  const [lists, setLists] = useState(starterData.lists);

  const handleAddCardForm = ({ title, description, listId }) => {
    if (title) {
      const newId = getNewCardId(lists, listId);
      const newCard = { id: newId, title, description }; // construyo nueva tarjeta a añadir
      const listToUpdate = lists.find((list) => list.id === listId); // extraigo lista que quiero utilizar
      const { cards, ...updatedList } = listToUpdate;
      const newCardsArray = cards.concat(newCard); // construyo nuevo array de cards actualizado
      updatedList.cards = newCardsArray; // construyo lista actualizada.
      const newData = lists
        .filter((list) => list.id !== listId)
        .concat(updatedList);
      console.log(JSON.stringify(newData, null, 2));
      setLists(newData.sort((a, b) => a.id - b.id)); // reordeno las listas por id y actualizo el estado

      // lists.find((list) => list.id === listId).cards.push(newCard);
      // setLists(lists);
    }
  };

  return (
    <>
      <h1 className="board-title">Tablero: Cosas por hacer</h1>
      <div className="Board">
        {lists.map((list) => (
          <List
            key={list.id}
            id={list.id}
            title={list.title}
            cards={list.cards}
            handleAddCardForm={handleAddCardForm}
          />
        ))}
      </div>
    </>
  );
}
