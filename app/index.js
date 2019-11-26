import express from "express";
import { json } from "body-parser";
import morgan from "morgan";
import cors from "cors";

import { knex } from "./config/database";
import { auth } from "./middlewares";

export const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(cors());

app.get("/status", async (req, res) => {
  res.send("ONLINE");
});

app.use(auth);

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
