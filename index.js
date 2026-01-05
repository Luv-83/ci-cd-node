const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Node CI/CD Working 1234");
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
