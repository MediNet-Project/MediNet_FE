import React from "react";
import { Text } from "@twilio-paste/core";
import { useNavigate } from "react-router-dom";
import { Avatar, Card } from "@twilio-paste/core";
import { Button } from "@twilio-paste/core/button";
import img from "../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";
import { useDispatch } from "react-redux";
import {
  createFollowAction,
  deleteFollowAction,
} from "../redux/action/follow-action";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";

const Following = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  const [followPressed, setFollowPressed] = React.useState(false);

  const followObject = {
    followingId: props.item.followingId,
    followerId: Number(userInLocal.Id),
  };

  const handleClickFollow = () => {
    setFollowPressed(!followPressed);
    dispatch(createFollowAction(followObject));
  };

  const handleClickUnFollow = () => {
    setFollowPressed(!followPressed);
    dispatch(deleteFollowAction(props.item.id));
  };
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
        {followPressed ? (
          <Button onClick={handleClickFollow}>
            <div className="flex">
              <PlusIcon decorative />
              <p>Follow</p>
            </div>
          </Button>
        ) : (
          <Button onClick={handleClickUnFollow} variant="secondary_icon">
            <p className="text-red-600">Unfollow</p>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Following;
