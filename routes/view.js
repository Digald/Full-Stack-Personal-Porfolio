var projects = require("../data/projects.js");
var nodemailer = require('nodemailer');
var mandrill = require("mandrill-api/mandrill");

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

  app.post("/sendmail", function(req, res) {
    console.log(req.body);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    });
    
    var mailOptions = {
      from: 'markalaniz000@gmail.com',
      to: 'markalaniz000@gmail.com',
      subject: 'PORTFOLIO MESSAGE REGARDING ' + req.body.subject,
      text: 'From Name: ' + req.body.name + '\nFrom Email: ' + req.body.email + '\nMessage: ' + req.body.message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
};
