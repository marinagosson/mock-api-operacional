import { Router } from "express";

import { listPage1 as assinante1ProdutosPage1 } from "./utils/assinante1/listPage1";
import { listPage2 as assinante1ProdutosPage2 } from "./utils/assinante1/listPage2";
import { listPage3 as assinante1ProdutosPage3 } from "./utils/assinante1/listPage3";

import { listPage1 as assinante2ProdutosPage1 } from "./utils/assinante2/listPage1";
import { listPage2 as assinante2ProdutosPage2 } from "./utils/assinante2/listPage2";
import { listPage3 as assinante2ProdutosPage3 } from "./utils/assinante2/listPage3";

import { configPrecoAssinante1 } from "./utils/assinante1/tipoPreco";
import { configPrecoAssinante2 } from "./utils/assinante2/tipoPreco";


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

  var list = [];
  var configPreco;

  if (!hasAssinante(req)) {
    res.send(403, resSendAssinanteNotFound);
    return;
  }

  if (req.headers.assinante == "joao") {
    list = [
      ...assinante1ProdutosPage1,
      ...assinante1ProdutosPage2,
      ...assinante1ProdutosPage3
    ];
    configPreco = configPrecoAssinante1;
  } else if (req.headers.assinante == "maria") {
    list = [
      ...assinante2ProdutosPage1,
      ...assinante2ProdutosPage2,
      ...assinante2ProdutosPage3
    ];
    configPreco = configPrecoAssinante2;
  }

  console.log(list.length.toString());


  if (req.headers.assinante == "joao") {
    var idProd = 1;
    for (var i = 0; i < list.length; i++) {
      let itemLista = list[i];
      var preco = itemLista.preco;
      list[i].precos = [
        // venda - preco 1
        {
          id: idProd++,
          valor: formatValue(preco.preco1, 2.2),
          oferta: false,
          venda: true,
          loja_id: 1,
          produto_id: itemLista.id,
          tipoPreco: configPreco[0]
        },
        // oferta - preco 1
        {
          id: idProd++,
          valor: formatValue(preco.preco1, 1.5),
          oferta: true,
          venda: false,
          produto_id: itemLista.id,
          loja_id: 1,
          tipoPreco: configPreco[0]
        },
        // venda - preco 2
        {
          id: idProd++,
          valor: formatValue(preco.preco1, 3.3),
          oferta: false,
          venda: true,
          produto_id: itemLista.id,
          loja_id: 1,
          tipoPreco: configPreco[2]
        },
        // oferta - preco 2
        {
          id: idProd++,
          valor: formatValue(preco.preco1, 1.4),
          oferta: true,
          venda: false,
          loja_id: 2,
          produto_id: itemLista.id,
          tipoPreco: configPreco[1]
        },
        // venda - preco 3
        {
          id: idProd++,
          valor: formatValue(preco.preco1, 3.6),
          oferta: false,
          venda: true,
          produto_id: itemLista.id,
          loja_id: 2,
          tipoPreco: configPreco[2]
        },
        // oferta - preco 3
        {
          id: idProd++,
          valor: formatValue(preco.preco1, 2.5),
          oferta: true,
          venda: false,
          produto_id: itemLista.id,
          loja_id: 2,
          tipoPreco: configPreco[2]
        }
      ];

      delete itemLista.preco;

    }

  } else if (req.headers.assinante == "maria") {
    var idProd = 1;
    for (var i = 0; i < list.length; i++) {
      let itemLista = list[i];
      const preco = itemLista.preco;

      list[i].precos = [
        // venda - preco 1
        {
          id: idProd++,
          valor: formatValue(preco.preco1, 2),
          oferta: false,
          venda: true,
          produto_id: itemLista.id,
          loja_id: 1,
          tipoPreco: configPreco[0]
        },
        // oferta - preco 1
        {
          id: idProd++,
          valor: formatValue(preco.preco1, 1),
          oferta: true,
          venda: false,
          produto_id: itemLista.id,
          loja_id: 1,
          tipoPreco: configPreco[0]
        }
      ];
      delete itemLista.preco;
    }
  }

  createFile(list);
  res.send("ok");

});

function formatValue(valor, multiplicador) {
  return parseFloat((valor * multiplicador).toPrecision(2));
}

function createFile(list) {
  var fs = require('fs');
  var newList1 = JSON.stringify(list.slice(0, 562)); // 0 - 562
  var newList2 = JSON.stringify(list.slice(562, 1124)); // 562 - 1124
  var newList3 = JSON.stringify(list.slice(1124, 1686)); // 1124 - 1686
  fs.writeFile('newList1.js', 'export const produtos = ' + newList1 + ";", function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
  fs.writeFile('newList2.js', 'export const produtos = ' + newList2 + ";", function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
  fs.writeFile('newList3.js', 'export const produtos = ' + newList3 + ";", function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
}
