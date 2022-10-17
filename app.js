/**
 * Setup
 */
const express = require("express");

const app = express();

app.use(express.urlencoded());
app.use("/static", express.static("public"));

app.set("view engine", "pug");

/**
 * Routes
 */
const mainRoutes = require("./routes");

app.use(mainRoutes);

/**
 * Error handlers
 */
app.use((req, res, next) => {
  const err = new Error("Page not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status || 500);
  err.message =
    err.message || "Whoops, loops like there was a problem with the server";
  if (err.status === 404) {
    res.render("page-not-found", { err });
  } else {
    res.render("error", { err });
  }
});

/**
 * Listen
 */
app.listen(3000, () => {
  console.log("The app is running on localHost:3000!");
});
