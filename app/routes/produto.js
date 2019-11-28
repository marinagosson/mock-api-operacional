import { Router } from "express";
import { Produto } from "../models";

export const produto = new Router();

produto.get("/", (req, res) => { res.send("TOO - implement!") });
produto.get("/:id", (req, res) => { res.send("TOO - implement!") });
produto.post("/", (req, res) => { res.send("TOO - implement!") });
produto.put("/:id", (req, res) => { res.send("TOO - implement!") });
produto.delete("/:id", (req, res) => { res.send("TOO - implement!") });
