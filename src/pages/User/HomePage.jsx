import React from "react";
import Post from "../../components/Post";
import CreateNewPost from "../../components/CreateNewPost";
import RightContent from "../../components/RightContent";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListPostAction } from "../../redux/action/post-action";
import { getUserByIdAction } from "../../redux/action/user-action";
import { Spinner } from "@chakra-ui/react";

const HomePage = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.postReducer.listPost); // all post
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));

  // list post of login user
  const currentUserPosts = listPost.filter(
    (item) => item.userId === Number(userInLocal.Id)
  );

  // list following id
  const listId = userDetail?.followingDTO?.map((a) => a.followingId);

  // list post of following user
  const followingPosts = listPost.filter(
    (item) => listId.indexOf(item.userId) !== -1
  );

  const newListPost = currentUserPosts.concat(followingPosts);

  useEffect(() => {
    dispatch(getListPostAction());
    dispatch(getUserByIdAction(Number(userInLocal.Id)));
  }, []);

  return (
    <div className="ml-5 flex">
      <div className="w-2/3">
        <CreateNewPost />
        <div>
          {newListPost?.map((item) => {
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
