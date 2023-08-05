import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SidebarLeft from "../components/SidebarLeft";
import Footer from "../components/Footer";
import { RoleEnum } from "../utils/enums/RoleEnums";
import { Button } from "@twilio-paste/core/button";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const HomeTemplate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [showMenuMobi, setShowMenuMobi] = useState(true);
  const [showAdminNA, setShowAdminNA] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowSize.width > 768) {
      setShowMenuMobi(true);
      if (role === RoleEnum.Admin) {
        setShowAdminNA(false);
      }
    } else {
      setShowMenuMobi(false);
      if (role === RoleEnum.Admin) {
        setShowAdminNA(true);
      }
    }
  }, [windowSize.width]);

  return (
    <>
      {showAdminNA ? (
        <div className="w-full h-screen relative">
          <div className="text-center flex flex-col justify-center h-full">
            <h1 className="font-bold text-red-500 text-2xl">
              This function is not available on mobile screen
            </h1>
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      ) : (
        <>
          <Navbar name={role} />
          <div className="grid grid-cols-12 py-2">
            <div className="col-span-12 mb-4 mt-2 lg:m-0 lg:col-span-2">
              <SidebarLeft />
              {location.pathname === "/user-dashboard" ? (
                <div className="text-center mt-4">
                  <Button
                    variant="primary"
                    size="small"
                    onClick={() => {
                      navigate("/user-dashboard/create-user");
                    }}
                  >
                    <PlusIcon decorative={false} title="Create" />
                    Create User
                  </Button>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="col-span-12 lg:col-span-10">
              <Outlet />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default HomeTemplate;
