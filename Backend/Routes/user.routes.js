import express from "express";
import { getCurrentUser } from "../Controller/user.controller.js";
import isAuth from "../MiddleWares/isAuth.js";

let userRouter = express.Router();

userRouter.get("/currentuser", isAuth, getCurrentUser);

export default userRouter;
