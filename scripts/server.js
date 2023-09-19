const express = require("express");
const server = express();
// const { home } = require("./templates.js");
const staticHandler = express.static("public");

//View engine
server.set("view engine", "ejs");

//Middleware
server.use(staticHandler);

//Variables
const jokes = [
  { delivery: "A person walks into a bar", nickname: "Bobby" },
  {
    delivery: "What do you get when you cross a elephant with a rhino?",
    nickname: "Samantha",
  },
];

//Routes
server.get("/", (req, res) => {
  res.render("index", { jokes: jokes });
});

module.exports = server;
