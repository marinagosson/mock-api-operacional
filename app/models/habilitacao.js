import { bookshelf } from "../config/database";

export const Habilitacao = bookshelf.Model.extend({
  tableName: "habilitacao"
});
