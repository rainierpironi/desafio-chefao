const express = require("express"),
  app = express(),
  cors = require("cors"),
  db = require("./infrastructure/database");

db.hasConnection();
app.use(express.json());
app.use(cors());

module.exports = app;
