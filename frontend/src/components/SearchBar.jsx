import { FaGithub, FaSearch } from "react-icons/fa";

function SearchBar({
  username,
  setUsername,
  onSearch,
}) {
  return (
    <div className="w-full max-w-2xl">

      <div
        className="
        flex
        flex-col
        sm:flex-row
        gap-3
        "
      >

        <div className="relative flex-1">

          <FaGithub
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            text-lg
            "
          />

          <input
            type="text"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch();
              }
            }}
            placeholder="Enter GitHub username..."
            className="
              w-full
              pl-12
              pr-4
              py-3
              rounded-xl
              bg-gray-800
              border
              border-gray-700
              focus:border-blue-500
              focus:outline-none
              transition
            "
          />

        </div>

        <button
          onClick={onSearch}
          className="
            flex
            items-center
            justify-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            transition
            font-medium
          "
        >

          <FaSearch />

          Search

        </button>

      </div>

    </div>
  );
}

export default SearchBar;