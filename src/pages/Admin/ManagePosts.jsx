import React from "react";
import Post from "../../components/Post";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListPostAction } from "../../redux/action/post-action";

const ManagePosts = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.postReducer.listPost);
  useEffect(() => {
    dispatch(getListPostAction());
  }, []);
  return (
    <div className="ml-5 flex">
      <div className="w-2/3">
        <div>
          {listPost?.map((item) => {
            return (
              <div className="mb-5" key={Math.random()}>
                <Post item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManagePosts;
