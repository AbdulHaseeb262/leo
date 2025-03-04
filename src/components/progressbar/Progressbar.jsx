import React from "react";

const ProgressBar = ({ stageName = "STAGE 3", current = 33157, total = 4700000000 }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div>

      <div className="relative border-2 w-full h-5 border-black mb-3">
        <span
          className="bg-bgPrimary h-full absolute left-0 top-1/2 -translate-y-1/2 block"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
