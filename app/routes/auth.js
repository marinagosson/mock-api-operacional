import { Router } from "express";

export const auth = new Router();

auth.post("/", async (req, res) => {
	res.send({
		"access_token": "as0d97f0asdnf9821n98xn3284nc9821n3498n12381238c41h23984",
		"token_refresh": "f7ua0s9d87f9as7d0fnas9d8fasnbkjbj1hvkj23v41b23l4jb3k2j1b4lkjb123lk4jbl123h4bl12k3b4li"
	});
});

auth.post("/refresh", async (req, res) => {
	res.send({
		"access_token": "as0d97f0asdnf9821n98xn3284nc9821n3498n12381238c41h23984",
		"token_refresh": "f7ua0s9d87f9as7d0fnas9d8fasnbkjbj1hvkj23v41b23l4jb3k2j1b4lkjb123lk4jbl123h4bl12k3b4li"
	});
});

auth.get("/logout", async (req, res) => {
	res.send({});
});