// para una lista dada, obtiene el valor máximo de id de las cards que incluye y devuelve un nuevo id
const getNewCardId = (lists, listId) => {
  const cardIds = lists
    .find((list) => list.id === listId)
    .cards.map((card) => card.id);
  return Math.max(...cardIds) + 1;
};

export { getNewCardId };
