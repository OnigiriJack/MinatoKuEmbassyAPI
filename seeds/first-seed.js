
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dumb').del()
    .then(function () {
      // Inserts seed entries
      return knex('dumb').insert([
        {id: 1, first_name: 'rowValsdfue1',last_name: 'rowVadfflue2'},
        {id: 2, first_name: 'rowsdfdsfValue1',last_name: 'rodfdwValue2'},
        {id: 3, first_name: 'rowValue1',last_name: 'rowVdfdfalue2'},
      ]);
    });
};
