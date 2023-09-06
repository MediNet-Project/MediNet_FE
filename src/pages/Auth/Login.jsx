import React from "react";
import verticalLogo from "../../assets/img/logo_vertical.png";
import emailIcon from "../../assets/svg/email.svg";
import passwordIcon from "../../assets/svg/password.svg";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/action/user-action";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email cannot be empty"),
      password: Yup.string().required("Password cannot be empty"),
    }),
    onSubmit: (values) => {
      dispatch(loginAction(values, navigate));
    },
  });
  return (
    <div className="flex flex-col justify-center h-screen md:h-full bg-white">
      <div className="w-5/6 mx-auto">
        <div className="mb-10">
          <img
            className="w-1.5/5 mx-auto h-[150px] object-fix"
            src={verticalLogo}
            alt=""
          />
          <h1 className="text-red-500 font-bold text-center text-md">
            Social network for Vietnamese's healthcare industry
          </h1>
        </div>
        <div>
          <h1 className="text-center text-[#1473BB] font-bold text-3xl">
            LOGIN
          </h1>
          <form>
            <div className="mb-6 ">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>

              <div className="relative">
                <img
                  className="w-8 h-8 absolute left-2 top-1"
                  src={emailIcon}
                />
                <input
                  onChange={formik.handleChange}
                  name="email"
                  type="email"
                  id="email"
                  className="bg-gray-50 border-2 border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-[#1473BB] focus:border-[#1473BB] block w-full p-2.5 pl-12"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your password
              </label>
              <div className="relative">
                <img
                  className="w-8 h-8 absolute left-2 top-1"
                  src={passwordIcon}
                />
                <input
                  onChange={formik.handleChange}
                  name="password"
                  type="password"
                  id="password"
                  className="bg-gray-50 border-2 border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-[#1473BB] focus:border-[#1473BB] block w-full p-2.5 pl-12"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="w-full flex justify-center pb-2">
              <button
                onClick={formik.handleSubmit}
                type="submit"
                className="text-white bg-[#1473BB] font-medium rounded-lg text-sm sm:w-auto px-20 py-2.5 text-center hover:shadow-md hover:shadow-gray-400 transition-all duration-200"
              >
                Login
              </button>
            </div>
            <span className="w-full flex justify-center pb-2">Or</span>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="text-[#DF3F47] bg-[#FFFFFF] border-2 border-[#1473BB] font-medium rounded-lg text-sm sm:w-auto px-20 py-2.5 text-center hover:shadow-md hover:shadow-gray-400 transition-all duration-200"
              >
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
