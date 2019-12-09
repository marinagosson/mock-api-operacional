import { bookshelf } from "../config/database";

export const CodigoAuxiliar = bookshelf.Model.extend({
  tableName: "codigo_auxiliar"
});
