import { Router } from "express";
import { Funcionario } from "../models";

export const funcionario = new Router();

funcionario.get("/", (req, res) => { res.send("TOO - implement!") });
funcionario.get("/:id", (req, res) => { res.send("TOO - implement!") });
funcionario.post("/", (req, res) => { res.send("TOO - implement!") });
funcionario.put("/:id", (req, res) => { res.send("TOO - implement!") });
funcionario.delete("/:id", (req, res) => { res.send("TOO - implement!") });
