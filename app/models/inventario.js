import { bookshelf } from "../config/database";

export const Inventario = bookshelf.Model.extend({
  tableName: "inventario"
});
