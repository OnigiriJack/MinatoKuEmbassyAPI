let express = require("express"); // import package

var knex = require('knex')({
    client: 'postgres',
    connection: {
      host : '127.0.0.1',
      user : 'jackfowler',
      database : 'solo_api'
    }
  });

 const users = knex 
 .select()
 .table("users")
 .then((rows) => {
console.log(rows)
 })

 console.log(users)
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
