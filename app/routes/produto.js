import { Router } from "express";
import { Produto } from "../models";

export const produto = new Router();

produto.get("/", async (req, res) => { 
  const list  = await Produto.query(qb => qb).fetchAll({withRelated:['unidMedida']});
  res.send(list);
 });
produto.get("/:id", (req, res) => { res.send("TOO - implement!") });
produto.post("/", (req, res) => { res.send("TOO - implement!") });
produto.put("/:id", (req, res) => { res.send("TOO - implement!") });
produto.delete("/:id", (req, res) => { res.send("TOO - implement!") });
