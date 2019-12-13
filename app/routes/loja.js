import { Router } from "express";
import { Loja } from "../models";

export const loja = new Router();

loja.get("/", async (req, res) => {
  const list = [
    {
      id: 123456,
      cnpj: "77.365.492/0001-43",
      razao_social: "Loja 3 Ltda",
      nome_fantasia: "Sal & Basa Rio Mar",
      url_image:
        "https://media-cdn.tripadvisor.com/media/photo-s/15/13/a4/74/shopping-da-bahia.jpg",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 3,
        qtdDecimaisEtiquetaPeso: 8
      }
    },
    {
      id: 123789,
      cnpj: "77.365.492/0001-43",
      razao_social: "Loja 1 Ltda",
      nome_fantasia: "Sal & Basa Iguatemi",
      url_image:
        "https://media-cdn.tripadvisor.com/media/photo-s/15/13/a4/74/shopping-da-bahia.jpg",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 3,
        qtdDecimaisEtiquetaPeso: 6
      }
    },
    {
      id: 123123,
      cnpj: "15.836.904/0001-29",
      razao_social: "Loja 2 Ltda",
      nome_fantasia: "Sal & Basa Iguatemi",
      url_image:
        "https://media-cdn.tripadvisor.com/media/photo-s/15/13/a4/74/shopping-da-bahia.jpg",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 3,
        qtdDecimaisEtiquetaPeso: 5
      }
    }
  ];
  res.send(list);
});

loja.get("/", (req, res) => {
  res.send("TOO - implement!");
});
loja.get("/:id", (req, res) => {
  res.send("TOO - implement!");
});
loja.post("/", (req, res) => {
  res.send("TOO - implement!");
});
loja.put("/:id", (req, res) => {
  res.send("TOO - implement!");
});
loja.delete("/:id", (req, res) => {
  res.send("TOO - implement!");
});
