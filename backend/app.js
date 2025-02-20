const express = require("express");
const cors = require("cors");
const AppError = require("./utils/appError");
const morgan = require("morgan");

const userRouter = require("./routes/userRouter");
const globalErrorHandler = require("./controllers/errorController");

// Global Middlewares
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://hack-25-sigma.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/users", userRouter);

// Global Error Handler
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
