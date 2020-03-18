import { Router } from "express";
import { Loja } from "../models";
import { hasAssinante, resSendAssinanteNotFound } from "./utils/assinante";

import { assinante1 } from "./utils/assinante";
import { assinante2 } from "./utils/assinante"

export const loja = new Router();

loja.get("/", async (req, res) => {
  if (!hasAssinante(req)) {
    res.send(403, resSendAssinanteNotFound);
    return;
  }
  const lojasJoao = [
    {
      id: 1,
      nome_fantasia: "Spike Supermercado",
      endereco: "Rua Herculano da Silva 987 – Lagoa Redonda",
      url_image: "https://operacional.herokuapp.com/images/loja1.png",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 4,
        qtdDecimaisEtiquetaPeso: 0,
        loja_id: 1
      }
    },
    {
      id: 2,
      nome_fantasia: "Pixel Supermercado",
      endereco: "Rua Ana Castro 567 – Sabiaguaga",
      url_image: "https://operacional.herokuapp.com/images/loja2.png",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 3,
        qtdDecimaisEtiquetaPeso: 0,
        loja_id: 2
      }
    },
    {
      id: 3,
      nome_fantasia: "Supermercado Junkie",
      endereco: "Rua Vila do Mauro 123 – Granja Portugal",
      url_image: "https://operacional.herokuapp.com/images/loja3.png",
      configuracaoProduto: {
        qtdDigitoProdutoPeso: 5,
        qtdDecimaisEtiquetaPeso: 0,
        loja_id: 3
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
        qtdDecimaisEtiquetaPeso: 0,
        loja_id: 1
      }
    }
  ];

  if (req.headers.assinante == assinante1) res.send(lojasJoao);
  if (req.headers.assinante == assinante2) res.send(lojasMaria);
});
