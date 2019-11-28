import { Router } from "express";
import { Contagem } from "../models";

export const contagem = new Router();

contagem.get("/", (req, res) => { res.send("TOO - implement!") });
contagem.get("/:id", (req, res) => { res.send("TOO - implement!") });
contagem.post("/", (req, res) => { res.send("TOO - implement!") });
contagem.put("/:id", (req, res) => { res.send("TOO - implement!") });
contagem.delete("/:id", (req, res) => { res.send("TOO - implement!") });
