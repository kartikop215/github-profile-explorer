const cache = require("../config/cache");

console.log("CACHE =", cache);
console.log("GET METHOD =", cache.get);

const {
  getUserProfile,
  getUserRepos
} = require("../services/githubServices");

const fetchGithubUser = async (
  req,
  res
) => {

  const { username } = req.params;

  try {

    const cachedData =
      cache.get(username);

    if (cachedData) {
return res.json({
  success: true,
  cached: true,
  timestamp: new Date().toISOString(),
  data: cachedData
});

    }

    const profile =
      await getUserProfile(username);

    const repos =
      await getUserRepos(username);
const result = {
  profile,
  repos,
  repositoryCount:
    repos.length
};

    cache.set(username, result);

    res.json({
      success: true,
      cached: false,
      data: {
  profile,
  repos,
  repositoryCount:
    repos.length
}
    });

  } catch (error) {

  console.log("STATUS:",
    error.response?.status
  );

  console.log("DATA:",
    error.response?.data
  );

  console.log("MESSAGE:",
    error.message
  );

  res.status(500).json({
    success: false,
    message: "Server Error"
  });

}
};

module.exports = {
  fetchGithubUser
};