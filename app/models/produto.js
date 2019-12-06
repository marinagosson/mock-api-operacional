import { bookshelf } from "../config/database";
import { Unidade } from "./unidade";

// Bookshelf models do not define table properties. It does define relations
export const Produto = bookshelf.Model.extend({
  tableName: "produto",
  unidMedida() {
    return this.belongsTo(Unidade, 'unidadeMedida');
  }
});
