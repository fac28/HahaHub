const express = require("express");
const app = express();
const staticHandler = express.static("public");

//View engine
app.set("view engine", "ejs");

//Middleware
app.use(staticHandler);

//Variables
const jokes = [
  {
    delivery: "A person walks into a bar",
    nickname: "Bobby",
  },
  {
    delivery: "What do you get when you cross a elephant with a rhino?",
    nickname: "Samantha",
  },
];

app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.render("index", { jokes: jokes });
});

app.post("/", (req, res) => {
  let name = req.body.nickname;
  const joke = req.body.jokeInput;

  // if name is empty, change to anonymous
  if (name === "") {
    name = "anonymous";
  }

  // if joke is empty, don't add to jokes, send 400
  if (joke !== "") {
    jokes.push({
      delivery: joke,
      nickname: name,
    });
    res.redirect("/");
  } else {
    res.status(400).send();
  }
});

module.exports = app;
