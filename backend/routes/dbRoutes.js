const express = require("express");
const router = express.Router();

// Get user data
router.get("/user", (req, res) => {
  res.status(200).send({ data: "here is the user data" });
});

module.exports = router;
