import { Router } from "express";
import { Produto } from "../models";

export const produto = new Router();

produto.get("/", async (req, res) => { 
  const {page = 1} = req.query
  const list  = await Produto.query(qb => qb).fetchPage({withRelated:['codigosAuxiliares'], page, pageSize: 600});
  // const list  = await Produto.query(qb => qb).fetchAll({withRelated:['codigosAuxiliares'], debug: true});
  res.send(list);
 });
produto.get("/:id", (req, res) => { res.send("TOO - implement!") });
produto.post("/", (req, res) => { res.send("TOO - implement!") });
produto.put("/:id", (req, res) => { res.send("TOO - implement!") });
produto.delete("/:id", (req, res) => { res.send("TOO - implement!") });
