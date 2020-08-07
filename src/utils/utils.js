// para una lista dada, obtiene el valor máximo de id de las cards que incluye y devuelve un nuevo id
const getNewCardId = (data, listId) => {
  const cardIds = data.lists
    .find((list) => list.id === listId)
    .cards.map((card) => card.id);
  console.log(cardIds);
  return Math.max(...cardIds) + 1;
};

export { getNewCardId };
