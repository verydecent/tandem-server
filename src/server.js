const express = require("express");
const cors = require("cors");

// Parse JSON
const server = express();

server.use(cors());

server.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = server;
