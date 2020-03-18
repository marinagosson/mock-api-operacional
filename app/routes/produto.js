import { Router } from "express";
// import { Produto } from "../models";

import { produtosAssinante1 } from "./utils/assinante"
import { produtosAssinante2 } from "./utils/assinante"

import { assinante1 } from "./utils/assinante";
import { assinante2 } from "./utils/assinante"

import { hasAssinante, resSendAssinanteNotFound } from "./utils/assinante";

export const produto = new Router();

produto.get("/", async (req, res) => {
  // const { page = 1 } = req.query;
  // const list = await Produto.query(qb =>
  //   qb.orderBy("descricao", "asc")
  // ).fetchPage({
  //   withRelated: ["codigosAuxiliares", "preco"],
  //   page,
  //   pageSize: 600
  // });

  if (req.query.assinante) {
    if (req.query.assinante == assinante1) {
      res.send(produtosAssinante1);
    } else if (req.query.assinante == assinante2) {
      res.send(produtosAssinante2);
    }
  } else {
    if (!hasAssinante(req)) {
      res.send(403, resSendAssinanteNotFound);
      return;
    }
    if (req.headers.assinante == assinante1) {
      res.send(produtosAssinante1);
    } else if (req.headers.assinante == assinante2) {
      res.send(produtosAssinante2);
    }
  }

  res.send('nao deu bom');

});
