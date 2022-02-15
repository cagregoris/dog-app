const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //allows access to req.body

// ROUTES
app.get("/dogs", async (req, res) => {
  try {
    const allDogs = await pool.query("SELECT * FROM dogs");
    res.json(allDogs.rows)
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})