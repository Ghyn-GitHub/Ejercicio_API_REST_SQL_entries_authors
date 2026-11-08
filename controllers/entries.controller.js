const entry = require("../models/entries.model");

// Consultar todas las entradas o entradas filtradas por email
const getEntries = async (req, res) => {
  try {
    let entries;

    if (req.query.email) {
      entries = await entry.getEntriesByEmail(req.query.email);
    } else {
      entries = await entry.getAllEntries();
    }

    res.status(200).json(entries);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al obtener las entries" });
  }
};

// Crear entry por email
const createEntry = async (req, res) => {
  try {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
      items_created: response,
      data: newEntry,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al crear la entrada" });
  }
};

// Actualizar entry
const updateEntry = async (req, res) => {
  try {
    const editedEntry = req.body;
    const response = await entry.updateEntry(editedEntry);

    res.status(200).json({
      items_updated: response,
      data: editedEntry,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al actualizar la entrada" });
  }
};

// Eliminar entry
const deleteEntry = async (req, res) => {
  try {
    const title = req.body.title;
    const response = await entry.deleteEntry(title);

    res.status(200).json({
      items_deleted: response,
      message: `Se ha borrado la entry '${title}'`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al eliminar la entrada" });
  }
};

module.exports = {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
};
