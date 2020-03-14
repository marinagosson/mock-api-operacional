import { Router } from "express";
import { Assinante } from "../models";
import { configPrecoAssinante1 } from "./utils/assinante1/tipoPreco";
import { configPrecoAssinante2 } from "./utils/assinante2/tipoPreco";

export const assinante = new Router();

assinante.get("/", async (req, res) => {
  console.log(req);
  if (req.headers.assinante == "joao")
    res.send({
      id: 1,
      cnpj: "96.771.010/0001-08",
      ativo: true,
      descricao: "Super Mercado Casa Magalhães",
      configPreco: configPrecoAssinante1
    });
  if (req.headers.assinante == "maria")
    res.send({
      id: 2,
      cnpj: "12.088.491/0001-53",
      ativo: true,
      descricao: "Supermercado Frangolandia",
      configPreco: configPrecoAssinante2
    });
});
