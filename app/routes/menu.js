import { Router } from "express";

export const menu = new Router();

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
    }
    // {
    //   id: 9,
    //   icone: "auditoria",
    //   title: "Auditoria de Preços",
    //   subtitle: "Ajustar informações de estoque e produto",
    //   nativa: true,
    //   ordem: 0,
    //   submenu: []
    // }
  ]);
});
