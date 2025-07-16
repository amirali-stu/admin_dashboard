import { div } from "framer-motion/client";
import React from "react";

function ChartBox({ title }) {
  return (
    <div className="w-full p-4 shadow-primer rounded-md mb-6">
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
}

export default ChartBox;
