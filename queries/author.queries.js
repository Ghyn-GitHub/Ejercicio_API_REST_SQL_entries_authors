const queries = {
  // GET
  getAuthors: `
    SELECT * FROM authors
    `,
  getAuthorByEmail: `
    SELECT * FROM authors
    WHERE email = $1
    `,

  // POST
  createAuthor: `
    INSERT INTO authors (name, surname, email, image)
    VALUES ($1, $2, $3, $4)
    `,

  // PUT
  updateAuthor: `
    UPDATE authors
    SET name = $1,
        surname = $2,
        email = $3,
        image = $4
    WHERE email = $5
    `,

  // DELETE
  deleteAuthor: `
    DELETE FROM authors
    WHERE email = $1
    `,
};

module.exports = queries;
