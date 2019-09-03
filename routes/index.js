const express = require("express");
const router = express.Router();
const {projects} = require("../data.json");

router.get("/", (req, res) => {
  const templateData = {projects};
  res.render("index", templateData);
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
