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
    delivery: "A person walks into a bar...ouch",
    nickname: "Bobby",
    id: Math.random(),
    score: 1,
  },
  {
    delivery:
      "What do you get when you cross a elephant with a rhino? Ele-rhi-no!",
    nickname: "Samantha",
    id: Math.random(),
    score: 0,
  },
];

app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.render("index", { jokes, error });
});

app.post("/", (req, res) => {
  let name = req.body.nickname;
  const joke = req.body.jokeInput;
  const id = Math.random();

  // if name is empty, change to anonymous
  if (name === "") {
    name = "anonymous";
  }

  // if joke is empty, don't add to jokes, send 400
  if (joke === "") {
    error.message = "Somebody tell a joke!";
    res.status(400).redirect("/");
  } else {
    error.message = "";
    jokes.push({
      delivery: joke,
      nickname: name,
      id,
      score: 0,
    });
    res.redirect("/");
  }
});

//Delete route for posts
app.post("/delete:id", (req, res) => {
  const id = req.params.id;

  // check if index is -1
  const index = jokes.findIndex((joke) => {
    return joke.id == id;
  });

  if (index != -1) {
    jokes.splice(index, 1);
  }
  res.redirect("/");
});

app.post("/down/:id", (req, res) => {
  const id = req.params.id;
  const index = jokes.findIndex((joke) => {
    return joke.id == id;
  });
  jokes[index].score--;
  res.redirect("/");
});

//Up vote route
app.post("/up/:id", (req, res) => {
  const id = req.params.id;
  const index = jokes.findIndex((joke) => {
    return joke.id == id;
  });
  jokes[index].score++;
  res.redirect("/");
});

module.exports = app;