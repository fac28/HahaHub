const express = require("express");
const router = express.Router();
const moduleObj = require('../server');
const jokesArray = moduleObj.jokes;


router.post("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(jokesArray);
  // let index = jokesArray.findIndex((joke) => {
  //       return joke.id == id;
  //     });
  //     jokesArray[index].score--;
  res.redirect("/");
});

module.exports = router;
