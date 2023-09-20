const express = require("express");
const router = express.Router();

const vote = require("../utils/voteHandler");
const jokesObject = require("../server");

router.post("/:id", (req, res) => {
  const id = req.params.id;
  vote(id, "up", jokesObject.jokes);
  res.redirect("/");
});

module.exports = router;
