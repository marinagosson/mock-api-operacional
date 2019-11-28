import { bookshelf } from "../config/database";

export const Funcionario = bookshelf.Model.extend({
  tableName: "funcionario"
});
