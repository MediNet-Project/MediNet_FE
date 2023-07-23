import React from "react";
import { NavLink } from "react-router-dom";
import logoHorizontal from "../assets/img/logo-horizontal.png";
import { Input } from "@twilio-paste/core/input";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";
import { ChatIcon } from "@twilio-paste/icons/esm/ChatIcon";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { LogOutIcon } from "@twilio-paste/icons/esm/LogOutIcon";
import { NotificationIcon } from "@twilio-paste/icons/esm/NotificationIcon";
import { TranslationIcon } from "@twilio-paste/icons/esm/TranslationIcon";
import { ThemeIcon } from "@twilio-paste/icons/esm/ThemeIcon";
import { Badge } from "@twilio-paste/core/badge";
import { Box } from "@twilio-paste/core/box";
import {
  UserDialog,
  UserDialogContainer,
  UserDialogUserInfo,
  UserDialogUserName,
  UserDialogUserEmail,
  UserDialogList,
  UserDialogListItem,
  UserDialogSeparator,
} from "@twilio-paste/core/user-dialog";
import { Button } from "@twilio-paste/core";

const Navbar = () => {
  return (
    <div className="py-2 px-3 bg-white border-2 border-red-500 h-fit shadow-md shadow-gray-400">
      <div className="header flex justify-between mx-auto">
        <img className="w-40 object-contain" src={logoHorizontal} alt="" />
        <div className="w-1/3">
          <Input
            aria-describedby="display_name_help_text"
            id="message_title"
            name="display_name"
            type="search"
            placeholder="Searching..."
            insertAfter={
              <Button>
                <SearchIcon
                  size="sizeIcon40"
                  decorative={false}
                  title="Description of icon"
                  color="#DF3F47"
                />
              </Button>
            }
            onChange={() => {}}
          />
        </div>
        <p className="text-color-blue mt-4">Welcome, Admin</p>
        <div className="flex justify-between mt-3">
          <div className="mx-2">
          <ChatIcon
            decorative={false}
            title="Messenger"
            size="sizeIcon50"
            color="#1473BB"
          />
          </div>
          <div className="mx-2"><NotificationIcon
            decorative={false}
            title="Notification"
            size="sizeIcon50"
            color="#1473BB"
          /></div>
          
         <div className="mx-2">
         <UserDialogContainer
            name="User Name"
            icon={UserIcon}
            baseId="i-am-user-dialog"
          >
            <UserDialog aria-label="user menu" data-testid="basic-user-dialog">
              <UserDialogUserInfo>
                <UserDialogUserName>Name</UserDialogUserName>
                <UserDialogUserEmail>email@email.com</UserDialogUserEmail>
              </UserDialogUserInfo>
              <UserDialogList aria-label="User menu actions">
                <UserDialogListItem>
                  <UserIcon decorative />
                  User settings
                </UserDialogListItem>
                <UserDialogSeparator />
                <UserDialogListItem>
                  <ThemeIcon decorative />
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                  >
                    Theme
                    <Badge variant="decorative10" as="span" size="small">
                      Light
                    </Badge>
                  </Box>
                </UserDialogListItem>
                <UserDialogListItem>
                  <TranslationIcon decorative />
                  <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                  >
                    Language
                    <Badge variant="decorative10" as="span" size="small">
                      EN
                    </Badge>
                  </Box>
                </UserDialogListItem>
                <UserDialogSeparator />
                <UserDialogListItem href="https://www.google.com">
                  <LogOutIcon decorative />
                  Log out
                </UserDialogListItem>
              </UserDialogList>
            </UserDialog>
          </UserDialogContainer>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
