exports.up = async function(knex) {
  try {
    await knex.schema.createTable(
      'comments', table => {
        table.increments('id').primary();
        table.string('content').notNullable();
        table.integer('user_id').notNullable().unsigned();
        table.integer('post_id').notNullable().unsigned();
        table.timestamps(true, true);

        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('post_id').references('id').inTable('posts').onDelete('CASCADE');
      }
    )
  } catch (error) {
    console.log(error);
  }
};

exports.down = async function(knex) {
  try {
    await knex.schema.dropTable('comments')
  } catch (error) {
    console.log(error);
  }
};