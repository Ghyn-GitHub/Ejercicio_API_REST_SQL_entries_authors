const queries = {
  // GET
  getAllEntries: `
    SELECT *
    FROM entries
    `,

  getEntriesByEmail: `
    SELECT e.title, e.content, e.date, e.category, a.name, a.surname, a.image
    FROM entries AS e
    INNER JOIN authors AS a
        ON e.id_author = a.id_author
    WHERE a.email = $1
    ORDER BY e.title
    `,

  // POST
  createEntry: `
        INSERT INTO entries(title, content, id_author, category)
        VALUES (
            $1,
            $2,
            (SELECT id_author FROM authors WHERE email = $3),
            $4
        )
    `,

  //PUT
  updateEntry: `
        UPDATE entries
        SET title = $1,
            content = $2,
            date = NOW(),
            id_author = (SELECT id_author FROM authors WHERE email = $3),
            category = $4
        WHERE title = $5
    `,

  // DELETE
  deleteEntry: `
    DELETE FROM entries
    WHERE title = $1
    `,
};

module.exports = queries;
