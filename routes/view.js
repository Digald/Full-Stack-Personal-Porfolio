var projects = require("../data/projects.js");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("home", {
      title: "Wecome to Mark's Portfolio",
      css: "home.css",
      js: "home.js",
      projects: projects.projectList
    });
  });

  app.get("/about", function(req, res) {
    res.render("about", {
      title: "About Mark",
      css: "about.css",
      js: "about.js"
    });
  });
};
