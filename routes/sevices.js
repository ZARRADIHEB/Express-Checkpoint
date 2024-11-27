const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.render("Our-Services");
});

router.get("/services", (req, res) => {
  res.render("services");
});
module.exports = router;
