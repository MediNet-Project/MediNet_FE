import React from "react";
import Post from "../../components/Post";
import CreateNewPost from "../../components/CreateNewPost";
import RightContent from "../../components/RightContent";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListPostAction } from "../../redux/action/post-action";
import { getUserByIdAction } from "../../redux/action/user-action";

const HomePage = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.postReducer.listPost);
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  // list post of login user
  const newListPost = listPost.filter(
    (item) =>
      item.userId === Number(userInLocal.Id) ||
      item.userId === userDetail?.followingDTO?.followingId
  );

  useEffect(() => {
    dispatch(getListPostAction());
    dispatch(getUserByIdAction(Number(userInLocal.Id)));
    console.log("a", listPost);
    console.log("user", newListPost);
  }, []);

  return (
    <div className="ml-5 flex">
      <div className="w-2/3">
        <CreateNewPost />
        <div>
          {listPost?.map((item) => {
            if (item?.isBlocked === false) {
              return (
                <div className="my-5" key={Math.random()}>
                  <Post item={item} />
                </div>
              );
            } else return <></>;
          })}
        </div>
      </div>
      <div className="w-1/3 h-auto ml-5">
        <RightContent />
      </div>
    </div>
  );
};

export default HomePage;
