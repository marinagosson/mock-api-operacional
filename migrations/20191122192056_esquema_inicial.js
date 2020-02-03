exports.up = async knex => {
  await knex.schema.createTable("assinante", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.string("cnpj")
      .unique()
      .notNullable();
    tb.boolean("ativo")
      .notNullable()
      .defaultTo(true);
    tb.text("descricao");
  });
  await knex.schema.createTable("loja", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
			.onDelete("cascade");
    tb.integer("qtdCodigoProdutoEAN").notNullable().defaultTo(4);
    tb.integer("qtdGramasPesoBalanca").notNullable();
    tb.text("nome_fantasia");
    tb.text("endereco");
    tb.boolean("ativo")
      .notNullable()
      .defaultTo(true);
  });
  await knex.schema.createTable("funcionario", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
      .onDelete("cascade");
    tb.text("descricao");
    tb.string("apelido")
      .unique()
      .notNullable();
    tb.string("senha").notNullable();
    tb.boolean("ativo")
      .notNullable()
      .defaultTo(true);
  });
  await knex.schema.createTable("loja_funcionario", tb => {
    tb.integer("lojaId")
      .notNullable()
      .references("loja.id")
      .onDelete("cascade");
    tb.integer("funcionarioId")
      .notNullable()
      .references("funcionario.id")
      .onDelete("cascade");
    tb.primary("lojaId", "funcionarioId");
  });
  await knex.schema.createTable("habilitacao", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
      .onDelete("cascade");
    tb.string("token").notNullable();
    tb.string("razaoSocial").notNullable();
    tb.enu("software", ["VAREJOFACIL", "SYSPDV", "MILENIO"]).notNullable();
    tb.string("url")
      .notNullable()
      .comment("endereço da API ou do Client");
  });
  await knex.schema.createTable("dispositivo", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
      .onDelete("cascade");
    tb.string("uuid").notNullable();
    tb.string("fabricante").notNullable();
    tb.string("modelo").notNullable();
    tb.string("versao")
      .notNullable()
      .comment("versão do S.O.");
    tb.string("so").notNullable();
    tb.string("dispositivo").notNullable();
  });
  await knex.schema.createTable("unidade", tb => {
    tb.integer("id").notNullable();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
      .onDelete("cascade");
    tb.string("codigo").notNullable();
    tb.string("descricao").notNullable();
    tb.primary(["id"]);
  });
  await knex.schema.createTable("produto", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
      .onDelete("cascade");
    tb.integer("produtoId").comment("id do produto no software de retaguarda");
    tb.integer("produtoCodigo").comment(
      "o código do produto no software de retaguarda. É referenciado no inventário"
    );
    tb.text("descricao");
    tb.boolean("ativo")
      .notNullable()
      .defaultTo(true);
    tb.boolean("novo")
      .notNullable()
      .defaultTo(false);
    tb.boolean("balanca");
    tb.integer("quantidadeEmbalagens")
      .notNullable()
      .defaultTo(1);
    tb.integer("quantidadeItensEmbalagens")
      .notNullable()
      .defaultTo(1);
    tb.string("unidadeVenda").notNullable();
    tb.enu("tipoVenda", [
      "FRACIONADA",
      "UNITARIA",
      "UNITARIA_MULTIPLICACAO",
      "FRACIONADA_ETIQUETA_PESO"
    ]);
    tb.string("pesoVariavel").notNullable();
  });
  await knex.schema.createTable("codigo_auxiliar", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
      .onDelete("cascade");
    tb.integer("fator")
      .notNullable()
      .defaultTo(1);
    tb.enu("tipo", ["LITERAL", "EAN"]);
    tb.integer("produtoCodigo")
      .notNullable()
      .references("produto.id")
      .onDelete("cascade");
    tb.string("codigo_ean");
    tb.string("codigo_aux");
    tb.boolean("principal")
      .notNullable()
      .defaultTo(false);
  });
  await knex.schema.createTable("preco", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
      .onDelete("cascade");
    tb.integer("produtoCodigo")
      .notNullable()
      .references("produto.id")
      .onDelete("cascade");
    tb.integer("lojaId")
      .notNullable()
      .references("loja.id")
      .onDelete("cascade");
    tb.decimal("preco1");
    tb.decimal("preco2");
    tb.decimal("preco3");
    tb.decimal("preco_oferta1");
    tb.decimal("preco_oferta2");
    tb.decimal("preco_oferta3");
    tb.decimal("preco_venda1");
    tb.decimal("preco_venda2");
    tb.decimal("preco_venda3");
  });
  await knex.schema.createTable("config_produto", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
      .onDelete("cascade");
    tb.integer("digitosEANBalanca").notNullable();
    tb.integer("fatorEANBalanca").notNullable();
  });
  await knex.schema.createTable("inventario", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
      .onDelete("cascade");
    tb.integer("inventarioId")
      .notNullable()
      .comment("ID do inventário no software de retaguarda");
    tb.integer("numeroContagem").notNullable();
    tb.text("descricao");
    tb.enu("xstatus", ["ABERTO", "CONTANDO", "ENCERRADO"]);
    tb.enu("tipoContagem", ["SIMPLES", "MULTIPLA"]);
    tb.boolean("permiteProdutosAvulsos")
      .notNullable()
      .defaultTo(false);
    tb.boolean("permiteApenasProdutosCadastrados")
      .notNullable()
      .defaultTo(false);
  });
  await knex.schema.createTable("inventario_produto", tb => {
    tb.integer("inventarioId")
      .notNullable()
      .references("inventario.id")
      .onDelete("cascade");
    tb.integer("produtoId")
      .notNullable()
      .references("produto.produtoId")
      .onDelete("cascade");
    tb.primary("inventarioId", "produtoId");
  });
  return await knex.schema.createTable("contagem", tb => {
    tb.increments();
    tb.timestamps(true, true);
    tb.integer("assinanteId")
      .notNullable()
      .references("assinante.id")
      .onDelete("cascade");
    tb.integer("inventarioId")
      .notNullable()
      .references("inventario.id")
      .onDelete("cascade");
    tb.integer("produtoId")
      .notNullable()
      .references("produto.produtoId")
      .onDelete("cascade");
    tb.integer("funcionarioId")
      .notNullable()
      .references("funcionario.id")
      .onDelete("cascade");
    tb.integer("quantidadeEmbalagens")
      .notNullable()
      .defaultTo(1);
    tb.integer("quantidadeItensEmbalagens")
      .notNullable()
      .defaultTo(1);
    tb.timestamp("momentoContagem")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = async knex => {
  await knex.schema.dropTable("contagem");
  await knex.schema.dropTable("inventario_produto");
  await knex.schema.dropTable("inventario");
  await knex.schema.dropTable("preco");
  await knex.schema.dropTable("codigo_auxiliar");
  await knex.schema.dropTable("config_produto");
  await knex.schema.dropTable("produto");
  await knex.schema.dropTable("unidade");
  await knex.schema.dropTable("dispositivo");
  await knex.schema.dropTable("habilitacao");
  await knex.schema.dropTable("loja_funcionario");
  await knex.schema.dropTable("funcionario");
  await knex.schema.dropTable("loja");
  return await knex.schema.dropTable("assinante");
};
