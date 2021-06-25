
exports.up = async function(knex) {
  try {
    await knex.schema.createTable(
      'posts', table => {
        table.increments('id').primary();
        table.string('content').notNullable();
        table.integer('user_id').notNullable().unsigned();
        table.timestamps(true, true);

        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      }
    )
  } catch (error) {
    console.log(error);
  }
};

exports.down = async function(knex) {
  try {
    await knex.schema.dropTable('posts')
  } catch (error) {
    console.log(error);
  }
};
