import React from "react";
import { Avatar, Input } from "@twilio-paste/core";
import {
  FileUploader,
  FileUploaderDropzone,
  FileUploaderDropzoneText,
} from "@twilio-paste/core/file-uploader";
import { Button } from "@twilio-paste/core/button";
import { ProductMarketingCampaignsIcon } from "@twilio-paste/icons/esm/ProductMarketingCampaignsIcon";
import img from "../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";

const CreateNewPost = () => {
  return (
    <div className="flex justify-between px-3 w-2/3 rounded-lg bg-white border-2 border-red-500 h-fit shadow-md shadow-gray-400">
      <div className="pt-3 pr-3">
        <Avatar
          size="sizeIcon100"
          name="Avatar"
          href="/"
          as="a"
          variant="entity"
          src={img}
        />
      </div>
      <div className="pt-5 w-full">
        <Input
          aria-describedby="email_help_text"
          id="title_post"
          name="title_post"
          type="text"
          size="lg"
          placeholder="Create a new post..."
          onChange={() => {}}
          required
        />
        <div className="flex justify-between">
          <div className="pb-3">
            <FileUploader name="Default File Uploader">
              <FileUploaderDropzone acceptedMimeTypes={["image/*"]}>
                <FileUploaderDropzoneText>
                  Browse Image or drag them here
                </FileUploaderDropzoneText>
              </FileUploaderDropzone>
            </FileUploader>
          </div>
          <div className="pt-3">
            <Button variant="primary" size="icon">
              <ProductMarketingCampaignsIcon
                decorative={false}
                title="Post"
                size="sizeIcon60"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
