import { FaExclamationTriangle } from "react-icons/fa";

function ErrorMessage({ message }) {
  return (
    <div
      className="
      mt-8
      bg-red-500/10
      border
      border-red-500
      rounded-xl
      p-6
      text-center
      "
    >

      <FaExclamationTriangle
        className="
        text-red-500
        text-4xl
        mx-auto
        mb-3
        "
      />

      <p className="text-red-400">
        {message}
      </p>

    </div>
  );
}

export default ErrorMessage;