import { Router } from "express";
export const api = new Router();
// TODO implement JWT

api.all("*", async (req, res, next) => {
  if ("/status" == req.path) next();
  // else check valid token
  next();
});
