import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { DataLineChartIcon } from "@twilio-paste/icons/esm/DataLineChartIcon";
import { ProductCodeExchangeCommunityIcon } from "@twilio-paste/icons/esm/ProductCodeExchangeCommunityIcon";
import { DataBarChartIcon } from "@twilio-paste/icons/esm/DataBarChartIcon";
import { CommunityIcon } from "@twilio-paste/icons/esm/CommunityIcon";
const SidebarLeft = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white border-2 border-red-500 h-fit shadow-md shadow-gray-400 py-2">
        <div className="flex items-center hover:bg-gray-200 transition-all duration-200 py-2 cursor-pointer">
          <ProductCodeExchangeCommunityIcon
            decorative={false}
            color="#DF3F47"
            size="sizeIcon40"
            title="Fund Management"
          />
          <NavLink to={"login"} className="text-lg px-4 text-[#1473BB] font-semibold ">
          Fund Management
          </NavLink>
        </div>
        <div className="flex items-center hover:bg-gray-200 transition-all duration-200 py-2 cursor-pointer">
          <DataLineChartIcon
            decorative={false}
            color="#DF3F47"
            size="sizeIcon40"
            title="Trending"
          />
          <NavLink to={"login"} className="text-[#1473BB] text-lg px-4 font-semibold">
          Trending
          </NavLink>
        </div>
        <div className="flex items-center hover:bg-gray-200 transition-all duration-200 py-2 cursor-pointer">
          <CommunityIcon
            decorative={false}
            color="#DF3F47"
            size="sizeIcon40"
            title="User Management"
          />
          <NavLink to={"login"} className="text-[#1473BB] text-lg px-4 font-semibold">
          User Management
          </NavLink>
        </div>
        <div className="flex items-center hover:bg-gray-200 transition-all duration-200 py-2 cursor-pointer">
          <DataBarChartIcon
            decorative={false}
            color="#DF3F47"
            size="sizeIcon40"
            title="Statistic"
          />
          <NavLink to={"login"} className="text-[#1473BB] text-lg px-4 font-semibold">
          Statistic
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SidebarLeft;
