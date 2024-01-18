const express = require("express");
const fs = require("fs");
// const routes = require(express.Router)
const path = require("path");
const app = express();
const port = 3333;

app.use(express.static(path.join(__dirname, "templates")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.get("/program", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/program.html"));
});

app.get("/aboutUs", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/about.html"));
});

app.get("/contactUs", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/contact.html"));
});

app.get("/applyNow", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/apply.html"));
});

app.listen(port, () => {
  console.log(`Keen&Able Intern app listening on port ${port}`);
});
