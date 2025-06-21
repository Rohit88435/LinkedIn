import express from "express";
import {
  getCurrentUser,
  updateProfile,
} from "../Controller/user.controller.js";
import isAuth from "../MiddleWares/isAuth.js";
import upload from "../MiddleWares/multer.js";

let userRouter = express.Router();

userRouter.get("/currentuser", isAuth, getCurrentUser);
userRouter.put(
  "/updateprofile",
  isAuth,
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  updateProfile
);
export default userRouter;
