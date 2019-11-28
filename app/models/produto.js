import { bookshelf } from "../config/database";

// Bookshelf models do not define table properties. It does define relations
export const Produto = bookshelf.Model.extend({
  tableName: "produto"
});
