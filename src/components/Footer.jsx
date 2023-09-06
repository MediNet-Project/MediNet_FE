import { Button } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a
              className="font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center hover:shadow-md hover:shadow-gray-400 transition-all duration-200 text-white m-1 bg-[#3b5998]"
              href="#!"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center hover:shadow-md hover:shadow-gray-400 transition-all duration-200 text-white m-1 bg-[#55acee]"
              href="#!"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center hover:shadow-md hover:shadow-gray-400 transition-all duration-200 text-white m-1 bg-[#dd4b39]"
              href="#!"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center hover:shadow-md hover:shadow-gray-400 transition-all duration-200 text-white m-1 bg-[#ac2bac]"
              href="#!"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center hover:shadow-md hover:shadow-gray-400 transition-all duration-200 text-white m-1 bg-[#0082ca]"
              href="#!"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center hover:shadow-md hover:shadow-gray-400 transition-all duration-200 text-white m-1 bg-[#333333]"
              href="#!"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3 bg-[#0601013c]">
          © 2023 Copyright:
          <a className="text-white" href="https://github.com/SelinaHoHo">
            MediNet - Social network for Vietnamese's healthcare industry
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
