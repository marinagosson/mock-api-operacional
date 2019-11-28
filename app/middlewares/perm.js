import { Router } from "express";
export const perm = new Router();
// TODO implement JWT

perm.all("*", async (req, res, next) => {
  if ("/status" == req.path) next();
  // else check permissions
  next();
});
