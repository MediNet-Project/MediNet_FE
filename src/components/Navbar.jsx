import React, { useEffect } from "react";
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
import { Box, Combobox } from "@twilio-paste/core";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getUserSignedInDetailAction,
  logoutAction,
} from "../redux/action/user-action";
import { getUserByIdAction } from "../redux/action/user-action";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const dispatch = useDispatch();
  const userSignedIn = useSelector((state) => state.userReducer.userSignedIn);
  const navigate = useNavigate();
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  useEffect(() => {
    if (userInLocal) {
      dispatch(getUserSignedInDetailAction(Number(userInLocal?.Id)));
    }
  }, []);
  return (
    <div className="py-2 px-3 w-full rounded-sm bg-white border-2 border-red-500 h-fit shadow-md shadow-gray-400">
      <div className="header flex justify-between mx-auto">
        <div
          onClick={() => {
            navigate("/home");
          }}
        >
          <img className="w-40 object-contain" src={logoHorizontal} alt="" />
        </div>
        <div className="w-1/3 pt-2">
          <Combobox
            placeholder="Search"
            autocomplete
            insertBefore={<SearchIcon color="colorTextIcon" decorative />}
            labelText="Search application"
            hideVisibleLabel
            items={["one", "two"]}
            onChange={() => {}}
          />
        </div>
        <p className="text-color-blue mt-4">
          Welcome, {userSignedIn?.userName}
        </p>
        <div className="flex justify-between mt-3">
          <div className="mx-2">
            <ChatIcon
              decorative={false}
              title="Messenger"
              size="sizeIcon50"
              color="#1473BB"
            />
          </div>
          <div className="mx-2">
            <NotificationIcon
              decorative={false}
              title="Notification"
              size="sizeIcon50"
              color="#1473BB"
            />
          </div>

          <div className="mx-2">
            <UserDialogContainer
              name="Avatar"
              icon={UserIcon}
              baseId="i-am-user-dialog"
            >
              <UserDialog
                aria-label="user menu"
                data-testid="basic-user-dialog"
              >
                <UserDialogUserInfo>
                  <UserDialogUserName>
                    {userSignedIn?.userName}
                  </UserDialogUserName>
                  <UserDialogUserEmail>
                    {userSignedIn?.email}
                  </UserDialogUserEmail>
                </UserDialogUserInfo>
                <UserDialogList aria-label="User menu actions">
                  <UserDialogListItem>
                    <UserIcon decorative />
                    {userSignedIn?.role} settings
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
                  <div
                    onClick={() => {
                      dispatch(logoutAction(navigate));
                    }}
                  >
                    <UserDialogListItem>
                      <LogOutIcon decorative />
                      Log out
                    </UserDialogListItem>
                  </div>
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
