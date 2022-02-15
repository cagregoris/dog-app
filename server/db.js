const Pool = require("pg").Pool;

const pool = new Pool({
  user: "carolynscobie",
  password: "labber",
  host: "localhost",
  database: "dog_finder",
  port: 5432
});

module.exports = pool;