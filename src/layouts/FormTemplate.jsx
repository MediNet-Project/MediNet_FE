import React from "react";
import { Outlet } from "react-router-dom";
import form_image from "../assets/img/login.png";
const FormTemplate = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12 hidden md:block md:col-span-7 px-2">
          <img
            src={form_image}
            className="w-full object-contain h-inherit max-h-screen"
            alt=""
          />
        </div>
        <div className="col-span-12 md:col-span-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default FormTemplate;
