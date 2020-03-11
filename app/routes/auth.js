import { Router } from "express";

export const auth = new Router();

auth.post("/", async (req, res) => {

	var data = new Date().toLocaleString();
	const sha1 = require('sha1');
	var access_token = sha1('access_token' + data);

	const md5 = require('md5');
	var refresh_token = md5('refresh_token' + data);

	var data = {
		"access_token": access_token,
		"token_refresh": refresh_token
	}

	res.send(data);
});

auth.post("/refresh401", async (req, res) => {
	res.send(401, {message: "Token invalido"});
});

auth.post("/refresh", async (req, res) => {
	
	var data = new Date().toLocaleString();
	const sha1 = require('sha1');
	var access_token = sha1('access_token' + data);

	const md5 = require('md5');
	var refresh_token = md5('refresh_token' + data);

	var data = {
		"access_token": access_token,
		"token_refresh": refresh_token
	}

	res.send(data);
});

auth.get("/logout", async (req, res) => {
	res.send({});
});

auth.get("/unauthorized", async (req, res) => {
	res.send(401, {message: "Token invalido"});
});