import { Router } from "express";
// import { Produto } from "../models";

import { produtosAssinante1 } from "./utils/assinante"
import { produtosAssinante2 } from "./utils/assinante"

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
    if (req.query.assinante == 'joao') {
      res.send(produtosAssinante1);
    } else if (req.query.assinante == 'maria') {
      res.send(produtosAssinante2);
    }
  } else {
    if (!hasAssinante(req)) {
      res.send(403, resSendAssinanteNotFound);
      return;
    }
    if (req.headers.assinante == "joao") {
      res.send(produtosAssinante1);
    } else if (req.headers.assinante == "maria") {
      res.send(produtosAssinante2);
    }
  }

  res.send('nao deu bom');

});
