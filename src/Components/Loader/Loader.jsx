import React from "react";
import { ClockLoader } from "react-spinners";

const GlobalLoader = () => {
  return (
    <div>
      <ClockLoader
        className="text-center w-full m-20 mx-auto"
        color="#36afd7"
        size={80}
      />
    </div>
  );
};

export default GlobalLoader;
