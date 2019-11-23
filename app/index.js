import express from "express";
import { json } from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { knex } from "./config/database";

export const app = express();

app.use(morgan("dev"));
app.use(json());
app.use(cors());

app.get("/status", async (req, res) => {
  res.send("ONLINE");
});

export const start = async _ => {
  console.log("we are on [%s] mode", process.env.NODE_ENV);
  await knex.migrate.latest();
  await app.listen(process.env.PORT || 3000);
};
