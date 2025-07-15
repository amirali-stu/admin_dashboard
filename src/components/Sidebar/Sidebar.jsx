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
    <div className="sticky top-0 bg-indigo-100/20 px-3 py-4 max-h-screen overflow-y-scroll pb-20">
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
  );
}

export default Sidebar;
