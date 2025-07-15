import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import profile from "/images/profile/Admin-Profile.png";

function TopBar() {
  return (
    <div className="sticky top-0 py-3 px-3 flex items-center justify-between">
      <div>
        <span className="text-xl text-indigo-700 font-bold">
          DashBord Admin
        </span>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="relative cursor-pointer">
          <NotificationsIcon />
          <span className="absolute bottom-1/2 left-1/2 bg-red-500 text-white rounded-1/2 rounded-full text-xs px-1">
            2
          </span>
        </div>
        <div className="relative cursor-pointer">
          <LanguageIcon />
          <span className="absolute bottom-1/2 left-1/2 bg-red-500 text-white rounded-1/2 rounded-full text-xs px-1">
            2
          </span>
        </div>
        <div className="cursor-pointer">
          <SettingsIcon />
        </div>
        <img src={profile} alt="/" className="w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
}

export default TopBar;
