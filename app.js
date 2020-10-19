let express = require("express"); // import package
const knexfile = require("./knexfile");
// Setting up the database connection
const knex = require("knex")(knexfile.development);
  
// initialize app
const port = 5000;
const app = express();
// serve static files

app.use(express.static("client"));
app.get("/api/embassies", (_, res) => {
    knex
   .select()
   .table("embassies")
   .then((rows) => {
     res.send(rows)
   }); 
 }) 

app.listen(port, () => {
    console.log(`lisening on http://localhost:${port}`)
})
