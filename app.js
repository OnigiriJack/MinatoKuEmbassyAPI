let express = require("express"); // import package

// Setting up the database connection
const knex = require('knex')({
    client: 'pg',
    connection: {
      host     : '127.0.0.1',
      user     : 'jackfowler',
      password : 'your_database_password',
      database : 'solo_api',
      charset  : 'utf8'
    }
  })
  const bookshelf = require('bookshelf')(knex);


// Defining models
const User = bookshelf.model('User', {
    tableName: 'users'
  })

  // select * from `books` where `ISBN-13` = '9780440180296'
  new User({'id':   1})
    .fetch()
    .then(function(model) {
      // outputs 'Slaughterhouse Five'
      console.log(model.get('name'));
    });

 //console.log(users)
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
