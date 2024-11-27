const express = require("express");
const app = express();
const port = 1708;
const path = require("path");
const restrict = require("./middlewares/restrictTime");
const home = require("./routes/home");
const contact = require("./routes/contact");
const services = require("./routes/sevices");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(restrict);
app.use("", home);
app.use("/ourservices", services);
app.use("/contact", contact);

app.listen(port, (err) => {
  if (err) console.log(`An Error Has Stoped The Action : ${err}`);
  console.log("Server Is Runnig...");
});
