import { Router } from "express";
import { Funcionario } from "../models";

export const funcionario = new Router();

funcionario.get("/", (req, res) => {
  if (req.headers.assinante == "joao") {
    res.send({
      id: 47,
      username: "João",
      administrador: false,
      nome: "João",
      sobrenome: "Costa",
      email: "joao@gmail.com",
      telefone: "05111111111",
      foto: "https://operacional.herokuapp.com/images/user.png",
      permissoes: ["PERM_API_CARGA_PDV_ACESSO"]
    });
  }
  if (req.headers.assinante == "maria") {
    res.send({
      id: 47,
      username: "Maria",
      administrador: false,
      nome: "Maria",
      sobrenome: "Pinheiro",
      email: "maria@gmail.com",
      telefone: "05111111111",
      foto: "https://operacional.herokuapp.com/images/user.png",
      permissoes: ["PERM_API_CARGA_PDV_ACESSO"]
    });
  }
});
