const express = require("express"),
  app = express(),
  cors = require("cors"),
  db = require("./infrastructure/database");
  routes= require('./routes')

db.hasConnection();
app.use(express.json());
app.use(cors());
app.use(routes)

module.exports = app;
