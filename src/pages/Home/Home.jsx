import React from "react";
import Feature from "../../components/Features/Feature";
import { featureData } from "../../components/Datas/Datas";
import ChartBox from "../../components/Chart/ChartBox";
import NewUsersRecently from "../../components/NewUsersRecently/NewUsersRecently";

function Home() {
  return (
    <div className="w-[100%] px-4">
      <div className="grid gap-4 w-full max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-3 mb-4">
        {featureData.map((item, index) => {
          const isLast = index === featureData.length - 1;
          const isOddOnSm = featureData.length % 2 !== 0;

          const extraClasses =
            isLast && isOddOnSm ? "sm:col-span-2 lg:col-span-1" : "";

          return <Feature key={item.id} {...item} className={extraClasses} />;
        })}
      </div>

      <ChartBox title="Chart" />
      <div>
        <NewUsersRecently />
      </div>
    </div>
  );
}

export default Home;
