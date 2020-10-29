const express = require("express");
const cors = require("cors");
const routes = require("./routes");

// Parse JSON
const server = express();

server.use(cors());
server.use("/questions", routes.questions);

server.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = server;
