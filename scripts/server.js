const express = require("express");
const server = express();
// const { home } = require("./templates.js");

//View engine
server.set("view engine", "ejs");



// const posts = [];

server.get("/", (req, res) => {
  res.render("index");
});

module.exports = server;
