import { Router } from "express";
// import { Funcionario } from "../models";

import { assinante1 } from "./utils/assinante";
import { assinante2 } from "./utils/assinante"

export const funcionario = new Router();

import { hasAssinante, resSendAssinanteNotFound } from "./utils/assinante";

funcionario.get("/", (req, res) => {
  if (!hasAssinante(req)) {
    res.send(403, resSendAssinanteNotFound);
    return;
  }
  if (req.headers.assinante == assinante1) {
    res.send({
      id: 47,
      username: assinante1,
      administrador: false,
      nome: "Marina",
      sobrenome: "Gosson",
      email: "marina.gosson@gmail.com",
      telefone: "05111111111",
      foto: "https://operacional.herokuapp.com/images/marina.png",
      permissoes: ["PERM_API_CARGA_PDV_ACESSO"]
    });
  } else if (req.headers.assinante == assinante2) {
    res.send({
      id: 47,
      username: assinante1,
      administrador: false,
      nome: "Natália",
      sobrenome: "Macambira",
      email: "natalia.dev.cm@gmail.com",
      telefone: "05111111111",
      foto: "https://operacional.herokuapp.com/images/natalia.png",
      permissoes: ["PERM_API_CARGA_PDV_ACESSO"]
    });
  } else {
    res.send(403, { message: "Assinante não enviado no header" });
  }
});
