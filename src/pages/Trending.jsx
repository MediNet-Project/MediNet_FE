import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListPostAction } from "../redux/action/post-action";
import Post from "../components/Post";
import News from "../components/News";

const Trending = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.postReducer.listPost);
  useEffect(() => {
    dispatch(getListPostAction());
  }, []);
  const userSignedIn = useSelector((state) => state.userReducer.userSignedIn);
  return (
    <div className="ml-5">
      <div className="flex">
        <div className="w-2/3">
          <div>
            {listPost?.map((item) => {
              if (item?.likeCount > 0) {
                return (
                  <div className="mb-5" key={Math.random()}>
                    <Post item={item} />
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
