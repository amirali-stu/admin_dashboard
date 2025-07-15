import React from "react";
import { NavLink } from "react-router-dom";

function SidebarItemWithSubmenu({ title, icons, subItems }) {
  return (
    <div className="mb-4">
      <span className="block pb-1 text-[rgb(187,186,186)] font-mono">
        {title}
      </span>

      <ul className="pl-1 flex flex-col gap-y-1">
        {subItems.map((item, index) => {
          const Icon = icons[index];
          return item.path ? (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-x-1 px-2 py-2 rounded-xl transition-all cursor-pointer font-medium hover:bg-indigo-100 ${
                  isActive ? "bg-indigo-100/60" : ""
                }`
              }
            >
              {Icon && <Icon className="text-[#555]" />}
              <span className="text-sm text-[#555]">{item.label}</span>
            </NavLink>
          ) : (
            // اگر path نیست، فقط نمایش بده بدون لینک
            <div
              key={index}
              className="flex items-center gap-x-1 px-2 py-2 rounded-xl text-gray-400 cursor-not-allowed"
              title="Page not available yet"
            >
              {Icon && <Icon />}
              <span className="text-sm">{item.label}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default SidebarItemWithSubmenu;
