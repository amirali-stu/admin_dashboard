import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import profile from "/images/profile/Admin-Profile.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "react-tooltip";

function TopBar({ isOpen, setIsOpen }) {
  return (
    <div className="sticky z-[999] bg-white top-0 py-3 px-3 flex items-center justify-between">
      <div>
        <span
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Logo"
          className="text-xl text-indigo-700 font-bold"
        >
          DashBord Admin
        </span>
      </div>
      <div className="flex items-center gap-x-2 max-sm:hidden">
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Notification"
          className="relative cursor-pointer"
        >
          <NotificationsIcon />
          <span className="absolute bottom-1/2 left-1/2 bg-red-500 text-white rounded-1/2 rounded-full text-xs px-1">
            2
          </span>
        </div>
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Language"
          className="relative cursor-pointer"
        >
          <LanguageIcon />
          <span className="absolute bottom-1/2 left-1/2 bg-red-500 text-white rounded-1/2 rounded-full text-xs px-1">
            2
          </span>
        </div>
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Setting"
          className="cursor-pointer"
        >
          <SettingsIcon />
        </div>
        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Profile"
          src={profile}
          alt="/"
          className="w-8 h-8 cursor-pointer"
        />
      </div>
      <div
        className="hidden max-sm:block text-indigo-700"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <MenuIcon /> : <CloseIcon />}
      </div>

      <Tooltip
        id="my-tooltip"
        className="bg-[#333] text-white rounded-lg p-2 shadow-lg"
      />
    </div>
  );
}

export default TopBar;
