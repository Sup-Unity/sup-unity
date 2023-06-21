const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.status(200).send("You have logged in");
});

router.post("/logout", (req, res) => {
  res.status(200).send("You have logged out");
});

module.exports = router;
