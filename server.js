const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/login", (req, res) => {
  res.cookie("name", req.query.name || "Guest");
  res.send("Cookie set! Now visit /hello.");
});

app.get("/hello", (req, res) => {
  res.send(`Welcome ${req.cookies.name || "stranger"}!`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
