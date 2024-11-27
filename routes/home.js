const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home-Page");
});

router.get("/about-us", (req, res) => {
  res.render("about-us");
});
module.exports = router;
