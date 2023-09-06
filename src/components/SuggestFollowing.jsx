import React from "react";
import {
  MediaObject,
  MediaFigure,
  MediaBody,
} from "@twilio-paste/core/media-object";
import { Text } from "@twilio-paste/core";
import { Avatar } from "@twilio-paste/core";
import { Button } from "@twilio-paste/core/button";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "react-toastify";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import {
  createFollowAction,
  deleteFollowAction,
} from "../redux/action/follow-action";

const SuggestFollowing = ({ item }) => {
  const dispatch = useDispatch();
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  const handleOnFollow = () => {
    if (userInLocal) {
      if (followPressed) {
        const followObject = {
          userId: Number(userInLocal.Id),
          followerId: item.id,
        };
        dispatch(createFollowAction(followObject));
      } else {
        dispatch(deleteFollowAction());
      }
    } else {
      alert.info("Please sign in first !", null, Slide, "dark");
    }
  };
  const [followPressed, setFollowPressed] = React.useState(false);
  return (
    <div className="w-full pb-5">
      <MediaObject verticalAlign="center">
        <MediaFigure as="div" spacing="space40">
          <Avatar
            size="sizeIcon90"
            name="Avatar"
            href="/"
            as="a"
            variant="entity"
            src="/src/assets/img/post-img.png"
          />
        </MediaFigure>
        <MediaBody>
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
          <Text
            as="h4"
            fontSize="fontSize20"
            lineHeight="lineHeight20"
            color="colorTextWeak"
          >
            Position
          </Text>
        </MediaBody>
        <MediaBody as="div" align="end" spacing="space40">
          <Button
            variant="secondary_icon"
            pressed={followPressed}
            onClick={() => setFollowPressed(!followPressed)}
          >
            {followPressed ? (
              <div className="flex">
                <CheckboxCheckIcon decorative />
                <p>Following</p>
              </div>
            ) : (
              <div className="flex">
                <PlusIcon decorative />
                <p>Follow</p>
              </div>
            )}
          </Button>
        </MediaBody>
      </MediaObject>
    </div>
  );
};

export default SuggestFollowing;
