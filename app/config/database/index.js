import Knex from "knex";
import knexfile from "../../../knexfile"; // não rolou module-alias com esm
import Bookshelf from "bookshelf";

/* istanbul ignore next */
const env = process.env.NODE_ENV || "development";

export const knex = Knex(knexfile[env]);
export const bookshelf = Bookshelf(knex);

// https://github.com/bookshelf/bookshelf/wiki/Plugin:-Visibility
bookshelf.plugin("pagination");
bookshelf.plugin("visibility");
