const express = require("express");
var path = require("path");
const app = express();
const port = 3000;
//runkit.com/
https: app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
