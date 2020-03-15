import { Router } from "express";
import { Produto } from "../models";

import { produtos as produtosAssinante1} from "./utils/assinante1/produtos";
import { produtos as produtosAssinante2} from "./utils/assinante2/produtos";

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

  if (!hasAssinante(req)) {
    res.send(403, resSendAssinanteNotFound);
    return;
  }

  if (req.headers.assinante == "joao") {
    res.send(produtosAssinante1);
  } else if (req.headers.assinante == "maria") {
    res.send(produtosAssinante2);
  }

});

// function createFile(list) {
//   var fs = require('fs');
//   var exp = JSON.stringify(list);
//   fs.writeFile('produtos.js', 'export const produtos = ' + exp + ';', function (err) {
//     if (err) throw err;
//     console.log('File is created successfully.');
//   });
// }
