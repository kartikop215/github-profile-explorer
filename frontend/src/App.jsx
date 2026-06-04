import { useState } from "react";
import api from "./services/api";

import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepoCard from "./components/RepoCard";
import LoadingSkeleton from "./components/LoadingSkeleton";

function App() {
  const [username, setUsername] = useState("");

  const [profile, setProfile] = useState(null);

  const [repos, setRepos] = useState([]);

  const [filteredRepos, setFilteredRepos] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [repoSearch, setRepoSearch] = useState("");

  const [cached, setCached] = useState(false);

  const [currentPage, setCurrentPage] =
    useState(1);

  const reposPerPage = 6;

  const searchUser = async () => {
    if (!username.trim()) return;

    try {
      setLoading(true);

      setError("");

      setCurrentPage(1);

      const response =
        await api.get(`/github/${username}`);

      const profileData =
        response.data.data.profile;

      const repoData =
        response.data.data.repos;

      setCached(response.data.cached);

      setProfile(profileData);

      setRepos(repoData);

      setFilteredRepos(repoData);
    } catch (error) {
      setError("GitHub user not found");

      setProfile(null);

      setRepos([]);

      setFilteredRepos([]);
    } finally {
      setLoading(false);
    }
  };

  const searchRepos = (value) => {
    setRepoSearch(value);

    setCurrentPage(1);

    const filtered = repos.filter((repo) =>
      repo.name
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    setFilteredRepos(filtered);
  };

  const sortRepos = (type) => {
    const sorted = [...filteredRepos];

    if (type === "stars") {
      sorted.sort(
        (a, b) =>
          b.stargazers_count -
          a.stargazers_count
      );
    }

    if (type === "forks") {
      sorted.sort(
        (a, b) =>
          b.forks_count - a.forks_count
      );
    }

    if (type === "updated") {
      sorted.sort(
        (a, b) =>
          new Date(b.updated_at) -
          new Date(a.updated_at)
      );
    }

    setFilteredRepos(sorted);
  };

  const indexOfLastRepo =
    currentPage * reposPerPage;

  const indexOfFirstRepo =
    indexOfLastRepo - reposPerPage;

  const currentRepos =
    filteredRepos.slice(
      indexOfFirstRepo,
      indexOfLastRepo
    );

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-bold text-center mb-10">
          GitHub Profile Explorer
        </h1>

        <div className="flex justify-center">
          <SearchBar
            username={username}
            setUsername={setUsername}
            onSearch={searchUser}
          />
        </div>

        {cached && (
          <div className="text-center mt-4 text-green-400">
            ⚡ Served from cache
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-lg p-4 mt-6 text-center">
            {error}
          </div>
        )}

        <div className="mt-10">

          {loading && <LoadingSkeleton />}

          {!loading && profile && (
            <>
              <ProfileCard profile={profile} />

              <div className="flex flex-col md:flex-row gap-4 mt-8">

                <input
                  type="text"
                  value={repoSearch}
                  placeholder="Search repositories..."
                  onChange={(e) =>
                    searchRepos(
                      e.target.value
                    )
                  }
                  className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700"
                />

                <select
                  onChange={(e) =>
                    sortRepos(
                      e.target.value
                    )
                  }
                  className="bg-gray-800 border border-gray-700 rounded-lg p-3"
                >
                  <option value="">
                    Sort Repositories
                  </option>

                  <option value="stars">
                    Stars
                  </option>

                  <option value="forks">
                    Forks
                  </option>

                  <option value="updated">
                    Last Updated
                  </option>
                </select>

              </div>

              <div className="mt-5 text-gray-400">
                Showing{" "}
                {filteredRepos.length} repositories
              </div>

              {filteredRepos.length === 0 && (
                <div className="text-center py-10 text-gray-400">
                  No repositories found.
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

                {currentRepos.map((repo) => (
                  <RepoCard
                    key={repo.id}
                    repo={repo}
                  />
                ))}

              </div>

              {filteredRepos.length > 0 && (

                <div className="flex justify-center items-center gap-4 mt-10">

                  <button
                    disabled={
                      currentPage === 1
                    }
                    onClick={() =>
                      setCurrentPage(
                        currentPage - 1
                      )
                    }
                    className="px-4 py-2 bg-gray-800 rounded disabled:opacity-40"
                  >
                    Previous
                  </button>

                  <span>
                    Page {currentPage}
                  </span>

                  <button
                    disabled={
                      indexOfLastRepo >=
                      filteredRepos.length
                    }
                    onClick={() =>
                      setCurrentPage(
                        currentPage + 1
                      )
                    }
                    className="px-4 py-2 bg-gray-800 rounded disabled:opacity-40"
                  >
                    Next
                  </button>

                </div>

              )}

            </>
          )}

        </div>

        <footer className="text-center mt-20 text-gray-500">
          Built with React, Express and GitHub API
        </footer>

      </div>

    </div>
  );
}

export default App;