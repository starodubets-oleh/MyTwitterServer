// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'project',
      user:     'root',
      password: 'Zaq12wsx!'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
