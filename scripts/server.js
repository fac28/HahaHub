const express = require("express");
const app = express();
const staticHandler = express.static("public");

//View engine
app.set("view engine", "ejs");

//Middleware
app.use(staticHandler);

//Variables
const error = {};

const jokes = [
  {
    delivery: "A person walks into a bar",
    nickname: "Bobby",
    id: Math.random(),
  },
  {
    delivery: "What do you get when you cross a elephant with a rhino?",
    nickname: "Samantha",
    id: Math.random(),
  },
];

app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.render("index", { jokes: jokes, error: error, });
});

app.post("/", (req, res) => {
  let name = req.body.nickname;
  const joke = req.body.jokeInput;
  let id = Math.random();

  // if name is empty, change to anonymous
  if (name === "") {
    name = "anonymous";
  }

  // if joke is empty, don't add to jokes, send 400
  if (joke !== "") {
    error.message = "";
    jokes.push({
      delivery: joke,
      nickname: name,
      id: id,
    });
    res.redirect("/");
  } else {
    error.message = "Somebody tell a joke!"
    res.status(400).redirect('/');
  }
});

//Delete route for posts
app.post("/delete:id", (req, res) => {
  const id = req.params.id;

  // check if index is -1
  let index = jokes.findIndex((joke) => {
    return joke.id == id;
  });

  if (index != -1) {
    jokes.splice(index, 1);
  }
  res.redirect("/");
});

module.exports = app;
