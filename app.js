let express = require("express"); // import package
const knexfile = require("./knexfile");
// Setting up the database connection
const knex = require("knex")(knexfile.development);
  
// initialize app
const port = 5000;
const app = express();
// serve static files

app.use(express.static("/"));

app.get("/", (_, res) => {
   knex
  .select()
  .table("dumb")
  .then((rows) => {
    res.send(rows)
  }); 
})

app.listen(port, () => {
    console.log(`lisening on http://localhost:${port}`)
})
