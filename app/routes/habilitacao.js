import { Router } from "express";
import { Habilitacao } from "../models";

export const habilitacao = new Router();

habilitacao.get("/", (req, res) => { res.send("TOO - implement!") });
habilitacao.get("/:id", (req, res) => { res.send("TOO - implement!") });
habilitacao.post("/", (req, res) => { res.send("TOO - implement!") });
habilitacao.put("/:id", (req, res) => { res.send("TOO - implement!") });
habilitacao.delete("/:id", (req, res) => { res.send("TOO - implement!") });
