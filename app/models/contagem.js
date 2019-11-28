import { bookshelf } from "../config/database";

export const Contagem = bookshelf.Model.extend({
  tableName: "contagem"
});
