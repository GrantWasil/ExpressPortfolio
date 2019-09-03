const express = require("express");
const router = express.Router();
const {projects} = require("../data.json");

router.get("/:id", (req, res) => {
  const {id} = req.params;
  const name = projects[id].project_name;
  const description = projects[id].description;
  const technologies = projects[id].technologies;
  const github = projects[id].github_link;
  const live = projects[id].live_link;
  const photos = projects[id].image_urls;

  const templateData = {name, description, technologies, github, live, photos};

  res.render("project", templateData);
});

module.exports = router;
