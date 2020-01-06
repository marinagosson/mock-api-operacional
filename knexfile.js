// Update with your config settings.

module.exports = {

  development: {
    useNullAsDefault:true,
    client: 'sqlite3',
    connection: {
      filename: './operacional_dev.db'
    }
  },

  test: {
    useNullAsDefault:true,
    client: 'sqlite3',
    connection: {
      filename: './operacional_test.db'
    }
  },

  production: {
    useNullAsDefault:true,
    client: 'sqlite3',
    connection: {
      filename: './operacional.db'
    }
  }

};
