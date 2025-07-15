import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Feature({ title, mony, monyStatus, status, desc, className }) {
  return (
    <div
      className={`rounded-md p-5 w-full shadow-[0_0_10px_rgba(0,0,0,0.4)] space-y-3 ${className}`}
    >
      <h3 className="text-gray-600 font-medium">{title}</h3>
      <div className="flex items-center">
        <span className="text-2xl font-bold text-black">{mony}</span>
        <div className="ml-8 flex items-center gap-x-1">
          <span className="text-gray-400">{monyStatus}</span>
          {status === "down" ? (
            <ArrowDownwardIcon className="text-red-700" fontSize="medium" />
          ) : (
            <ArrowUpwardIcon className="text-green-700" fontSize="medium" />
          )}
        </div>
      </div>
      <span className="text-gray-400 font-medium">{desc}</span>
    </div>
  );
}

export default Feature;
