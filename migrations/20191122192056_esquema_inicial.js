exports.up = knex => knex.raw("select 1 + 1");

exports.down = knex => knex.raw("select 1 - 1");
