import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SidebarLeft from "../components/SidebarLeft"
import Footer from "../components/Footer";
const HomeTemplate = () => {
  return (
    <>
      <Navbar />
      <div className="flex py-2">
       <div className="w-1/5">
       <SidebarLeft/>
       </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HomeTemplate;
