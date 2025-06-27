import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white shadow-2xl p-6 text-center">
      <div className="w-72 h-72 mb-4">
        <DotLottieReact
          src="https://lottie.host/83742a14-0ed5-4e11-b48f-db1a9eb1b173/BfLeZTj60n.lottie"
          loop
          autoplay
        />
      </div>
      <h1 className="text-8xl font-extrabold text-red-300">Sorry</h1>
      <p className="text-2xl mt-4 font-semibold text-red-300">No Page found!</p>
      <p className="text-md text-red-300 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 border border-red-300 text-red-300 rounded-full hover:bg-red-300 hover:text-white transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
