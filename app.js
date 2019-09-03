const express = require("express");

const app = express();
app.use("/static", express.static("public"));

app.set("view engine", "pug");

const mainRoutes = require("./routes");
const projectRoutes = require("./routes/projects");

app.use(mainRoutes);
app.use("/projects", projectRoutes);

app.use((req, res, next) => {
  const err = new Error("not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  console.log("error status: ", err.status);
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000, () => {
  console.log("The app is running on localhost:3000");
});
