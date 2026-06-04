import {
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaExclamationCircle
} from "react-icons/fa";

function RepoCard({ repo }) {

  const languageColors = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    Python: "bg-green-500",
    Java: "bg-red-500",
    HTML: "bg-orange-500",
    CSS: "bg-purple-500",
    C: "bg-gray-400",
    "C++": "bg-pink-500",
    PHP: "bg-indigo-500",
  };

  return (
    <div
      className="
      bg-gray-900
      border
      border-gray-800
      rounded-xl
      p-5
      hover:border-blue-500
      hover:-translate-y-1
      hover:shadow-lg
      transition-all
      duration-300
      "
    >

      {/* Header */}

      <div className="flex justify-between items-start">

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="
            text-blue-400
            font-semibold
            text-lg
            hover:underline
            break-all
          "
        >
          {repo.name}
        </a>

        <FaExternalLinkAlt
          className="
          text-gray-500
          mt-1
          "
        />

      </div>

      {/* Description */}

      <p
        className="
        text-gray-400
        mt-3
        min-h-[72px]
        "
      >
        {repo.description ||
          "No description available"}
      </p>

      {/* Language */}

      <div className="flex flex-wrap gap-3 mt-4">

        <span
          className="
          flex
          items-center
          gap-2
          bg-gray-800
          px-3
          py-1
          rounded-full
          text-sm
          "
        >

          <span
            className={`
              w-3
              h-3
              rounded-full
              ${
                languageColors[
                  repo.language
                ] || "bg-gray-500"
              }
            `}
          />

          {repo.language || "Unknown"}

        </span>

        <span
          className="
          bg-gray-800
          px-3
          py-1
          rounded-full
          text-sm
          "
        >
          {repo.visibility || "public"}
        </span>

      </div>

      {/* Stats */}

      <div
        className="
        flex
        flex-wrap
        gap-5
        mt-5
        text-sm
        text-gray-300
        "
      >

        <span className="flex items-center gap-2">

          <FaStar />

          {repo.stargazers_count}

        </span>

        <span className="flex items-center gap-2">

          <FaCodeBranch />

          {repo.forks_count}

        </span>

        <span className="flex items-center gap-2">

          <FaExclamationCircle />

          {repo.open_issues_count}

        </span>

      </div>

      {/* Footer */}

      <div
        className="
        mt-5
        pt-4
        border-t
        border-gray-800
        text-xs
        text-gray-500
        "
      >

        Updated{" "}
        {new Date(
          repo.updated_at
        ).toLocaleDateString()}

      </div>

    </div>
  );
}

export default RepoCard;