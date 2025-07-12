let items = [
  { id: 1, name: 'Item One', description: 'First item' },
  { id: 2, name: 'Item Two', description: 'Second item' }
];

let currentId = 2;

module.exports = {
  getAllItems: () => items,

  getItemById: (id) => items.find(item => item.id === id),

  createItem: (newItem) => {
    const id = ++currentId;
    const item = { id, ...newItem };
    items.push(item);
    return item;
  },

  updateItem: (id, updatedItem) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...updatedItem };
      return items[index];
    }
    return null;
  },

  deleteItem: (id) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      return true;
    }
    return false;
  }
};