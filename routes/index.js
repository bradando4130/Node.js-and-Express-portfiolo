/**
 * Setup
 */
const express = require("express");
const router = express.Router();
const { projects } = require("../data/data.json");
// const { projects } = data;

/**
 * Get routes
 */
router.get("/", (req, res, next) => {
  res.render("index", { projects });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  const project = projects[id];

  if (project) {
    console.log(project);
    res.render("project", { project });
  }
});

module.exports = router;
