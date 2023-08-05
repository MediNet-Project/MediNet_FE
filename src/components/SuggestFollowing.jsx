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
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";

const SuggestFollowing = () => {
  const [followPressed, setFollowPressed] = React.useState(false);
  return (
    <div className="px-2 w-1/3">
      <MediaObject verticalAlign="center">
        <MediaFigure as="div" spacing="space40">
          <Avatar
            size="sizeIcon80"
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
