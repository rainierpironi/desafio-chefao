const express = require("express"),
  app = express(),
  cors = require("cors"),
  db = require("./infrastructure/database");

const routes = require('../src/routes')



app.use(express.json());
app.use(cors());

db.hasConnection();

app.use(routes)



module.exports = app;