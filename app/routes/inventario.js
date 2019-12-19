import { Router } from "express";
import { Inventario } from "../models";

export const inventario = new Router();

inventario.get("/", (req, res) => {
  res.send([
    {
      id: 654987,
      description: "Inicio do mes",
      store_id: 1,
      observation: "Lorem impsum",
      ultima_contagem: 0,
      tipo_contagem: "simples",
      produtos_registrados: false,
      produtos_avulsos: false,
      produtos: ["1082", "1326", "1463", "1452", "1261", "1259", "7896864400321.0", "1176"]
    },
    {
      id: 321654,
      description: "Fim de mes",
      store_id: 1,
      observation: "Lorem impsum",
      ultima_contagem: 0,
      tipo_contagem: "simples",
      produtos_registrados: false,
      produtos_avulsos: false,
      produtos: ["1201", "1337", "735201111995.0", "1365", "1472", "1464", "78935495", "929"]
    }
  ]);
});

inventario.get("/:id", (req, res) => {
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
      produtos: ["1082", "1326", "1463", "1452", "1261", "1259", "7896864400321.0", "1176"]
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
      produtos: ["1201", "1337", "735201111995.0", "1365", "1472", "1464", "78935495", "929"]
    }
  ]);
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
