import { Router } from "express";
import { Produto } from "../models";

import { listPage1 } from "./produto-utils/listPage1"; 
import { listPage2 } from "./produto-utils/listPage2"; 
import { listPage3 } from "./produto-utils/listPage3"; 

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

  const list = [...listPage1, ...listPage2, ...listPage3];
  res.send(list);
});
