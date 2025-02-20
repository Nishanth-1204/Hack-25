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
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/users", userRouter);

app.get("/pdf/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "public/pdf/users", filename);
  res.sendFile(filePath);
});

// Global Error Handler
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
