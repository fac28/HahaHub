const express = require("express");
const { home } = require("./templates.js");

const server = express();

const posts = [];

server.get("/", (req, res) => {
  const body = home(posts);
  res.send(body);
});
