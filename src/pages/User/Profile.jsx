import React from "react";
import ProfileUser from "../../components/ProfileUser";
import Post from "../../components/Post";
import Follower from "../../components/Follower";
import Following from "../../components/Following";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getListPostAction } from "../../redux/action/post-action";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  list,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getUserByIdAction } from "../../redux/action/user-action";

const Profile = () => {
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.postReducer.listPost);
  const { id } = useParams();
  const userDetail = useSelector((state) => state.userReducer.userDetail);
  useEffect(() => {
    dispatch(getListPostAction());
    dispatch(getUserByIdAction(id));
  }, []);
  return (
    <div className="py-2 px-3 ml-5 bg-white rounded-lg border-2 border-red-500 h-fit shadow-md shadow-gray-400">
      <ProfileUser userInfor={userDetail} />
      <div>
        <Tabs isFitted variant="soft-rounded" colorScheme="blue">
          <TabList mb="3em" mt="2em">
            <Tab color="gray.600">Posts</Tab>
            <Tab color="gray.600">Follower</Tab>
            <Tab color="gray.600">Following</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div key={Math.random()}>
                {listPost?.map((item) => {
                  if (item?.userId === userDetail?.id) {
                    return (
                      <div className="w-2/3 my-5 mx-auto" key={item.id}>
                        <Post key={item?.id} item={item} user={userDetail} />
                      </div>
                    );
                  }
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div
                className="grid grid-cols-1 md:grid-cols-5 gap-5"
                key={Math.random()}
              >
                {userDetail?.followerDTO?.map((item) => {
                  return (
                    <div className="col-span-1" key={Math.random()}>
                      <Follower item={item} />
                    </div>
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div
                className="grid grid-cols-1 md:grid-cols-5 gap-5"
                key={Math.random()}
              >
                {userDetail?.followingDTO?.map((item) => {
                  return (
                    <div className="col-span-1" key={Math.random()}>
                      <Following item={item} />
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
