
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 2, name: 'rowValue1'},
        {id: 3, name: 'rowValue2'},
        {id: 4, name: 'rowValue3'}
      ]);
    });
};
