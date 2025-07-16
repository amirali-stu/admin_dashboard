import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function NewUsersRecentlyItem({ profile, username, skills }) {
  return (
    <div className="w-full flex items-center justify-between">
      <img src={profile} alt="New Users Recently Profile" className="w-8 h-8" />
      <div className="w-40 flex items-start justify-start flex-col">
        <h5 className="text-base font-medium">{username}</h5>
        <span className="text-sm text-gray-700">{skills}</span>
      </div>
      <div className="flex items-center p-2 bg-indigo-100 rounded-lg cursor-pointer">
        <RemoveRedEyeIcon />
      </div>
    </div>
  );
}

export default NewUsersRecentlyItem;
