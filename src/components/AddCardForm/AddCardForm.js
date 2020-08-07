import React, { useState } from "react";

export default function AddCardForm({
  handleAddCardForm,
  toggleShowAddForm,
  listId,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const buildNewCard = (event) => {
    event.preventDefault();
    toggleShowAddForm();
    handleAddCardForm({ title, description, listId });
  };

  return (
    <div className="AddCardForm">
      <p>Añadir nueva tarjeta</p>
      <form action="post" onSubmit={buildNewCard}>
        <input
          className="new-card-title"
          type="text"
          name="title"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          className="new-card-description"
          onChange={(event) => setDescription(event.target.value)}
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
