import { bookshelf } from "../config/database";

export const Loja = bookshelf.Model.extend({
  tableName: "loja"
});
