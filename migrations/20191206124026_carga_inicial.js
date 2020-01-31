exports.up = async knex => {

await knex("assinante").insert({
  id: 1,
  cnpj: "96.771.010/0001-08",
  descricao: "Super Mercado Casa Magalhães",
});

return await knex("unidade").insert([
  { id: 82, assinanteId: 1, codigo: "CX", descricao: "Caixa" },
  { id: 83, assinanteId: 1, codigo: "FD", descricao: "Fardo" },
  { id: 84, assinanteId: 1, codigo: "GRS", descricao: "Grosa" },
  { id: 85, assinanteId: 1, codigo: "KG", descricao: "Quilo" },
  { id: 86, assinanteId: 1, codigo: "L", descricao: "Litro" },
  { id: 87, assinanteId: 1, codigo: "LT", descricao: "Lata" },
  { id: 88, assinanteId: 1, codigo: "MIL", descricao: "Milimetros" },
  { id: 89, assinanteId: 1, codigo: "PCT", descricao: "Pacotes" },
  { id: 90, assinanteId: 1, codigo: "SC", descricao: "Saca" },
  { id: 91, assinanteId: 1, codigo:"UN", descricao: "Unidade" },
]);

};

exports.down = async knex => {
await knex("unidade").del();
return await knex("assinante").del().where("id", 1);
};
