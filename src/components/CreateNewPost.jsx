import React, { useRef } from "react";
import { Avatar, Input } from "@twilio-paste/core";
import {
  FileUploader,
  FileUploaderDropzone,
  FileUploaderDropzoneText,
} from "@twilio-paste/core/file-uploader";
import { Button } from "@twilio-paste/core/button";
import { ProductMarketingCampaignsIcon } from "@twilio-paste/icons/esm/ProductMarketingCampaignsIcon";
import avatar from "../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { convertObjectToFormData } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createPostAction } from "../redux/action/post-action";
import { getUserByIdAction } from "../redux/action/user-action";

const CreateNewPost = () => {
  const dispatch = useDispatch();
  const content = useRef(null);
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  useEffect(() => {
    dispatch(getUserByIdAction(userInLocal?.Id));
  }, []);
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const [uploadImg, setUploadImg] = useState(null);
  const formik = useFormik({
    initialValues: {
      Content: "",
      UserId: userInLocal?.Id,
      Image: null,
    },
    onSubmit: (values) => {
      let newPost = convertObjectToFormData(values);
      dispatch(createPostAction(newPost));
      setUploadImg(null);
      content.current.value = "";
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
      formik.setFieldValue("Image", file);
    }
  };
  return (
    <div className="flex justify-between px-3 w-full rounded-lg bg-white border-2 border-red-500 h-fit shadow-md shadow-gray-400">
      <div className="pt-3 pr-3">
        <Avatar
          size="sizeIcon100"
          name="Avatar"
          href="/"
          as="a"
          variant="entity"
          src={userDetail?.image !== null ? userDetail?.image : avatar}
        />
      </div>
      <div className="pt-5 w-full">
        <textarea
          ref={content}
          name="Content"
          onChange={formik.handleChange}
          className="w-full border border-gray-500 focus:border-[#1473BB] rounded-md transition-all duration-300"
          placeholder="Create a new post..."
        ></textarea>
        <div className="flex justify-between">
          <div className="pb-3">
            {uploadImg !== null ? (
              <div className="relative py-3 px-3">
                <img className="w-60 h-60 object-cover" src={uploadImg} />
                <p
                  onClick={() => {
                    setUploadImg(null);
                  }}
                  className="absolute top-0 right-0 cursor-pointer"
                >
                  <i className="fa-solid fa-circle-xmark"></i>
                </p>
              </div>
            ) : (
              <FileUploader name="Default File Uploader">
                <FileUploaderDropzone
                  onInputChange={handleUploadImage}
                  acceptedMimeTypes={["image/*"]}
                >
                  <FileUploaderDropzoneText>
                    Browse Image or drag them here
                  </FileUploaderDropzoneText>
                </FileUploaderDropzone>
              </FileUploader>
            )}
          </div>
          <div className="pt-3">
            <a
              className="rounded-lg text-sm sm:w-auto px-5 py-3 text-center hover:shadow-md hover:shadow-gray-400 transition-all duration-200 text-white m-1 bg-[#1473bb]"
              onClick={formik.handleSubmit}
            >
              <i class="fa-regular fa-paper-plane"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
