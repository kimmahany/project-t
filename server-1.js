// jshint esversion:6

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h2>Hello World</h2>");
});

app.listen(port, () => {
  console.log(`Express web app available at localhost:${port}`);
});
