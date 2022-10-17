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

router.get("/projects/:id", (req, res, next) => {
  const { id } = req.params;
  const project = projects[id];

  if (project) {
    res.render("project", { project });
  } else {
    const err = new Error();
    err.message = 'Whoops, project not found';
    err.status = 404;
    next(err);
  }
});

module.exports = router;
