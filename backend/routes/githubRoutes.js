const express = require("express");

const {
  fetchGithubUser
} = require(
  "../controllers/githubController"
);

const router = express.Router();

router.get(
  "/:username",
  fetchGithubUser
);

module.exports = router;