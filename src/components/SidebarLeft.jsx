import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { DataLineChartIcon } from "@twilio-paste/icons/esm/DataLineChartIcon";
import { ProductCodeExchangeCommunityIcon } from "@twilio-paste/icons/esm/ProductCodeExchangeCommunityIcon";
import { DataBarChartIcon } from "@twilio-paste/icons/esm/DataBarChartIcon";
import { CommunityIcon } from "@twilio-paste/icons/esm/CommunityIcon";
import { DirectoryIcon } from "@twilio-paste/icons/esm/DirectoryIcon";
import { ProductHomeIcon } from "@twilio-paste/icons/esm/ProductHomeIcon";
import { RoleEnum } from "../utils/enums/RoleEnums";

const SidebarLeft = () => {
  const [open, setOpen] = useState(false);
  const adminSideBar = [
    {
      icon: (
        <ProductCodeExchangeCommunityIcon
          decorative={false}
          color="#DF3F47"
          size="sizeIcon40"
          title="Fund Management"
        />
      ),
      label: "Fund Management",
      link: "/fund-dashboard",
    },
    {
      icon: (
        <DataLineChartIcon
          decorative={false}
          color="#DF3F47"
          size="sizeIcon40"
          title="Trending"
        />
      ),
      label: "Trending",
      link: "/trending",
    },
    {
      icon: (
        <CommunityIcon
          decorative={false}
          color="#DF3F47"
          size="sizeIcon40"
          title="User Management"
        />
      ),
      label: "User Management",
      link: "/user-dashboard",
    },
    {
      icon: (
        <DataBarChartIcon
          decorative={false}
          color="#DF3F47"
          size="sizeIcon40"
          title="Statistic"
        />
      ),
      label: "Statistic",
      link: "/statistic-dashboard",
    },
  ];
  const userSideBar = [
    {
      icon: (
        <ProductHomeIcon
          decorative={false}
          color="#DF3F47"
          size="sizeIcon40"
          title="Home"
        />
      ),
      label: "Home",
      link: "/home",
    },
    {
      icon: (
        <DataLineChartIcon
          decorative={false}
          color="#DF3F47"
          size="sizeIcon40"
          title="Trending"
        />
      ),
      label: "Trending",
      link: "/trending",
    },
    {
      icon: (
        <DirectoryIcon
          decorative={false}
          color="#DF3F47"
          size="sizeIcon40"
          title="Profile"
        />
      ),
      label: "Profile",
      link: "/profile",
    },
    {
      icon: (
        <ProductCodeExchangeCommunityIcon
          decorative={false}
          color="#DF3F47"
          size="sizeIcon40"
          title="Charity Fund"
        />
      ),
      label: "Charity Fund",
      link: "/charity-fund",
    },
  ];
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  console.log(userInLocal);
  const renderSideBar = (role) => {
    switch (role) {
      case RoleEnum.Admin:
        return adminSideBar.map((item) => {
          return (
            <div
              key={Math.random()}
              className="flex items-center w-4/5 mx-auto hover:bg-gray-200 transition-all duration-200 py-2 cursor-pointer"
            >
              {item.icon}
              <NavLink
                to={item.link}
                className="text-sm px-4 text-[#1473BB] font-semibold "
              >
                {item.label}
              </NavLink>
            </div>
          );
        });
      case RoleEnum.User:
        return userSideBar.map((item) => {
          return (
            <div
              key={Math.random()}
              className="flex items-center w-4/5 mx-auto hover:bg-gray-200 transition-all duration-200 py-2 cursor-pointer"
            >
              {item.icon}
              <NavLink
                to={item.link}
                className="text-md px-4 text-[#1473BB] font-semibold "
              >
                {item.label}
              </NavLink>
            </div>
          );
        });

      default:
        return <></>;
    }
  };
  return (
    <>
      <div className="bg-white rounded-lg border-2 border-red-500 h-fit shadow-md shadow-gray-400 py-2 flex lg:block">
        {renderSideBar(userInLocal?.Role)}
      </div>
    </>
  );
};

export default SidebarLeft;
