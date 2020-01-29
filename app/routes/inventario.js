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
          },
    {
      id: 654987,
      description: "Produto Avulso",
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
    },
    {
      id: 321654,
      description: "Produto Avulso 1",
      store_id: 1,
      observation: "Lorem impsum",
      ultima_contagem: 0,
      tipo_contagem: "simples",
      produtos_registrados: false,
      produtos_avulsos: true,
      produtos: ["1201", "1337", "735201111995.0", "1365", "1472", "1464", "78935495", "929"]
    },
    {
      id: 321654,
      description: "Produto Avulso 1",
      store_id: 1,
      observation: "Lorem impsum",
      ultima_contagem: 0,
      tipo_contagem: "simples",
      produtos_registrados: false,
      produtos_avulsos: true,
      produtos: ["1082", "1326", "1463", "1452", "1261", "1259", "7896864400321.0", "1176"]
    }
  ]);
});

inventario.get("/:id", (req, res) => {
  var loja1 = 1;
  var loja2 = 2;

  var inventarioLoja1 = [
    {
      id: 65487,
      description: "Inventario 1",
      store_id: 1,
      observation: "Permite produto avulso",
      ultima_contagem: 0,
      tipo_contagem: "simples",
      produtos_registrados: false,
      produtos_avulsos: true,
      produtos: ["1082", "1326", "1463", "1452", "1261", "1259", "7896864400321.0", "1176"]
    },
    {
      id: 321654,
      description: "Inventario 2",
      store_id: 1,
      observation: "Não permite produto avulso",
      ultima_contagem: 0,
      tipo_contagem: "simples",
      produtos_registrados: false,
      produtos_avulsos: false,
      produtos: ["1201", "1337", "735201111995.0", "1365", "1472", "1464", "78935495", "929"]
    }
  ];
  var inventarioLoja2 = [
    {
      id: 12346,
      description: "Produto Avulso",
      store_id: 2,
      observation: "Permite produto avulso",
      ultima_contagem: 0,
      tipo_contagem: "simples",
      produtos_registrados: false,
      produtos_avulsos: true,
      produtos: ["1201", "1337", "735201111995.0", "1365", "1472", "1464", "78935495", "929"]
    },
    {
      id: 987654,
      description: "Inventario 2",
      store_id: 2,
      observation: "Não permite produto avulso",
      ultima_contagem: 0,
      tipo_contagem: "simples",
      produtos_registrados: false,
      produtos_avulsos: false,
      produtos: ["1082", "1326", "1463", "1452", "1261", "1259", "7896864400321.0", "1176"]
    }
  ];

  if(req.params.id == 1)
    res.send(inventarioLoja1);

  if(req.params.id == 2)
    res.send(inventarioLoja2);

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
