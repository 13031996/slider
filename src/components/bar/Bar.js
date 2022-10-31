import React, { useState } from "react";
import "./bar.css";

const Bar = () => {
  const [filledState, setFilledState] = useState(0);

  const getFirstBarColor = () => {
    if (filledState === 1) {
      return "bg-red-300";
    } else if (filledState === 2) {
      return "bg-yellow-300";
    } else if (filledState === 3) {
      return "bg-green-300";
    } else {
      return "bg-gray-300";
    }
  };
  const getSecondBarColor = () => {
    if (filledState === 2) {
      return "bg-yellow-300";
    } else if (filledState === 3) {
      return "bg-green-300";
    } else {
      return "bg-gray-300";
    }
  };
  const getThirdbarColor = () => {
    if (filledState === 3) {
      return "bg-green-300";
    } else {
      return "bg-gray-300";
    }
  };
  return (
    <div className="flex mt-44 mx-10 gap-0 small-height small-width bg-gray-400 rounded-sm-">
      <div className={`${getFirstBarColor()} relative medium-width  h-full`}>
        {/* isko b reusable component bana skte span ko */}
        <span
          onClick={() => setFilledState(1)}
          className={`absolute rounded-full h-5 w-5 ${getFirstBarColor()} cursor-pointer right-0  top  -translate-y`}
        />
      </div>
      <div className={`${getSecondBarColor()} relative medium-width  h-full`}>
        <span
          onClick={() => setFilledState(2)}
          className={`absolute rounded-full h-5 w-5 ${getSecondBarColor()} cursor-pointer right-0  top  -translate-y`}
        />
      </div>
      <div className={`${getThirdbarColor()} relative medium-width  h-full`}>
        <span
          onClick={() => setFilledState(3)}
          className={`absolute rounded-full h-5 w-5 ${getThirdbarColor()} cursor-pointer right-0  top  -translate-y`}
        />
      </div>
    </div>
  );
};

export default Bar;
