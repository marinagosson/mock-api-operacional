import { bookshelf } from "../config/database";

export const Assinante = bookshelf.Model.extend({
  tableName: "assinante"
});
