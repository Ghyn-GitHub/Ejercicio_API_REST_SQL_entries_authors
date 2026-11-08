// Objeto de conexión a la BBDD
const pool = require("../config/db_pgsql");
const queries = require("../queries/entries.queries");

const getEntriesByEmail = async (email) => {
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(queries.getEntriesByEmail, [email]);
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

const getAllEntries = async () => {
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(queries.getAllEntries);
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

const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(
            queries.createEntry,
            [title, content, email, category]
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

const updateEntry = async (entry) => {
    const { new_title, title, content, email, category } = entry;
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(
            queries.updateEntry,
            [new_title, content, email, category, title]
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

const deleteEntry = async (title) => {
    let client, result;

    try {
        client = await pool.connect();
        result = await client.query(queries.deleteEntry, [title]);
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

const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    updateEntry,
    deleteEntry
};

module.exports = entries;