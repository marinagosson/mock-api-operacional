import express from "express";
import { json, raw } from "body-parser";
import morgan from "morgan";
import cors from "cors";

import { knex } from "./config/database";
import { auth, perm } from "./middlewares";

export const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(raw());
app.use(cors());

app.use(auth);
app.use(perm);

app.get("/status", async (_, res) => {
  res.send("ONLINE");
});

import * as routes from "./routes";
Object.keys(routes).map(name => app.use(`/${name}`, routes[name]));

/* istanbul ignore next */
export const start = async _ => {
  console.log("we are on [%s] mode", process.env.NODE_ENV);
  console.log("(1/3) calling migrations... ");
  await knex.migrate.latest();
  console.log("(2/3) migrations donne!");
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log("(3/3) listening port %s", port);
};
