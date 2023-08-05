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
import {
  FileUploader,
  FileUploaderDropzone,
  FileUploaderDropzoneText,
} from "@twilio-paste/core/file-uploader";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createUserAction } from "../../../redux/action/user-action";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      role: "User",
      position: "",
      email: "",
      password: "",
      phone: "",
      image: "",
    },
    // validationSchema:{}
    onSubmit: (values) => {
      console.log(values);
      dispatch(createUserAction(values, navigate));
    },
  });
  return (
    <div className="py-2 px-3 ml-2 bg-white rounded-lg border-2 border-red-500 h-fit shadow-md shadow-gray-400">
      <div>
        <h1 className="text-center mt-7 text-[#1473BB] font-bold text-3xl">
          CREATE NEW USER
        </h1>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="py-3 mt-8">
          <Input
            onChange={formik.handleChange}
            type="text"
            name="userName"
            placeholder="User Name"
            insertBefore={<UserIcon decorative={false} title="User Name" />}
            required
          />
        </div>
        <div className="py-3">
          <Input
            onChange={formik.handleChange}
            type="text"
            name="position"
            placeholder="Position"
            insertBefore={<PinIcon decorative={false} title="Position" />}
            required
          />
        </div>

        <div className="py-3">
          <Input
            onChange={formik.handleChange}
            type="email"
            name="email"
            placeholder="Email Address"
            insertBefore={
              <EmailIcon decorative={false} title="Email Address" />
            }
          />
        </div>
        <div className="py-3">
          <Input
            onChange={formik.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            insertBefore={
              <ProductKeysIcon decorative={false} title="Password" />
            }
          />
        </div>
        <div className="py-3">
          <Input
            onChange={formik.handleChange}
            type="text"
            name="phone"
            placeholder="Phone Number"
            insertBefore={<CallIcon decorative={false} title="Phone Number" />}
          />
        </div>
      </div>
      <div className="flex justify-center py-3 mt-5">
        <div className="px-3">
          <Button
            type="submit"
            onClick={() => {
              navigate("/user-dashboard");
            }}
            variant="destructive"
            size="small"
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
            <AcceptIcon decorative={false} title="Create" />
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
