import React from "react";
import Post from "../../components/Post";
import CreateNewPost from "../../components/CreateNewPost";
import RightContent from "../../components/RightContent";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListPostAction } from "../../redux/action/post-action";

const HomePage = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.postReducer.listPost);
  useEffect(() => {
    dispatch(getListPostAction());
  }, []);

  return (
    <div className="ml-5 flex">
      <div className="w-2/3">
        <CreateNewPost />
        <div>
          {listPost?.map((item) => {
            return (
              <div className="my-5" key={Math.random()}>
                <Post item={item} />
              </div>
            );
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
