import React, { useState } from "react";
import starterData from "../../starter_data";
import List from "../List/List";
import { getNewCardId } from "../../utils/utils";
export default function Board() {
  const [data, setData] = useState(starterData);

  const updateData = (newData) => {
    setData(data);
  };

  const handleAddCardForm = ({ title, description, listId }) => {
    console.log({ title, description, listId });
    const newId = getNewCardId(data, listId);
    console.log(newId);
  };

  return (
    <>
      <h1 className="board-title">Tablero: Cosas por hacer</h1>
      <div className="Board">
        {data.lists.map((list) => (
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
