import { bookshelf } from "../config/database";

export const Unidade = bookshelf.Model.extend({
  tableName: "unidade"
});
