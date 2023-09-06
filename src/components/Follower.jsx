import React from "react";
import { Text } from "@twilio-paste/core";
import { Avatar } from "@twilio-paste/core";
import img from "../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";

const Follower = () => {
  return (
    <div className="px-2 py-3 w-full bg-[#E5E5E5] rounded-lg flex flex-col items-center">
      <div className="mx-auto">
        <div className="py-2 w-full">
          <Avatar
            size="sizeIcon100"
            name="Avatar"
            href="/"
            as="a"
            variant="entity"
            src={img}
          />
        </div>
      </div>
      <div className="text-center">
        <Text as="h3" fontSize="fontSize40" lineHeight="lineHeight60">
          <Text
            href="/"
            as="a"
            color="inherit"
            fontSize="inherit"
            lineHeight="inherit"
            textDecoration="none"
          >
            User Name
          </Text>
        </Text>
      </div>
      <div className="pb-2 text-center">
        <Text
          as="h4"
          fontSize="fontSize20"
          lineHeight="lineHeight20"
          color="colorTextWeak"
        >
          Position
        </Text>
      </div>
    </div>
  );
};

export default Follower;
