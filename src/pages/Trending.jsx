import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListPostAction } from "../redux/action/post-action";
import Post from "../components/Post";
import News from "../components/News";
import { getListFollowAction } from "../redux/action/follow-action";

const Trending = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.postReducer.listPost);
  const listFollow = useSelector((state) => state.followReducer.listFollow);
  useEffect(() => {
    dispatch(getListPostAction());
    dispatch(getListFollowAction());
  }, []);
  return (
    <div className="ml-5">
      <div className="flex">
        <div className="w-2/3">
          <div key={Math.random()}>
            {listPost?.map((item) => {
              if (item?.likeCount > 0 && item?.isBlocked === false) {
                return (
                  <div className="mb-5" key={Math.random()}>
                    <Post item={item} follow={listFollow} />
                  </div>
                );
              } else return <></>;
            })}
          </div>
        </div>
        <div className="w-1/3 h-auto ml-5"></div>
      </div>
    </div>
  );
};

export default Trending;
