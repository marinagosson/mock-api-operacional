import { Router } from "express";
import { configPrecoAssinante1 } from "./utils/assinante1/tipoPreco";
import { configPrecoAssinante2 } from "./utils/assinante2/tipoPreco";

import { assinante2 } from "./utils/assinante"
import { assinante1 } from "./utils/assinante"

import { hasAssinante, resSendAssinanteNotFound } from "./utils/assinante";

export const assinante = new Router();

assinante.get("/", async (req, res) => {
  if (!hasAssinante(req)) {
    res.send(403, resSendAssinanteNotFound);
    return;
  }
  if (req.headers.assinante == assinante1)
    res.send({
      id: 1,
      cnpj: "96.771.010/0001-08",
      ativo: true,
      descricao: "Super Mercado Casa Magalhães",
      configPreco: configPrecoAssinante1
    });
  if (req.headers.assinante == assinante2)
    res.send({
      id: 2,
      cnpj: "12.088.491/0001-53",
      ativo: true,
      descricao: "Supermercado Frangolandia",
      configPreco: configPrecoAssinante2
    });
});
