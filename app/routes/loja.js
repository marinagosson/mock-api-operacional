import { Router } from "express";
import { Loja } from "../models";

export const loja = new Router();

loja.get("/", (req, res) => { res.send("TOO - implement!") });
loja.get("/:id", (req, res) => { res.send("TOO - implement!") });
loja.post("/", (req, res) => { res.send("TOO - implement!") });
loja.put("/:id", (req, res) => { res.send("TOO - implement!") });
loja.delete("/:id", (req, res) => { res.send("TOO - implement!") });
