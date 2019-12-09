import { Router } from "express";
import { Assinante } from "../models";

export const assinante = new Router();

assinante.get("/", async (req, res) => {
	const { page = 1, pageSize = 10 } = req.query;
	const list = await Assinante.query(qb => qb).fetchPage({ page, pageSize });
	res.send(list);
});
assinante.get("/:id", (req, res) => {
	Assinante.query(qb => qb.where("id", req.params.id))
		.fetch()
		.then(ret => res.send(ret))
		.catch(err => res.status(404).send("NOT FOUND"));
});
assinante.post("/", async (req, res) => {
  await Assinante.forge(req.body).save()
  // res.send("TOO - implement!");
  res.status(201).send("OK");
});
assinante.put("/:id", (req, res) => {
	res.send("TOO - implement!");
});
assinante.delete("/:id", (req, res) => {
	res.send("TOO - implement!");
});
