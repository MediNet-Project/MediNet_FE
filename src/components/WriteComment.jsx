import React, { useRef } from "react";
import avatar from "./../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";
import { useFormik } from "formik";
import { IconButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "../redux/action/comment-action";
import { useEffect } from "react";
import { getUserByIdAction } from "../redux/action/user-action";

const WriteComment = (props) => {
  const dispatch = useDispatch();
  const content = useRef(null);
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  const formik = useFormik({
    initialValues: {
      content: "",
      userId: userInLocal?.Id,
      postId: props?.postId,
    },
    onSubmit: (values) => {
      dispatch(createCommentAction(values));
      content.current.value = "";
    },
  });

  return (
    <div className="rounded-lg border-2 h-fit shadow-sm shadow-gray-200 p-2 mb-1 ">
      <div className="flex items-stretch">
        <img
          src={userInLocal?.Image !== "" ? userInLocal?.Image : avatar}
          className="w-[40px] h-[40px] rounded-lg object-cover"
        />
        <div className="ml-2 h-fit w-full">
          <div className="w-full">
            <textarea
              className="w-full border border-gray-300 focus:border-[#1473BB] rounded-md p-1 transition-all duration-300"
              placeholder="Write your comment..."
              onChange={formik.handleChange}
              name="content"
              ref={content}
            ></textarea>
            <div className="w-full flex justify-end">
              <a
                className="font-medium rounded-lg text-sm sm:w-auto px-3 py-2.5 text-center hover:shadow-md hover:shadow-gray-400 transition-all duration-200 text-white m-1 bg-[#1473bb]"
                onClick={formik.handleSubmit}
              >
                <i className="fa-regular fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteComment;
