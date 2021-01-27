const Knex = require("knex");

//Novas versoes do banco de dados
exports.up = function(knex,Promise) {
    // Criando tabela
  return knex.schema.createTable('users', table =>{
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('email').notNull().unique()
      table.string('password').notNull()
      table.boolean('admin').notNull().defaultTo(false)
  })
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('users')
};
