const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'secreto',
  port: 5432
});


const createTable = (request, response) => {
  const name = request.body

  db.query('CREATE TABLE users (code char(5) CONSTRAINT firstkey PRIMARY KEY, title varchar(40) NOT NULL)', (error, results) => {
    if (error) {
      response.send(`Table error`)
      throw error
    }
    response.status(201).send(`Table created`)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.user_id)

  pool.query('SELECT * FROM user WHERE user_name = $1', [id], (error, results) => {
    if (error) {
      response.send(`Table created`);
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUsers = (request, response) => {
  pool.query('SELECT * FROM user', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
createTable,
getUserById,
getUsers
};