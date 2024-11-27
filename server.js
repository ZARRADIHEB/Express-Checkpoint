const express = require("express");
const app = express();
const port = 1708;
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, (err) => {
  if (err) console.log("🚀 ~ file: server.js:12 ~ app.listen ~ err:");
  console.log("Server Is Runnig...");
});

const day = new Date().getDay();
const time = new Date().getHours();

app.use("", (req, res, next) => {
  if (day >= 1 && day <= 5 && time >= 9 && time <= 17) next();
  else res.render("access-denied");
});

app.get("/", (req, res) => {
  res.render("Home-Page");
});
app.get("/ourservices", (req, res) => {
  res.render("Our-Services");
});

app.get("/contact", (req, res) => {
  res.render("Contact-Us");
});
