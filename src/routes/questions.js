const express = require("express");
const { questions } = require(".");
const router = express.Router();
const controller = require("../controllers/questions");

router.get("/", controller.getAll);

module.exports = router;
