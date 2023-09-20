const express = require("express");
const router = express.Router();

// const vote = require("../utils/voteHandler");
const jokesObject = require("../server");
const jokesArray = jokesObject.jokes;

router.post("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  let index = jokesArray.findIndex((joke) => {
    return joke.id == id;
  });
  jokesArray[index].score--;
  res.redir
});

module.exports = router;
