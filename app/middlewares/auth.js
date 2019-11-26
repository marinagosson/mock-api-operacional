import { Router } from "express";
export const auth = new Router();
// TODO implement JWT

auth.all("*", async (req, res, next) => {
  console.log("TODO token");
  next();
});
