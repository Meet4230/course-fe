import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const WorkingHours = () => {
  const percentage = 84;

  return (
    <div className="">
      <div className="flex  justify-between items-center gap-12">
        <div className="text-lg font-semibold text-black">Working hours</div>
        <div className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-lg text-sm">
          Today
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="w-36 h-36">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#3b82f6",
              trailColor: "#d1d5db",
              strokeLinecap: "round",
            })}
          />
        </div>
      </div>
      <div className="flex justify-around text-sm mt-8">
        <div className="flex items-center text-lg font-semibold">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
          <span>Progress</span>
        </div>
        <div className="flex items-center text-lg font-semibold">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
          <span>Done</span>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
