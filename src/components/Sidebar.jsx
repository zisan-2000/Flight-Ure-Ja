import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ onLinkClick }) => {
  return (
    <div className="bg-gradient-to-b from-[#00ADEF] to-[#2B3DBE] text-white w-[225px] h-[calc(100vh-100px)] flex flex-col justify-between p-6 fixed top-[100px] left-0 border-r-1.5 border-white border-opacity-50 overflow-y-auto">
      <div>
        <h2 className="text-lg font-bold mb-8">Account Setup</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/contacts"
              activeClassName="text-yellow-500"
              className="flex items-center"
              onClick={() => onLinkClick("contacts")}
            >
              <span className="mr-2">•</span> Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business-details"
              activeClassName="text-yellow-500"
              className="flex items-center"
              onClick={() => onLinkClick("business-details")}
            >
              <span className="mr-2">•</span> Business Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brand-assets"
              activeClassName="text-yellow-500"
              className="flex items-center"
            >
              <span className="mr-2">•</span> Brand Assets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grant-access"
              activeClassName="text-yellow-500"
              className="flex items-center"
            >
              <span className="mr-2">•</span> Grant Access
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/finish"
              activeClassName="text-yellow-500"
              className="flex items-center"
            >
              <span className="mr-2">•</span> Finish
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <FaPowerOff className="mr-2" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
