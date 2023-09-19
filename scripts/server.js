const express = require("express");
const app = express();
const router = express.Router();

//View engine
app.set("view engine", "ejs");

//Middleware
server.use(staticHandler);

//Variables
const jokes = [
  { 
    delivery: "A person walks into a bar", 
    nickname: "Bobby" },
  {
    delivery: "What do you get when you cross a elephant with a rhino?",
    nickname: "Samantha",
  },
];

router.use(express.urlencoded({ extended: false }));

//Routes
router.get("/", (req, res) => {
  res.render("index", { jokes: jokes });
});

router.post("/", (req,res) => {
  let name = req.body.nickname;
  const joke = req.body.jokeInput;

  // if name is empty, change to anonymous
  if (name==="") {
    name = 'anonymous'
  }

  // if joke is empty, don't add to jokes, send 400
  if (joke!== ""){ 
    jokes.push({
      delivery: joke,
      nickname: name
    });
    res.redirect("/");  
  }
  else {
    res.status(400).send();
  }
});

app.use("/", router);

module.exports = app;
