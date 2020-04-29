import { Router } from "express";
import { Inventario } from "../models";
import { hasAssinante, resSendAssinanteNotFound } from "./utils/assinante";

import { assinante1 } from "./utils/assinante";
import { assinante2 } from "./utils/assinante";

export const inventario = new Router();

var inventariosLoja1 = [
  {
    id: 12346,
    description: "Inventario 1",
    store_id: 1,
    observation: "Permite produto avulso",
    produtos_avulsos: true,
    ultima_contagem: 0,
    tipo_contagem: "simples",
    produtos_registrados: false,
    produtos: [
      "1082",
      "1326",
      "1463",
      "1452",
      "1261",
      "1259",
      "7896864400321",
      "1176",
      "1340",
      "1396",
      "2211",
      "2107",
      "2108",
    ],
  },
  {
    id: 456789,
    description: "Inventario 2",
    store_id: 1,
    observation: "Não permite produto avulso",
    produtos_avulsos: false,
    ultima_contagem: 0,
    tipo_contagem: "simples",
    produtos_registrados: false,
    produtos: [
      "1201",
      "1337",
      "1365",
      "1472",
      "1464",
      "929",
      "2132",
      "2219",
      "3740",
      "842",
    ],
  },
];
var inventariosLoja2 = [
  {
    id: 789456,
    description: "Inventario 1",
    store_id: 2,
    observation: "Permite produto avulso",
    produtos_avulsos: true,
    ultima_contagem: 0,
    tipo_contagem: "simples",
    produtos_registrados: false,
    produtos: [
      "1201",
      "1337",
      "735201111995",
      "1365",
      "1472",
      "1464",
      "78935495",
      "929",
    ],
  },
  {
    id: 321654,
    description: "Inventario 2",
    store_id: 2,
    observation: "Não permite produto avulso",
    produtos_avulsos: false,
    ultima_contagem: 0,
    tipo_contagem: "simples",
    produtos_registrados: false,
    produtos: [
      "1082",
      "1326",
      "1463",
      "1452",
      "1261",
      "1259",
      "7896864400321",
      "1176",
    ],
  },
];

inventario.get("/", (req, res) => {
  if (!hasAssinante(req)) {
    res.send(403, resSendAssinanteNotFound);
    return;
  }
  if (req.headers.assinante == assinante1) {
    res.send([...inventariosLoja1, ...inventariosLoja2]);
  } else {
    res.send([...inventariosLoja1]);
  }
});

inventario.get("/:id", (req, res) => {
  var loja1 = 1;
  var loja2 = 2;

  if (req.params.id == loja1) res.send(inventariosLoja1);

  if (req.params.id == loja2) res.send(inventariosLoja2);

  res.send([]);
});

// inventario.post("/", (req, res) => {
//   res.send("TOO - implement!");
// });
// inventario.put("/:id", (req, res) => {
//   res.send("TOO - implement!");
// });
// inventario.delete("/:id", (req, res) => {
//   res.send("TOO - implement!");
// });
