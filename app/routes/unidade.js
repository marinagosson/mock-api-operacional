import { Router } from "express";
import { Unidade } from "../models";

export const unidade = new Router();

unidade.get("/", async (req, res) => { 
  const list  = await Unidade.query(qb => qb).fetchAll();
  res.send(list);
});
unidade.get("/:id", (req, res) => { res.send("TOO - implement!") });
unidade.post("/", (req, res) => { res.send("TOO - implement!") });
unidade.put("/:id", (req, res) => { res.send("TOO - implement!") });
unidade.delete("/:id", (req, res) => { res.send("TOO - implement!") });

