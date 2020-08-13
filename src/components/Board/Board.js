import React, { useState } from "react";
import starterLists from "../../starter_data";
import List from "../List/List";
import { buildDataAfterAddCard } from "../../utils/utils";
export default function Board() {
  const [lists, setLists] = useState(starterLists);
  const [newListName, setNewListName] = useState("");

  const handleAddCardForm = ({ title, description, listId }) => {
    if (title) {
      const newLists = buildDataAfterAddCard(title, description, listId, lists);
      setLists(newLists);
    }
  };

  const handleAddNewList = (event) => {
    if (event.keyCode === 13 && newListName) {
      const newListId = Math.max(...Object.keys(lists)) + 1;
      setLists({ ...lists, [newListId]: { title: newListName, cards: [] } });
      setNewListName("");
    }
  };

  const handleDeleteList = (listId) => {
    const { [listId]: _, ...updatedLists } = lists;
    setLists(updatedLists);
  };

  return (
    <>
      <h1 className="board-title">Tablero: Cosas por hacer</h1>
      <div className="Board">
        {Object.entries(lists).map(([listId, { title, cards }]) => (
          <List
            key={listId}
            id={listId}
            title={title}
            cards={cards}
            handleAddCardForm={handleAddCardForm}
            handleDeleteList={handleDeleteList}
          />
        ))}
        <div className="new-list">
          Nueva Lista
          <input
            className="new-list-input"
            value={newListName}
            type="text"
            onKeyDown={handleAddNewList}
            onChange={(event) => setNewListName(event.target.value)}
          />
        </div>
      </div>
    </>
  );
}
