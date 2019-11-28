import { bookshelf } from "../config/database";

export const Dispositivo = bookshelf.Model.extend({
  tableName: "dispositvo"
});
