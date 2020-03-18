import { Router } from "express";

import { assinante1 } from "./utils/assinante";
import { assinante2 } from "./utils/assinante"

export const auth = new Router();

auth.post("/", async (req, res) => {
  if (req.body.username == assinante1 || req.body.username == assinante2) {
    var data = new Date().toLocaleString();
    const sha1 = require("sha1");
    var access_token = sha1("access_token" + data);

    const md5 = require("md5");
    var refresh_token = md5("refresh_token" + data);

    var data = {
      access_token: access_token,
      token_refresh: refresh_token
    };

    res.send(data);
  } else {
    res.send(404, { message: "Usuários permitidos: " + assinante1 + " ou " + assinante2 });
  }
});

auth.post("/refresh401", async (req, res) => {
  res.send(401, { message: "Token invalido" });
});

auth.post("/refresh", async (req, res) => {
  if (req.headers.assinante == assinante1 || req.headers.assinante == assinante2) {
    var data = new Date().toLocaleString();
    const sha1 = require("sha1");
    var access_token = sha1("access_token" + data);

    const md5 = require("md5");
    var refresh_token = md5("refresh_token" + data);

    var data = {
      access_token: access_token,
      token_refresh: refresh_token
    };

    res.send(data);
  } else {
    res.send(403, { message: "Assinante não enviado no header" });
  }
});

auth.get("/logout", async (req, res) => {
  res.send({});
});

auth.get("/unauthorized", async (req, res) => {
  res.send(401, { message: "Token invalido" });
});
