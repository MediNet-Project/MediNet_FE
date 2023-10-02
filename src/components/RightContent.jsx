import React from "react";
import SuggestFollowing from "./SuggestFollowing";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getListUserAction } from "../redux/action/user-action";

const RightContent = () => {
  const dispatch = useDispatch();
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  useEffect(() => {
    dispatch(getListUserAction());
  }, []);
  const listUser = useSelector((state) => state.userReducer.listUser);
  const renderSuggestUser = (item) => {
    const array = [];
    const result = [];
    listUser?.map((item) => {
      if (item?.role === "User" && item?.id !== Number(userInLocal?.Id)) {
        array.push(item);
      }
    });

    array.map((item) => {
      if (item?.followerDTO?.length === 0) {
        result.push(item);
      } else {
        item?.followerDTO?.map((element) => {
          if (element?.followerId !== Number(userInLocal?.Id)) {
            result.push(item);
          }
        });
      }
    });
    return result;
  };
  return (
    <div className="bg-white rounded-lg border-2 border-red-500 w-auto h-auto shadow-md shadow-gray-400">
      <h2 className="text-center py-5 font-bold text-md">
        People you may know
      </h2>
      <div>
        {renderSuggestUser()?.map((item) => {
          return (
            <div className="px-5" key={Math.random()}>
              <SuggestFollowing item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightContent;
