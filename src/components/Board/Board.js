import React, { useState } from "react";
import starterData from "../../starter_data";
import List from "../List/List";

export default function Board() {
  const [data, setData] = useState(starterData);

  const updateData = (newData) => {
    setData(data);
  };

  const handleAddCardForm = ({ title, description }) => {
    console.log({ title, description });
  };

  return (
    <>
      <h1 className="board-title">Tablero: Cosas por hacer</h1>
      <div className="Board">
        {data.lists.map((list) => (
          <List
            key={list.id}
            title={list.title}
            cards={list.cards}
            handleAddCardForm={handleAddCardForm}
          />
        ))}
      </div>
    </>
  );
}
