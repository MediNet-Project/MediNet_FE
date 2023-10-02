import React from "react";
import { Text } from "@twilio-paste/core";
import { Avatar } from "@twilio-paste/core";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";

const Follower = (props) => {
  const navigate = useNavigate();
  return (
    <div className="px-2 py-3 w-full bg-[#E5E5E5] rounded-lg flex flex-col items-center">
      <div className="mx-auto">
        <div className="py-2 w-full">
          <Avatar
            size="sizeIcon100"
            name="Avatar"
            onClick={() => {
              navigate(`/profile/${props?.item?.followerId}`);
            }}
            as="a"
            variant="entity"
            src={props?.item?.image !== null ? props?.item?.image : img}
          />
        </div>
      </div>
      <div className="text-center">
        <Text as="h3" fontSize="fontSize40" lineHeight="lineHeight60">
          <Text
            as="a"
            color="inherit"
            fontSize="inherit"
            lineHeight="inherit"
            textDecoration="none"
            onClick={() => {
              navigate(`/profile/${props?.item?.followerId}`);
            }}
          >
            {props?.item?.userName}
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
          {props?.item?.position}
        </Text>
      </div>
    </div>
  );
};

export default Follower;
