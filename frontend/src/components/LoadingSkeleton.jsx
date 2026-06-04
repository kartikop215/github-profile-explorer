function LoadingSkeleton() {
  return (
    <div className="animate-pulse">

      <div className="bg-gray-800 h-56 rounded-2xl mb-8"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {[...Array(6)].map((_, index) => (

          <div
            key={index}
            className="
            bg-gray-800
            rounded-xl
            h-52
            "
          />

        ))}

      </div>

    </div>
  );
}

export default LoadingSkeleton;