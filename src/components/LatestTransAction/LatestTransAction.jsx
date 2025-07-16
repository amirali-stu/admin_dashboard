import React from "react";
import LatestTransActionTbody from "./LatestTransActionTbody/LatestTransActionTbody";
import { latestTransActionData } from "../Datas/Datas";

function LatestTransAction() {
  return (
    <div className="p-4 shadow-primer rounded-md">
      <h3 className="text-lg font-medium">Latest TransActions</h3>

      <div className="flex items-center flex-col gap-y-2 mt-5">
        <table className="w-full">
          <thead>
            <tr className="*:text-start">
              <th>Customer</th>
              <th>Data</th>
              <th>Amount</th>
              <th className=" max-sm:hidden sm:block">Status</th>
            </tr>
          </thead>
          <tbody>
            {latestTransActionData.map((d) => (
              <LatestTransActionTbody key={d.id} {...d} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LatestTransAction;
