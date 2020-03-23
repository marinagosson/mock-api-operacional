// import { Router } from "express";

// import { listPage1 as assinante1ProdutosPage1 } from "./utils/assinante1/listPage1";
// // import { listPage2 as assinante1ProdutosPage2 } from "./utils/assinante1/listPage2";
// // import { listPage3 as assinante1ProdutosPage3 } from "./utils/assinante1/listPage3";

// import { listPage1 as assinante2ProdutosPage1 } from "./utils/assinante2/listPage1";
// import { listPage2 as assinante2ProdutosPage2 } from "./utils/assinante2/listPage2";
// import { listPage3 as assinante2ProdutosPage3 } from "./utils/assinante2/listPage3";

// import { configPrecoAssinante1 } from "./utils/assinante1/tipoPreco";
// import { configPrecoAssinante2 } from "./utils/assinante2/tipoPreco";

// import { assinante1 } from "./utils/assinante";
// import { assinante2 } from "./utils/assinante"

// import { hasAssinante, resSendAssinanteNotFound } from "./utils/assinante";

// export const produto = new Router();

// produto.get("/", async (req, res) => {
//   // const { page = 1 } = req.query;
//   // const list = await Produto.query(qb =>
//   //   qb.orderBy("descricao", "asc")
//   // ).fetchPage({
//   //   withRelated: ["codigosAuxiliares", "preco"],
//   //   page,
//   //   pageSize: 600
//   // });

//   var list = [];
//   var configPreco;
//   const totalItensAss1 = 100;

//   var ass1 = false;

//   if (req.query.assinante) {
//     if (req.query.assinante == assinante1) {
//       ass1 = true;
//       list = [
//         ...assinante1ProdutosPage1,
//         // ...assinante1ProdutosPage2,
//         // ...assinante1ProdutosPage3
//       ];
//       configPreco = configPrecoAssinante1;
//     } else if (req.query.assinante == assinante2) {
//       ass1 = false;
//       list = [
//         ...assinante2ProdutosPage1,
//         ...assinante2ProdutosPage2,
//         ...assinante2ProdutosPage3
//       ];
//       configPreco = configPrecoAssinante2;
//     }
//   } else if (!hasAssinante(req)) {
//     res.send(403, resSendAssinanteNotFound);
//     return;
//   } else {
//     if (req.headers.assinante == assinante1) {
//       list = [
//         ...assinante1ProdutosPage1,
//         // ...assinante1ProdutosPage2,
//         // ...assinante1ProdutosPage3
//       ];
//       configPreco = configPrecoAssinante1;
//     } else if (req.headers.assinante == assinante2) {
//       list = [
//         ...assinante2ProdutosPage1,
//         ...assinante2ProdutosPage2,
//         ...assinante2ProdutosPage3
//       ];
//       configPreco = configPrecoAssinante2;
//     }
//   }

//   var listAux = list;

//   if (ass1) {
//     var idProd = 1;
//     for (var i = 0; i < totalItensAss1; i++) {
//       let itemLista = list[i];
//       var preco = itemLista.preco;
//       var precos = [];

//       var resto = i % 2;
//       if (resto == 0) {
//         precos = [
//           // venda - preco 1 loja 1
//           formatPrice(idProd++, formatValue(preco.preco1, 2.2), null, itemLista.id, 1, configPreco[0].id),
//           // atacado - preco 2 loja 1
//           formatPrice(idProd++, formatValue(preco.preco1, 3.3), null, itemLista.id, 1, configPreco[1].id),
//           // varejo - preco 3 loja 1
//           formatPrice(idProd++, formatValue(preco.preco1, 3.6), null, itemLista.id, 1, configPreco[2].id),

//           // venda - preco 1 loja 2
//           formatPrice(idProd++, formatValue(preco.preco1, 4.0), null, itemLista.id, 2, configPreco[0].id),
//           // atacado - preco 2 loja 2
//           formatPrice(idProd++, formatValue(preco.preco1, 4.6), null, itemLista.id, 2, configPreco[1].id),
//           // varejo - preco 3 loja 2
//           formatPrice(idProd++, formatValue(preco.preco1, 4.8), null, itemLista.id, 2, configPreco[2].id),

//           // venda - preco 1 loja 3
//           formatPrice(idProd++, formatValue(preco.preco1, 5.0), null, itemLista.id, 3, configPreco[0].id),
//           // atacado - preco 2 loja 3
//           formatPrice(idProd++, formatValue(preco.preco1, 5.6), null, itemLista.id, 3, configPreco[1].id),
//           // varejo - preco 3 loja 3
//           formatPrice(idProd++, formatValue(preco.preco1, 5.8), null, itemLista.id, 3, configPreco[2].id),
//         ];
//       } else {
//         precos = [
//           // venda - preco 1 loja 1
//           formatPrice(idProd++, null, formatValue(preco.preco1, 2.2), itemLista.id, 1, configPreco[0].id),
//           // atacado - preco 2 loja 1
//           formatPrice(idProd++, null, formatValue(preco.preco1, 3.3), itemLista.id, 1, configPreco[1].id),
//           // varejo - preco 3 loja 1
//           formatPrice(idProd++, null, formatValue(preco.preco1, 3.6), itemLista.id, 1, configPreco[2].id),

//           // venda - preco 1 loja 2
//           formatPrice(idProd++, null, formatValue(preco.preco1, 4.0), itemLista.id, 2, configPreco[0].id),
//           // atacado - preco 2 loja 2
//           formatPrice(idProd++, null, formatValue(preco.preco1, 4.6), itemLista.id, 2, configPreco[1].id),
//           // varejo - preco 3 loja 2
//           formatPrice(idProd++, null, formatValue(preco.preco1, 4.8), itemLista.id, 2, configPreco[2].id),

//           // venda - preco 1 loja 3
//           formatPrice(idProd++, null, formatValue(preco.preco1, 5.0), itemLista.id, 3, configPreco[0].id),
//           // atacado - preco 2 loja 3
//           formatPrice(idProd++, formatValue(preco.preco1, 5.6), null, itemLista.id, 3, configPreco[1].id),
//           // varejo - preco 3 loja 3
//           formatPrice(idProd++, null, formatValue(preco.preco1, 5.8), itemLista.id, 3, configPreco[2].id),
//         ];
//       }

//       itemLista.preco_praticado = precos[0].oferta ? precos[0].valor_oferta : precos[0].valor_venda;
//       itemLista.precos = precos;
//       itemLista.preco = null;
//       listAux[i] = itemLista;

//     }

//   } else if (!ass1) {
//     var idProd = 1;
//     for (var i = 0; i < list.length; i++) {
//       var itemLista = list[i];
//       var preco = itemLista.preco;
//       var precos = [];
//       var resto = i % 2;

//       if (resto == 0) {
//         precos = [
//           // venda - preco 1 loja 1
//           formatPrice(idProd++, formatValue(preco.preco1, 2.2), null, itemLista.id, 1, configPreco[0].id),
//         ];
//       } else {
//         precos = [
//           // venda - preco 1 loja 1
//           formatPrice(idProd++, null, formatValue(preco.preco1, 3.2), itemLista.id, 1, configPreco[0].id),
//         ];
//       }

//       itemLista.preco_praticado = precos[0].oferta ? precos[0].valor_oferta : precos[0].valor_venda;
//       itemLista.precos = precos;
//       itemLista.preco = null;
//       listAux[i] = itemLista;
//     }
//   }

//   var createFiles = true;

//   if (createFiles) {
//     const fs = require('fs');
//     const path = require('path');
//     if (ass1) {
//       let baseDir = path.join(__dirname, '/utils/assinante1/');
//       var newList1 = JSON.stringify(list.slice(0, totalItensAss1));
//       fs.writeFile(`${baseDir}newList1.js`, 'export const produtos = ' + newList1 + ";", function (err) {
//         if (err) throw err;
//         console.log('File is created successfully.');
//       });

//     } else {
//       var newList1 = JSON.stringify(list.slice(0, 562)); // 0 - 562
//       var newList2 = JSON.stringify(list.slice(562, 1124)); // 562 - 1124
//       var newList3 = JSON.stringify(list.slice(1124, 1686)); // 1124 - 1686
//       var newList1 = JSON.stringify(list.slice(0, totalItensAss1));
//       let baseDir = path.join(__dirname, '/utils/assinante2/');
//       fs.writeFile(`${baseDir}newList1.js`, 'export const produtos = ' + newList1 + ";", function (err) {
//         if (err) throw err;
//         console.log('File is created successfully.');
//       });
//       fs.writeFile(`${baseDir}newList2.js`, 'export const produtos = ' + newList2 + ";", function (err) {
//         if (err) throw err;
//         console.log('File is created successfully.');
//       });
//       fs.writeFile(`${baseDir}newList3.js`, 'export const produtos = ' + newList3 + ";", function (err) {
//         if (err) throw err;
//         console.log('File is created successfully.');
//       });
//     }

//     res.send(listAux);
//   } else {
//     res.send(listAux);
//   }

// });

// function formatValue(valor, multiplicador) {
//   return parseFloat((valor * multiplicador).toPrecision(2));
// }

// function formatPrice(id, valorOferta, valorVenda, produto_id, loja_id, tipoPreco) {
//   return {
//     id: id,
//     produto_id: produto_id,
//     loja_id: loja_id,
//     tipo_preco: tipoPreco,
//     oferta: valorOferta == null ? false : true,
//     valor_oferta: valorOferta == null ? 0 : valorOferta,
//     venda: valorVenda == null ? false : true,
//     valor_venda: valorVenda == null ? 0 : valorVenda,
//   };
// }

// // function createFile(list) {
// //   var fs = require('fs');
// //   var newList1 = JSON.stringify(list.slice(0, 100)); // 0 - 562
// //   // var newList2 = JSON.stringify(list.slice(562, 1124)); // 562 - 1124
// //   // var newList3 = JSON.stringify(list.slice(1124, 1686)); // 1124 - 1686
// //   fs.writeFile('newList1.js', 'export const produtos = ' + newList1 + ";", function (err) {
// //     if (err) throw err;
// //     console.log('File is created successfully.');
// //   });
// //   // fs.writeFile('newList2.js', 'export const produtos = ' + newList2 + ";", function (err) {
// //   //   if (err) throw err;
// //   //   console.log('File is created successfully.');
// //   // });
// //   // fs.writeFile('newList3.js', 'export const produtos = ' + newList3 + ";", function (err) {
// //   //   if (err) throw err;
// //   //   console.log('File is created successfully.');
// //   // });
// // }
