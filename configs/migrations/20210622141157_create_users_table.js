
exports.up = async function(knex) {
  try {
    await knex.schema.createTable(
      'users', table => {
        table.increments('id').primary();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('name').notNullable();
        table.string('user_img').notNullable();
        table.timestamps(true, true);

        table.unique('email');
      }
    )
  } catch (error) {
    console.log(error);
  }
};

exports.down = async function(knex) {
  try {
    await knex.schema.dropTable('users')
  } catch (error) {
    console.log(error);
  }
};