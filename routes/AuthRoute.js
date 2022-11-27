import { Router } from "express";

const AuthRoute = new Router();

AuthRoute.post("/auth", async (req, res) => {
  let a = req.body;
  res.status(200).json({ ...a });
});

export default AuthRoute;
