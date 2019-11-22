// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './operacional_dev.db'
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './operacional_test.db'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'operacional_prod',
      user:     'postgres',
      password: '123'
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
