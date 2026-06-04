require("dotenv").config();

const express = require("express");
const cors = require("cors");

const githubRoutes =
  require("./routes/githubRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/github",
  githubRoutes
);

app.get("/", (req, res) => {

  res.send(
    "GitHub Explorer API Running"
  );

});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});
app.get("/health", (req, res) => {

  res.json({
    status: "OK",
    uptime:
      process.uptime()
  });

});

app.get("/health", (req, res) => {

  res.status(200).json({
    status: "OK",
    uptime:
      process.uptime(),
    timestamp:
      new Date()
        .toISOString()
  });

});