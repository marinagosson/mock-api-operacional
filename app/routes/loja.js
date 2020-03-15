import { Router } from "express";
import { Loja } from "../models";

export const loja = new Router();

loja.get("/", async (req, res) => {
  const lojasJoao = [
    {
      id: 1,
      nome_fantasia: "Spike Supermercado",
      endereco: "Rua Herculano da Silva 987 – Lagoa Redonda",
      url_image: "https://operacional.herokuapp.com/images/loja1.png",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 4,
        qtdDecimaisEtiquetaPeso: 0
      }
    },
    {
      id: 2,
      nome_fantasia: "Pixel Supermercado",
      endereco: "Rua Ana Castro 567 – Sabiaguaga",
      url_image: "https://operacional.herokuapp.com/images/loja2.png",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 4,
        qtdDecimaisEtiquetaPeso: 0
      }
    },
    {
      id: 3,
      nome_fantasia: "Supermercado Junkie",
      endereco: "Rua Vila do Mauro 123 – Granja Portugal",
      url_image: "https://operacional.herokuapp.com/images/loja3.png",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 4,
        qtdDecimaisEtiquetaPeso: 0
      }
    }
  ];

  const lojasMaria = [
    {
      id: 1,
      nome_fantasia: "Deluxe Supermercado",
      endereco: "Travessa Brigadeiro Torres 23 – Henrique Jorge",
      url_image: "https://operacional.herokuapp.com/images/loja11.png",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 4,
        qtdDecimaisEtiquetaPeso: 0
      }
    }
  ];

  if (req.headers.assinante == "joao") res.send(lojasJoao);
  if (req.headers.assinante == "maria") res.send(lojasMaria);
});
