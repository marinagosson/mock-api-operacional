import { Router } from "express";

export const menu = new Router();

menu.get("/", async (req, res) => {
  res.send([
    {
      id: 8,
      icone: "boxes",
      title: "Estoque",
      subtitle: "Lorem impsum",
      nativa: true,
      ordem: 0,
      submenu: [
        {
          id: 243,
          parentId: 8,
          title: "Inventário de Produtos",
          subtitle: "Lorem impsum",
          nativa: true,
          ordem: 0,
          submenu: []
        }
      ]
    }
  ]);
});
