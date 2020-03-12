import { Router } from "express";

export const menu = new Router();

menu.get("/401", async (req, res) => {
	res.send(401, {message: "Token invalido"});
});

menu.get("/", async (req, res) => {
  res.send([
    {
      id: 8,
      icone: "estoque",
      title: "Controle de Estoque",
      subtitle: "Contagem de produto",
      nativa: true,
      ordem: 0,
      submenu: [
        {
          id: 243,
          parentId: 8,
          icone: "inventario",
          title: "Inventário de Produtos",
          subtitle: "Lorem impsum",
          nativa: true,
          ordem: 0,
          submenu: []
        }
      ]
    },
    {
      id: 10,
      icone: "compras",
      title: "Compras",
      subtitle: "Lorem impsum",
      nativa: true,
      ordem: 0,
      submenu: [
        {
          id: 987,
          parentId: 10,
          icone: "pedidodecompra",
          title: "Pedido de compra",
          subtitle: "Lorem impsum",
          nativa: true,
          ordem: 0,
          submenu: []
        }
      ]
    },
    {
      id: 11,
      icone: "vendas",
      title: "Vendas",
      subtitle: "Lorem impsum",
      nativa: true,
      ordem: 0,
      submenu: [
        {
          id: 321,
          parentId: 11,
          icone: "pedidodevenda",
          title: "Pedido de venda",
          subtitle: "Lorem impsum",
          nativa: true,
          ordem: 0,
          submenu: []
        }
      ]
    },
    {
      id: 12,
      icone: "auditoria",
      title: "Auditoria",
      subtitle: "Ajuste de estoque e produto",
      nativa: true,
      ordem: 0,
      submenu: [
        {
          id: 123,
          parentId: 12,
          icone: "auditoriadepreco",
          title: "Auditoria de preço",
          subtitle: "Lorem impsum",
          nativa: true,
          ordem: 0,
          submenu: []
        }
      ]
    }
  ]);
});
