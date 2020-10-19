
exports.up = function(knex) {
  return knex.schema
  .createTable('embassies',  (table) =>{
   table.string('type');
  table.string('geometrytype');
  table.float('geometrycoordinates0');
  table.float('geometrycoordinates1');
  table.float('geometrycoordinates2');
  table.string('propertiesname');
  table.string('propertiespc')  
  table.string('propertiescurL') 
  table.string('propertiesphone')  
});
};
exports.down = function(knex) {
  return knex.schema.dropTable("embassies")
};
