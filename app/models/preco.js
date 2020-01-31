import { bookshelf } from "../config/database";

export const Preco = bookshelf.Model.extend({
  tableName: "preco"
});
