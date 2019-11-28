import { Router } from "express";
import { Assinante } from "../models";

export const assinante = new Router();

assinante.get("/", async (req, res) => { 
  const list  = await Assinante.query(qb => qb).fetchPage({ page:1, pageSize:10 });
  res.send(list);
});
assinante.get("/:id", (req, res) => { res.send("TOO - implement!") });
assinante.post("/", (req, res) => { res.send("TOO - implement!") });
assinante.put("/:id", (req, res) => { res.send("TOO - implement!") });
assinante.delete("/:id", (req, res) => { res.send("TOO - implement!") });
