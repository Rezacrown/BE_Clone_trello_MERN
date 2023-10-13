const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./src/routes/index");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// simple debug route
app.get("/", (req, res) => {
  res.json({
    message: "Tes ini API",
  });
});

// all routes handler for APi
app.use("/api", indexRouter);

module.exports = app;
