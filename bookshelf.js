const knex = require('knex')(dbConfig)
module.exports = require('bookshelf')(knex)

// elsewhere, to use the bookshelf client:
const bookshelf = require('./bookshelf')

const Post = bookshelf.model('Post', {
  // ...
})