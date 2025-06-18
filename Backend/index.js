import express from "express";
import dotenv from "dotenv";
import connectDb from "./Config/db.js";
import { authRouter } from "./Routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

// instance (express)
let app = express();

app.use(express.json());

app.use(cookieParser());

// middleware
app.use("/api/auth", authRouter);

//  app listen
app.listen(process.env.PORT || 9000, () => {
  connectDb();
  console.log("connectDb");

  console.log("Server Started");
});
