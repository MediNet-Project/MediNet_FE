import React from "react";
import avatar from "./../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";
import { Button } from "@twilio-paste/core/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductSettingsIcon } from "@twilio-paste/icons/esm/ProductSettingsIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserByIdAction } from "../redux/action/user-action";

const ProfileUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserByIdAction(id));
  }, []);
  const [followPressed, setFollowPressed] = React.useState(false);
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  const renderButton = () => {
    if (userDetail.id == userInLocal.Id) {
      return (
        <Button
          variant="primary"
          size="small"
          onClick={() => {
            navigate(`/profile/${userInLocal.Id}/update`);
          }}
        >
          <ProductSettingsIcon decorative={false} title="Update Profile" />
          Update Profile
        </Button>
      );
    } else {
      return (
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
      );
    }
  };
  const navigate = useNavigate();
  return (
    <div className="flex items-center p-5">
      <img
        src={userDetail?.image !== null ? userDetail?.image : avatar}
        className="w-[120px] h-[120px] rounded-lg object-cover"
      />
      <div className="w-full">
        <h1 className="font-extrabold text-2xl pl-10">
          {userDetail?.userName}
        </h1>
        <p className="text-lg text-gray-500 pl-10">{userDetail?.position}</p>
        <div className="flex justify-between">
          <p className="text-lg text-gray-500 pl-10">{userDetail?.phone}</p>
          {renderButton()}
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
