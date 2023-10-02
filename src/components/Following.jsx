import React from "react";
import { Text } from "@twilio-paste/core";
import { useNavigate } from "react-router-dom";
import { Avatar, Card } from "@twilio-paste/core";
import { Button } from "@twilio-paste/core/button";
import img from "../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";

const Following = (props) => {
  const navigate = useNavigate();
  const [followPressed, setFollowPressed] = React.useState(false);
  return (
    <div className="px-2 py-3 w-full bg-[#E5E5E5] rounded-lg flex flex-col items-center">
      <div className="mx-auto">
        <div className="py-2 w-full">
          <Avatar
            size="sizeIcon100"
            name="Avatar"
            onClick={() => {
              navigate(`/profile/${props.item?.followingId}`);
            }}
            as="a"
            variant="entity"
            src={props.item?.image !== null ? props.item?.image : img}
          />
        </div>
      </div>
      <div className="text-center">
        <Text as="h3" fontSize="fontSize40" lineHeight="lineHeight60">
          <Text
            onClick={() => {
              navigate(`/profile/${props.item?.followingId}`);
            }}
            as="a"
            color="inherit"
            fontSize="inherit"
            lineHeight="inherit"
            textDecoration="none"
          >
            {props.item?.userName}
          </Text>
        </Text>
      </div>
      <div className="text-center">
        <Text
          as="h4"
          fontSize="fontSize20"
          lineHeight="lineHeight20"
          color="colorTextWeak"
        >
          {props.item?.position}
        </Text>
      </div>
      <div className="pb-2 text-center">
        <Button
          variant="secondary_icon"
          pressed={followPressed}
          onClick={() => setFollowPressed(!followPressed)}
        >
          {followPressed ? (
            <div className="flex">
              <p>Follow</p>
            </div>
          ) : (
            <div className="flex">
              <p className="text-[#df3f47]">Unfollow</p>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Following;
