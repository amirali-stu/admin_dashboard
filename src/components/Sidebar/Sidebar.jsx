import React from "react";
import SidebarItemWithSubmenu from "./SidebarItemWithSubmenu/SidebarItemWithSubmenu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReportIcon from "@mui/icons-material/Report";
import AllInboxIcon from "@mui/icons-material/AllInbox";

function Sidebar({ isOpen }) {
  return (
    <>
      <div
        className="max-sm:hidden block sm:sticky top-0 px-3 bg-indigo-100/20 py-4 rounded-r-md max-h-screen overflow-y-scroll pb-20 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <SidebarItemWithSubmenu
          title={"Dashboard"}
          icons={[CalendarMonthIcon, TrendingUpIcon, TimelineIcon]}
          subItems={[
            { label: "Home", path: "/" },
            { label: "Analytics", path: "" },
            { label: "Sales", path: "" },
          ]}
        />
        <SidebarItemWithSubmenu
          title={"Quick Menu"}
          icons={[
            PersonIcon,
            PersonIcon,
            StorefrontIcon,
            AttachMoneyIcon,
            BarChartIcon,
          ]}
          subItems={[
            { label: "Users", path: "/users" },
            { label: "New User", path: "/new-user" },
            { label: "Products", path: "/products" },
            { label: "Transaction", path: "" },
            { label: "Reports", path: "" },
          ]}
        />
        <SidebarItemWithSubmenu
          title={"Notification"}
          icons={[
            MailOutlineOutlinedIcon,
            DynamicFeedIcon,
            ChatBubbleOutlineOutlinedIcon,
          ]}
          subItems={[
            { label: "Mail", path: "" },
            { label: "Feedback", path: "" },
            { label: "Message", path: "" },
          ]}
        />
        <SidebarItemWithSubmenu
          title={"staff"}
          icons={[AllInboxIcon, TrendingUpIcon, ReportIcon]}
          subItems={[
            { label: "Manage", path: "" },
            { label: "Analytics", path: "" },
            { label: "Report", path: "" },
          ]}
        />
      </div>
      <div
        className={`max-sm:block hidden fixed ${
          isOpen ? "-left-full" : "left-0"
        } transition-all duration-300 top-0 bottom-0 z-[9999] bg-[#f4f7fd] p-2 max-h-screen overflow-y-scroll shadow-[0_0_10px_rgba(0,0,0,0.4)] w-[256px]`}
      >
        <h3 className="text-xl text-indigo-700 font-bold mb-3">SideBar</h3>

        <SidebarItemWithSubmenu
          title={"Dashboard"}
          icons={[CalendarMonthIcon, TrendingUpIcon, TimelineIcon]}
          subItems={[
            { label: "Home", path: "/" },
            { label: "Analytics", path: "" },
            { label: "Sales", path: "" },
          ]}
        />
        <SidebarItemWithSubmenu
          title={"Quick Menu"}
          icons={[
            PersonIcon,
            PersonIcon,
            StorefrontIcon,
            AttachMoneyIcon,
            BarChartIcon,
          ]}
          subItems={[
            { label: "Users", path: "/users" },
            { label: "New User", path: "/new-user" },
            { label: "Products", path: "/products" },
            { label: "Transaction", path: "" },
            { label: "Reports", path: "" },
          ]}
        />
        <SidebarItemWithSubmenu
          title={"Notification"}
          icons={[
            MailOutlineOutlinedIcon,
            DynamicFeedIcon,
            ChatBubbleOutlineOutlinedIcon,
          ]}
          subItems={[
            { label: "Mail", path: "" },
            { label: "Feedback", path: "" },
            { label: "Message", path: "" },
          ]}
        />
        <SidebarItemWithSubmenu
          title={"staff"}
          icons={[AllInboxIcon, TrendingUpIcon, ReportIcon]}
          subItems={[
            { label: "Manage", path: "" },
            { label: "Analytics", path: "" },
            { label: "Report", path: "" },
          ]}
        />
      </div>
    </>
  );
}

export default Sidebar;
