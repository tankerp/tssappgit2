//including pg library and destructuring Pool logic from it

const { Pool } = require("pg")

const pool = new Pool()

module.exports = {
  query: (text, params) => pool.query(text, params)
}

/*
{
  user: "postgres",
  host: "localhost",
  database: "yelp",
  password: "himadou",
  port: 5432
}
*/
