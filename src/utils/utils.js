// para una lista dada, obtiene el valor máximo de id de las cards que incluye y devuelve un nuevo id
const getNewCardId = (lists, listId) => {
  console.log(listId);
  const cardIds = lists[listId].cards.map((card) => card.id);
  return Math.max(...cardIds) + 1;
};

export { getNewCardId };
