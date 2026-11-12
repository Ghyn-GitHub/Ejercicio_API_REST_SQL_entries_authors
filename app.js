// Imports
const express = require('express');
const app = express();

const entriesRoutes = require('./routes/entries.routes');
const authorsRoutes = require('./routes/authors.routes');
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');
const helmet = require("helmet");

// Variables de entorno
require('dotenv').config();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(morgan('[:date[iso]] :method :clean-url :status - :body'));
app.use(helmet());

// Ruta principal
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rutas API
app.use('/api/entries', entriesRoutes);
app.use('/api/authors', authorsRoutes);

// Ruta no encontrada
app.use(error404);

// Arrancar servidor
app.listen(port, () => {
    console.log(`API escuchando en el puerto ${port}`);
});
