import { Router } from "express";

import { assinante1 } from "./utils/assinante";
import { assinante2 } from "./utils/assinante"

import { produtos as list1Assinante1 } from './utils/assinante1/newList1';
import { produtos as list2Assinante1 } from './utils/assinante1/newList2';
import { produtos as list3Assinante1 } from './utils/assinante1/newList3';

import { produtos as list1Assinante2 } from './utils/assinante2/newList1';
import { produtos as list2Assinante2 } from './utils/assinante2/newList2';
import { produtos as list3Assinante2 } from './utils/assinante2/newList3';

import { hasAssinante, resSendAssinanteNotFound } from "./utils/assinante";

export const produto = new Router();

produto.get("/", async (req, res) => {

  var produtosAssinante1 = [...list1Assinante1, ...list2Assinante1, ...list3Assinante1];
  // var produtosAssinante2 = [...list1Assinante2, ...list2Assinante2, ...list3Assinante2];
  var produtosAssinante2 = [...list1Assinante2,];

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
    } else {
      if (req.headers.assinante == assinante1) {
        res.send(produtosAssinante1);
      } else if (req.headers.assinante == assinante2) {
        res.send(produtosAssinante2);
      } else {
        res.send({ message: "assinante nao informado" });
      }
    }
  }

});
