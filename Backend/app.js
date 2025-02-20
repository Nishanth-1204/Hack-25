import express from "express";
import cors from "cors";
import morgan from "morgan";
import AppError from "./utils/appError.js";

import userRouter from "./routes/userRouter.js";
import globalErrorHandler from "./controllers/errorController.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "https://hack-25-pi.vercel.app",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/users", userRouter);

app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

export default app;
