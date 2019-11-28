import { Router } from "express";
import { Inventario } from "../models";

export const inventario = new Router();

inventario.get("/", (req, res) => { res.send("TOO - implement!") });
inventario.get("/:id", (req, res) => { res.send("TOO - implement!") });
inventario.post("/", (req, res) => { res.send("TOO - implement!") });
inventario.put("/:id", (req, res) => { res.send("TOO - implement!") });
inventario.delete("/:id", (req, res) => { res.send("TOO - implement!") });
