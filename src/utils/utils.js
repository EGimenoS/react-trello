// para una lista dada, obtiene el valor máximo de id de las cards que incluye y devuelve un nuevo id
const getNewCardId = (lists, listId) => {
  const cardIds = lists[listId].cards.map((card) => card.id);
  return Math.max(...cardIds) + 1;
};

const buildDataAfterAddCard = (title, description, listId, lists) => {
  const newId = getNewCardId(lists, listId);
  const newCard = { id: newId, title, description };
  const updatedCards = [...lists[listId]?.cards, newCard];

  const updatedLists = {
    ...lists,
    [listId]: { ...lists[listId], cards: updatedCards },
  };
  return updatedLists;
};

export { getNewCardId, buildDataAfterAddCard };
