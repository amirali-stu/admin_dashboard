import React from "react";
import NewUsersRecentlyItem from "./NewUsersRecentlyItem/NewUsersRecentlyItem";
import { newUsersRecently } from "../Datas/Datas";

function NewUsersRecently() {
  return (
    <div className="p-4 shadow-primer rounded-md">
      <h3 className="text-lg font-medium">New Join Members</h3>

      <div className="flex items-center flex-col gap-y-2 mt-5">
        {newUsersRecently.map((d) => (
          <NewUsersRecentlyItem
            key={d.id}
            profile={d.profile}
            username={d.username}
            skills={d.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default NewUsersRecently;
