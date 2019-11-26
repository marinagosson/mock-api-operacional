import Knex from "knex";
import knexfile from "../../../knexfile"; // não rolou module-alias com esm

/* istanbul ignore next */
const env = process.env.NODE_ENV || "development";

export const knex = Knex(knexfile[env]);
