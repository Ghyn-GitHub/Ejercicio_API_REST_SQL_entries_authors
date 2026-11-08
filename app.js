const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Variables de entorno
require('dotenv').config();

// Middleware
app.use(express.json());

// Rutas
const entriesRoutes = require('./routes/entries.routes');
const authorsRoutes = require('./routes/authors.routes');

// Ruta principal
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Rutas API
app.use('/api/entries', entriesRoutes);
app.use('/api/authors', authorsRoutes);

// Arrancar servidor
app.listen(port, () => {
    console.log(`API escuchando en el puerto ${port}`);
});
