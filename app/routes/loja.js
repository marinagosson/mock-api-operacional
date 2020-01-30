import { Router } from "express";
import { Loja } from "../models";

export const loja = new Router();

loja.get("/", async (req, res) => {
  const list = [
    {
      id: 1,
      nome_fantasia: "SUPERMERCADO SIMARA LTDA",
      endereco: "RUA EXP. ANTONIO CAETANO DE SOUZA FILHO",
      url_image: "https://operacional.herokuapp.com/images/loja1.jpg",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 4,
        qtdDecimaisEtiquetaPeso: 0
      }
    },
    {
      id: 2,
      nome_fantasia: "SUPERMERCADO SIMARA LTDA",
      endereco: "RUA EXP. ANTONIO CAETANO DE SOUZA FILHO",
      url_image: "https://operacional.herokuapp.com/images/loja2.png",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 4,
        qtdDecimaisEtiquetaPeso: 0
      }
    },
    {
      id: 3,
      nome_fantasia: "SUPERMERCADO SIMARA LTDA",
      endereco: "RUA EXP. ANTONIO CAETANO DE SOUZA FILHO",
      url_image: "https://operacional.herokuapp.com/images/loja3.jpg",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 4,
        qtdDecimaisEtiquetaPeso: 0
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
