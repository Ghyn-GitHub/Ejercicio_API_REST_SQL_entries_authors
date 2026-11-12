const author = require("../models/author.model");

// Consultar todos los autores o un autor por email
const getAuthor = async (req, res) => {
  try {
    let authors;

    if (req.query.email) {
      authors = await author.getAuthorByEmail(req.query.email);
    } else {
      authors = await author.getAuthors();
    }

    res.status(200).json(authors);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al obtener los autores" });
  }
};

// Crear autor
const createAuthor = async (req, res) => {
  try {
    const newAuthor = req.body; // {name,surname,email,image}
    await author.createAuthor(newAuthor);
    res.status(201).json({
      message: `usuario creado: ${newAuthor.email}`,
    });
  } catch (err) {
    console.log(err);

    if (err.code === "23505") {
      return res.status(409).json({
        message: "Este email ya está registrado",
      });
    }

    res.status(500).json({ error: "Error al crear el autor" });
  }
};

// Actualizar autor
const updateAuthor = async (req, res) => {
  try {
    const editedAuthor = req.body;
    const response = await author.updateAuthor(editedAuthor);

    if (response === 0) {
      return res.status(404).json({
        message: "No se ha encontrado el autor",
      });
    }

    res.status(200).json({
      message: `Usuario actualizado: ${editedAuthor.new_email}`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al actualizar el autor" });
  }
};

// Eliminar autor
const deleteAuthor = async (req, res) => {
  try {
    const email = req.body.email;
    const response = await author.deleteAuthor(email);

    if (response === 0) {
      return res.status(404).json({
        message: "No se ha encontrado el autor",
      });
    }

    res.status(200).json({
      message: `Se ha borrado ${email}`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al eliminar el autor" });
  }
};

module.exports = {
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
