import React from "react";
import { AspectRatio } from "@twilio-paste/core/aspect-ratio";
import { Box } from "@twilio-paste/core/box";

const News = () => {
  return (
    <div>
      <Box
        padding="space30"
        maxWidth="size60"
        borderColor="colorBorderWeak"
        borderStyle="solid"
        borderWidth="borderWidth10"
      >
        <AspectRatio ratio="16:50">
          <iframe
            width="260"
            height="700"
            src="https://www.medicalnewstoday.com/articles/kombucha-may-help-control-blood-sugar-in-type-2-diabetes"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </AspectRatio>
      </Box>
    </div>
  );
};

export default News;
