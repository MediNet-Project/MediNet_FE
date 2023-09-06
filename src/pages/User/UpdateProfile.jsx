import React, { useState, useRef } from "react";
import avatar from "../../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";
import { Button } from "@twilio-paste/core/button";
import { AcceptIcon } from "@twilio-paste/icons/esm/AcceptIcon";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { FileImageIcon } from "@twilio-paste/icons/esm/FileImageIcon";
import { convertObjectToFormData } from "../../utils/functions";
import { Input } from "@twilio-paste/core/input";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { PinIcon } from "@twilio-paste/icons/esm/PinIcon";
import { CallIcon } from "@twilio-paste/icons/esm/CallIcon";
import { ProductKeysIcon } from "@twilio-paste/icons/esm/ProductKeysIcon";
import { ProductAdminAccessControlIcon } from "@twilio-paste/icons/esm/ProductAdminAccessControlIcon";
import { useNavigate } from "react-router-dom";
import { Switch } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ProductVerifyIcon } from "@twilio-paste/icons/esm/ProductVerifyIcon";
import {
  changeAvatarAction,
  changePasswordAction,
  updateUserAction,
} from "../../redux/action/user-action";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalFooterActions,
  ModalHeader,
  ModalHeading,
} from "@twilio-paste/core/modal";
import { useUID } from "@twilio-paste/core/uid-library";
import * as Yup from "yup";
import { useEffect } from "react";
import { getUserByIdAction } from "../../redux/action/user-action";
import { useParams } from "react-router-dom";

const UpdateProfile = () => {
  const { id } = useParams();
  const [enableChangePassword, setEnableChangePassword] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);
  const modalHeadingID = useUID();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  useEffect(() => {
    dispatch(getUserByIdAction(id));
  }, []);
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  const formikUserInfo = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: userDetail?.id || "",
      userName: userDetail?.userName || "",
      role: "User",
      position: userDetail?.position || "",
      email: userDetail?.email,
      phone: userDetail?.phone || "",
    },
    // validationSchema:{}
    onSubmit: (values) => {
      dispatch(updateUserAction(values, navigate));
    },
  });
  const password = useRef(null);
  const confirmPwd = useRef(null);
  const [uploadImg, setUploadImg] = useState(null);
  const formikChangeAvatar = useFormik({
    enableReinitialize: true,
    initialValues: {
      Id: userDetail?.id,
      Image: userDetail?.image,
    },
    onSubmit: (values) => {
      let changeAvatar = convertObjectToFormData(values);
      dispatch(changeAvatarAction(userDetail?.id, changeAvatar, navigate));
      setUploadImg(null);
    },
  });
  const handleUploadImage = (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setUploadImg(event.target.result);
      };
      formikChangeAvatar.setFieldValue("Image", file);
    }
  };
  const formikChangePassword = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: userInLocal?.Id,
      password: "",
      confirmPwd: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Enter new password"),
      confirmPwd: Yup.string()
        .required("Enter confirmed password")
        .oneOf([Yup.ref("password"), null], "Confirmed password is not match"),
    }),
    onSubmit: (values) => {
      dispatch(changePasswordAction(values, navigate));
      password.current.value = "";
      confirmPwd.current.value = "";
    },
  });

  const rederModalUpdate = () => {
    return (
      <Modal
        ariaLabelledby={modalHeadingID}
        isOpen={isOpen}
        onDismiss={handleClose}
        size="default"
      >
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Do you want to update{" "}
            {enableChangePassword ? "password" : "information"}
          </ModalHeading>
        </ModalHeader>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="destructive_secondary" onClick={handleClose}>
              No
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                if (enableChangePassword) {
                  formikChangePassword.handleSubmit();
                  handleClose();
                } else {
                  formikUserInfo.handleSubmit();
                  handleClose();
                }
              }}
            >
              Yes
            </Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <div className="py-2 px-3 ml-5 bg-white rounded-lg border-2 border-red-500 h-fit shadow-md shadow-gray-400">
      <div className="w-full mt-5">
        <div className="w-1/2 mx-auto">
          <img
            src={uploadImg ? uploadImg : formikChangeAvatar?.values?.Image}
            alt="Avatar"
            className="w-[150px] h-[150px] rounded-lg object-cover mx-auto"
          />
          <div className="flex justify-center mt-5">
            {uploadImg ? (
              <div className="flex justify-between">
                <button
                  className="flex items-center bg-green-700 text-white px-3 py-2 rounded-md shadow shadow-gray-300 cursor-pointer hover:bg-white hover:text-green-700 transition-all duration-200"
                  type="button"
                  onClick={formikChangeAvatar.handleSubmit}
                >
                  Upload Image
                </button>
                <div className="ml-2">
                  <label
                    className="flex items-center bg-blue-700 text-white px-3 py-2 rounded-md shadow shadow-gray-300 cursor-pointer hover:bg-white hover:text-blue-700 transition-all duration-200"
                    variant="primary"
                    size="small"
                    htmlFor="uploadAvatar"
                  >
                    <FileImageIcon decorative={false} title="Change Avatar" />
                    <p className="ml-2"> Change Avatar</p>
                  </label>
                  <input
                    onChange={handleUploadImage}
                    acceptedMimeTypes={["image/*"]}
                    id="uploadAvatar"
                    className="hidden"
                    type="file"
                  />
                </div>
              </div>
            ) : (
              <>
                <label
                  className="flex items-center bg-blue-700 text-white px-3 py-2 rounded-md shadow shadow-gray-300 cursor-pointer hover:bg-blue-600 transition-all duration-200"
                  variant="primary"
                  size="small"
                  htmlFor="uploadAvatar"
                >
                  <FileImageIcon decorative={false} title="Change Avatar" />
                  <p className="ml-2"> Change Avatar</p>
                </label>
                <input
                  onChange={handleUploadImage}
                  acceptedMimeTypes={["image/*"]}
                  id="uploadAvatar"
                  className="hidden"
                  type="file"
                />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <div className="py-3 mt-8">
          <Input
            type="text"
            disabled={enableChangePassword !== false ? true : false}
            value={formikUserInfo?.values?.userName}
            onChange={formikUserInfo.handleChange}
            name="userName"
            placeholder="User Name"
            insertBefore={
              <UserIcon
                decorative={false}
                title="User Name"
                placeholder="User Name"
              />
            }
          />
        </div>
        <div className="py-3">
          <Input
            type="text"
            disabled={enableChangePassword !== false ? true : false}
            value={formikUserInfo?.values?.position}
            onChange={formikUserInfo.handleChange}
            name="position"
            placeholder="Position"
            insertBefore={<PinIcon decorative={false} title="Position" />}
          />
        </div>
        <div className="py-3">
          <Input
            type="text"
            disabled={enableChangePassword !== false ? true : false}
            name="phone"
            value={formikUserInfo?.values?.phone}
            onChange={formikUserInfo.handleChange}
            placeholder="Phone Number"
            insertBefore={<CallIcon decorative={false} title="Phone Number" />}
          />
        </div>
      </div>
      <div className="flex justify-between w-3/4 mx-auto items-center ">
        <div className="flex 1/2">
          <span className="mr-2">Change Password?</span>
          <Switch
            onChange={() => {
              setEnableChangePassword(!enableChangePassword);
            }}
            id="email-alerts"
          />
        </div>
        <div className="w-1/2">
          <div className="py-3">
            <Input
              disabled={enableChangePassword === false ? true : false}
              type="password"
              name="oldPwd"
              onChange={formikChangePassword?.values.oldPwd}
              placeholder="Old password"
              insertBefore={
                <ProductAdminAccessControlIcon
                  decorative={false}
                  title="Old password"
                />
              }
            />
          </div>
          <div className="py-3">
            <Input
              ref={password}
              disabled={enableChangePassword === false ? true : false}
              type="password"
              name="password"
              onChange={formikChangePassword.handleChange}
              placeholder="New Password"
              insertBefore={
                <ProductKeysIcon decorative={false} title="New Password" />
              }
            />
            <h2 className="text-md text-red-500 mt-2">
              {formikChangePassword.errors.password}
            </h2>
          </div>
          <div className="py-3">
            <Input
              ref={confirmPwd}
              disabled={enableChangePassword === false ? true : false}
              type="password"
              name="confirmPwd"
              onChange={formikChangePassword.handleChange}
              placeholder="Confirm Password"
              insertBefore={
                <ProductVerifyIcon
                  decorative={false}
                  title="Confirm Password"
                />
              }
            />
            <h2 className="text-md text-red-500 mt-2">
              {formikChangePassword.errors.confirmPwd}
            </h2>
          </div>
          {rederModalUpdate()}
        </div>
      </div>
      <div className="flex justify-center py-3 mt-5">
        <div className="px-3">
          <Button
            type="submit"
            onClick={() => {
              navigate(`/profile/${userInLocal?.Id}`);
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
            onClick={handleOpen}
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

export default UpdateProfile;
