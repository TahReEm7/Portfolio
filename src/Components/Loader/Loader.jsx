import React from "react";
import { ClockLoader } from "react-spinners";

const GlobalLoader = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center w-full">
      <ClockLoader
        color="#36afd7"
        size={80}
      />
    </div>
  );
};

export default GlobalLoader;
