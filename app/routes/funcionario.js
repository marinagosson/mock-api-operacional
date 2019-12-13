import { Router } from "express";
import { Funcionario } from "../models";

export const funcionario = new Router();

funcionario.get("/", (req, res) => {
  res.send({
    id: 47,
    username: "MOINHOS",
    administrador: false,
    nome: "MOINHOS",
    sobrenome: "MOINHOS",
    email: "moinhos@gmail.com",
    telefone: "05111111111",
    permissoes: [
      "PERM_API_CARGA_PDV_ACESSO",
      "PERM_API_CARGA_PDV_INCLUIR",
      "PERM_API_ENTRADA_OPERADOR_INCLUIR",
      "PERM_API_ESTORNO_TEF_ACESSO",
      "PERM_API_ESTORNO_TEF_INSERIR",
      "PERM_API_PAGAMENTO_ACESSO",
      "PERM_AGENTE_FINANCEIRO_ACESSO",
      "PERM_AGENTE_FINANCEIRO_EDITAR",
      "PERM_AGENTE_FINANCEIRO_EXCLUIR",
      "PERM_AGENTE_FINANCEIRO_INCLUIR",
      "PERM_CATEGORIA_FINANCEIRA_ACESSO",
      "PERM_CONTA_CORRENTE_ACESSO",
      "PERM_CONTA_CORRENTE_EDITAR",
      "PERM_CONTA_CORRENTE_EXCLUIR",
      "PERM_CONTA_CORRENTE_INCLUIR",
      "PERM_ESPECIE_DOCUMENTO_ACESSO",
      "PERM_ESPECIE_DOCUMENTO_EDITAR",
      "PERM_ESPECIE_DOCUMENTO_EXCLUIR",
      "PERM_ESPECIE_HABILITAR_BOLETO",
      "PERM_ESPECIE_DOCUMENTO_INCLUIR",
      "PERM_HISTORICO_PADRAO_ACESSO",
      "PERM_HISTORICO_PADRAO_EDITAR",
      "PERM_HISTORICO_PADRAO_EXCLUIR",
      "PERM_TITULO_A_RECEBER_LIQUIDAR",
      "PERM_PAGAMENTO_PDV_ACESSO",
      "PERM_RECEBIMENTO_PDV_ACESSO",
      "PERM_RECEBIMENTO_PDV_EDITAR",
      "PERM_RECEBIMENTO_PDV_EXCLUIR",
      "PERM_RECEBIMENTO_PDV_INCLUIR",
      "PERM_TRANSFERENCIA_DE_CC_ACESSO"
    ]
  });
});
funcionario.get("/:id", (req, res) => {
  res.send("TOO - implement!");
});
funcionario.post("/", (req, res) => {
  res.send("TOO - implement!");
});
funcionario.put("/:id", (req, res) => {
  res.send("TOO - implement!");
});
funcionario.delete("/:id", (req, res) => {
  res.send("TOO - implement!");
});
