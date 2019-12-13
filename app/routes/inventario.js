import { Router } from "express";
import { Inventario } from "../models";

export const inventario = new Router();

inventario.get("/", (req, res) => {
  res.send([
    {
      id: 654987,
      description: "Inicio do mes",
      store_id: 123456,
      observation: "Lorem impsum",
      ultima_contagem: 0,
      tipo_contagem: "simples",
      produtos_registrados: false,
      produtos_avulsos: false,
      produtos: [654, 987, 654, 987, 321, 654, 987]
    },
    {
      id: 321654,
      description: "Fim de mes",
      store_id: 123456,
      observation: "Lorem impsum",
      ultima_contagem: 0,
      tipo_contagem: "simples",
      produtos_registrados: false,
      produtos_avulsos: false,
      produtos: [6548, 32165, 46846844, 321657489, 32165498, 3456, 987]
    }
  ]);
});
inventario.get("/:id", (req, res) => {
  res.send("TOO - implement!");
});
inventario.post("/", (req, res) => {
  res.send("TOO - implement!");
});
inventario.put("/:id", (req, res) => {
  res.send("TOO - implement!");
});
inventario.delete("/:id", (req, res) => {
  res.send("TOO - implement!");
});
