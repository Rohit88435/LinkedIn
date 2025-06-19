import express from "express";
import dotenv from "dotenv";
import connectDb from "./Config/db.js";
import { authRouter } from "./Routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./Routes/user.routes.js";

dotenv.config();

// instance (express)
let app = express();

app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// middleware
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

//  app listen
app.listen(process.env.PORT || 9000, () => {
  connectDb();
  console.log("connectDb");

  console.log("Server Started");
});
