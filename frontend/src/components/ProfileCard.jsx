import {
  FaMapMarkerAlt,
  FaBuilding,
  FaGlobe,
  FaGithub
} from "react-icons/fa";

function ProfileCard({ profile }) {
  return (
    <div
      className="
      bg-gray-900
      border
      border-gray-800
      rounded-2xl
      p-8
      shadow-xl
      "
    >
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Avatar */}

        <div className="flex justify-center">

          <img
            src={profile.avatar_url}
            alt={profile.login}
            className="
              w-40
              h-40
              rounded-full
              border-4
              border-gray-700
              object-cover
            "
          />

        </div>

        {/* Details */}

        <div className="flex-1">

          <h2 className="text-3xl font-bold">
            {profile.name || "No Name"}
          </h2>

          <p className="text-lg text-gray-400 mt-1">
            @{profile.login}
          </p>

          {profile.bio && (
            <p className="mt-4 text-gray-300 leading-relaxed">
              {profile.bio}
            </p>
          )}

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

            <div className="bg-gray-800 p-4 rounded-xl text-center">

              <p className="text-2xl font-bold">
                {profile.followers}
              </p>

              <p className="text-gray-400 text-sm">
                Followers
              </p>

            </div>

            <div className="bg-gray-800 p-4 rounded-xl text-center">

              <p className="text-2xl font-bold">
                {profile.following}
              </p>

              <p className="text-gray-400 text-sm">
                Following
              </p>

            </div>

            <div className="bg-gray-800 p-4 rounded-xl text-center">

              <p className="text-2xl font-bold">
                {profile.public_repos}
              </p>

              <p className="text-gray-400 text-sm">
                Repositories
              </p>

            </div>

            <div className="bg-gray-800 p-4 rounded-xl text-center">

              <p className="text-2xl font-bold">
                {profile.public_gists}
              </p>

              <p className="text-gray-400 text-sm">
                Gists
              </p>

            </div>

          </div>

          {/* User Info */}

          <div className="flex flex-wrap gap-3 mt-6">

            {profile.location && (
              <span
                className="
                flex
                items-center
                gap-2
                bg-gray-800
                px-4
                py-2
                rounded-lg
                text-sm
                "
              >
                <FaMapMarkerAlt />
                {profile.location}
              </span>
            )}

            {profile.company && (
              <span
                className="
                flex
                items-center
                gap-2
                bg-gray-800
                px-4
                py-2
                rounded-lg
                text-sm
                "
              >
                <FaBuilding />
                {profile.company}
              </span>
            )}

            {profile.blog && (
              <a
                href={
                  profile.blog.startsWith("http")
                    ? profile.blog
                    : `https://${profile.blog}`
                }
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  bg-gray-800
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  hover:bg-gray-700
                "
              >
                <FaGlobe />
                Website
              </a>
            )}

          </div>

          {/* Dates */}

          <div className="grid md:grid-cols-2 gap-4 mt-6">

            <div className="bg-gray-800 p-4 rounded-lg">

              <p className="text-sm text-gray-400">
                Account Created
              </p>

              <p className="font-medium mt-1">
                {new Date(
                  profile.created_at
                ).toLocaleDateString()}
              </p>

            </div>

            <div className="bg-gray-800 p-4 rounded-lg">

              <p className="text-sm text-gray-400">
                Last Updated
              </p>

              <p className="font-medium mt-1">
                {new Date(
                  profile.updated_at
                ).toLocaleDateString()}
              </p>

            </div>

          </div>

          {/* CTA */}

          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              bg-blue-600
              hover:bg-blue-700
              transition
              px-5
              py-3
              rounded-lg
              font-medium
            "
          >
            <FaGithub />

            View GitHub Profile
          </a>

        </div>

      </div>
    </div>
  );
}

export default ProfileCard;