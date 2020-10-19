let express = require("express"); // import package
const knexfile = require("./knexfile");
const knex = require("knex")(knexfile.development);


// Setting up the database connection
const users = knex
  .select()
  .table("users")
  .then((rows) => {
    console.log(rows);
  });

// initialize app
const port = 5000;
const app = express();
// serve static files
app.use(express.static("./"));

/*  app.get("/", (_, res) => {
    res.send("こんにちはジャック💩")
})
*/
app.listen(port, () => {
    console.log(`lisening on http://localhost:${port}`)
})
