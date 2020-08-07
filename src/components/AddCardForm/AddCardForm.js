import React, { useState } from "react";

export default function AddCardForm({ handleAddCardForm }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const buildNewCard = (event) => {
    console.log(event);
    event.preventDefault();
    handleAddCardForm({ title, description });
  };

  return (
    <div className="AddCardForm">
      <p>Añadir nueva tarjeta</p>
      <form onSubmit={buildNewCard}>
        <input
          className="new-card-title"
          type="text"
          name="title"
          placeholder="Titulo"
        />
        <textarea
          className="new-card-description"
          name="description"
          rows="20"
        ></textarea>
        <button className="regular-button" type="submit">
          Añadir
        </button>
      </form>
    </div>
  );
}
