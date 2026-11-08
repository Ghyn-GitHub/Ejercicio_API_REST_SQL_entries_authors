// Objeto de conexión a la BBDD
const pool = require("../config/db_pgsql");
const queries = require("../queries/author.queries");

const getAuthorByEmail = async (email) => {
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(queries.getAuthorByEmail, [email]);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (client) {
            client.release();
        }
    }

    return result.rows;
};

const getAuthors = async () => {
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(queries.getAuthors);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (client) {
            client.release();
        }
    }

    return result.rows;
};

const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(
            queries.createAuthor,
            [name, surname, email, image]
        );
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (client) {
            client.release();
        }
    }

    return result.rowCount;
};

const updateAuthor = async (author) => {
    const { new_email, name, surname, email, image } = author;
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(
            queries.updateAuthor,
            [name, surname, new_email, image, email]
        );
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (client) {
            client.release();
        }
    }

    return result.rowCount;
};

const deleteAuthor = async (email) => {
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(queries.deleteAuthor, [email]);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (client) {
            client.release();
        }
    }

    return result.rowCount;
};

const authors = {
    getAuthorByEmail,
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
};

module.exports = authors;