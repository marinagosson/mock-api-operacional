exports.up = async knex => {
  await knex.schema.createTable("assinante", async tb => {
    tb.increments();
    tb.timestamps(true, true);
  });
  await knex.schema.createTable("usuario", async tb => {
    tb.increments();
    tb.timestamps(true, true);
  });
  await knex.schema.createTable("habilitacao", async tb => {
    tb.increments();
    tb.timestamps(true, true);
  });
  await knex.schema.createTable("dispositivo", async tb => {
    tb.increments();
    tb.timestamps(true, true);
  });
  await knex.schema.createTable("loja", async tb => {
    tb.increments();
    tb.timestamps(true, true);
  });
  await knex.schema.createTable("config_produto", async tb => {
    tb.increments();
    tb.timestamps(true, true);
  });
  await knex.schema.createTable("produto", async tb => {
    tb.increments();
    tb.timestamps(true, true);
  });
  await knex.schema.createTable("inventario", async tb => {
    tb.increments();
    tb.timestamps(true, true);
  });
  return await knex.schema.createTable("contagem", async tb => {
    tb.increments();
    tb.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.dropTable("contagem");
  await knex.schema.dropTable("inventario");
  await knex.schema.dropTable("produto");
  await knex.schema.dropTable("config_produto");
  await knex.schema.dropTable("loja");
  await knex.schema.dropTable("dispositivo");
  await knex.schema.dropTable("habilitacao");
  await knex.schema.dropTable("usuario");
  return await knex.schema.dropTable("assinante");
};
