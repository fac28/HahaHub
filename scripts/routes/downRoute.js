const express = require("express");
const router = express.Router();

// const vote = require("../utils/voteHandler");
const jokesObject = require("../server");
const jokesArray =jokesObject.jokes;


router.post("/:id", (req, res) => {
  const id = req.params.id;

  // check if index is -1
  let index = jokesArray.findIndex((joke) => {
    return joke.id == id;
  });

  if (index != -1) {
    jokesArray.splice(index, 1);
  }
  res.redirect("/");
});

module.exports = router;
