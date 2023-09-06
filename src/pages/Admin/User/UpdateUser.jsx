import React from "react";
import { Button } from "@twilio-paste/core/button";
import { AcceptIcon } from "@twilio-paste/icons/esm/AcceptIcon";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { Input } from "@twilio-paste/core/input";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { PinIcon } from "@twilio-paste/icons/esm/PinIcon";
import { EmailIcon } from "@twilio-paste/icons/esm/EmailIcon";
import { ProductKeysIcon } from "@twilio-paste/icons/esm/ProductKeysIcon";
import { CallIcon } from "@twilio-paste/icons/esm/CallIcon";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../../redux/action/user-action";

const UpdateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: userDetail?.id || "",
      userName: userDetail?.userName || "",
      role: "User",
      position: userDetail?.position || "",
      email: userDetail?.email || "",
      phone: userDetail?.phone || "",
    },
    // validationSchema:{}
    onSubmit: (values) => {
      dispatch(updateUserAction(values, navigate));
    },
  });
  return (
    <div className="py-2 px-3 ml-2 bg-white rounded-lg border-2 border-red-500 h-fit shadow-md shadow-gray-400">
      <div>
        <h1 className="text-center mt-7 text-[#1473BB] font-bold text-3xl">
          UPDATE USER
        </h1>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="py-3 mt-8">
          <Input
            type="text"
            name="userName"
            insertBefore={<UserIcon decorative={false} title="User Name" />}
            value={formik?.values?.userName}
            onChange={formik.handleChange}
          />
        </div>
        <div className="py-3">
          <Input
            type="text"
            name="position"
            value={formik?.values?.position}
            onChange={formik.handleChange}
            insertBefore={<PinIcon decorative={false} title="Position" />}
          />
        </div>

        <div className="py-3">
          <Input
            type="text"
            name="email"
            value={formik?.values?.email}
            onChange={formik.handleChange}
            insertBefore={
              <EmailIcon decorative={false} title="Email Address" />
            }
          />
        </div>
        <div className="py-3">
          <Input
            type="text"
            name="phone"
            value={formik?.values?.phone}
            onChange={formik.handleChange}
            insertBefore={<CallIcon decorative={false} title="Phone Number" />}
          />
        </div>
      </div>
      <div className="flex justify-center py-3 mt-5">
        <div className="px-3">
          <Button
            variant="destructive"
            size="small"
            onClick={() => {
              navigate("/user-dashboard");
            }}
          >
            <CloseIcon decorative={false} title="Cancel" />
            Cancel
          </Button>
        </div>
        <div className="px-3">
          <Button
            onClick={formik.handleSubmit}
            variant="primary"
            size="small"
            color="#DF3F47"
          >
            <AcceptIcon decorative={false} title="Update" />
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
