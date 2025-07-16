import { div } from "framer-motion/client";
import React from "react";

function ChartBox({ title }) {
  return (
    <div className="w-full p-4 shadow-[0_0_10px_rgba(0,0,0,0.4)] rounded-md">
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
}

export default ChartBox;
