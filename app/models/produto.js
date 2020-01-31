import { bookshelf } from "../config/database";
import { CodigoAuxiliar } from "./codigo_auxiliar";
import { Preco } from "./preco";

// Bookshelf models do not define table properties. It does define relations
export const Produto = bookshelf.Model.extend({
  tableName: "produto",
  codigosAuxiliares(){
    return this.hasMany(CodigoAuxiliar, 'produtoCodigo', 'produtoCodigo');
  },
  preco(){
    return this.hasOne(Preco, 'produtoCode');
  }
});
