const express = require("express");
const makeownserver = express();
const port = 3000;

makeownserver.get("/", (req, res) => {
  res.send("This is my test server with express js!!!");
});

makeownserver.get("/:dario", (req, res) => {
  res.send("made by ${res}");
});

makeownserver.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
