const ItemStore = require('../models/ItemStore');

exports.getItems = (req, res) => {
  const items = ItemStore.getAllItems();
  res.json(items);
};

exports.getItem = (req, res) => {
  const id = parseInt(req.params.id);
  const item = ItemStore.getItemById(id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
};

exports.createItem = (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newItem = ItemStore.createItem({ name, description });
  res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;

  if (!name && !description) {
    return res.status(400).json({ error: 'At least one field is required' });
  }

  const updatedItem = ItemStore.updateItem(id, { name, description });
  if (!updatedItem) return res.status(404).json({ error: 'Item not found' });

  res.json(updatedItem);
};

exports.deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = ItemStore.deleteItem(id);
  if (!deleted) return res.status(404).json({ error: 'Item not found' });
  res.status(204).send();
};