import React from "react";
import {ChevronDownIcon} from "lucide-react"

function RevenueGraph() {
  return (
    <div>
      <div className="flex justify-between items-center gap-2 ">
        <h2 className="font-medium text-[20px] ">Revenue Graph</h2>
        <button className="flex items-center cursor-pointer border border-[#004AAD] rounded-full px-4 py-2 text-[#8D9092] ">
          this week <ChevronDownIcon />{" "}
        </button>
      </div>
    </div>
  );
}

export default RevenueGraph;
