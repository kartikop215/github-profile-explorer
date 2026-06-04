const axios = require("axios");

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
     Accept:
    "application/vnd.github+json",
    Authorization: process.env.GITHUB_TOKEN
      ? `Bearer ${process.env.GITHUB_TOKEN}`
      : undefined
  }
});

const getUserProfile = async (username) => {
  const response = await githubApi.get(
    `/users/${username}`
  );

  return response.data;
};

const getUserRepos = async (username) => {
  const response = await githubApi.get(
    `/users/${username}/repos`
  );

  return response.data;
};

module.exports = {
  getUserProfile,
  getUserRepos
};