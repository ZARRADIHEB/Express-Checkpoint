const express = require("express");
const router = express.Router();
const day = new Date().getDay();
const time = new Date().getHours();

router.get("", (req, res, next) => {
  if (day >= 1 && day <= 5 && time >= 9 && time <= 17) next();
  else res.render("access-denied");
});

module.exports = router;
