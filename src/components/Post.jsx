/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment, useState, useRef } from "react";
import avatar from "../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";
import WriteComment from "./WriteComment";
import { useUID } from "@twilio-paste/core/uid-library";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalFooterActions,
  ModalHeader,
  ModalHeading,
} from "@twilio-paste/core/modal";
import { useFormik } from "formik";
import { ProductCodeExchangeCommunityIcon } from "@twilio-paste/icons/esm/ProductCodeExchangeCommunityIcon";
import { ProductMessagingIcon } from "@twilio-paste/icons/esm/ProductMessagingIcon";
import Comment from "./Comment";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@twilio-paste/core/button";
import { Slide } from "react-toastify";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostByIdAction,
  likePostAction,
  updatePostAction,
  deletePostAction,
  blockPostAction,
  unBlockPostAction,
} from "../redux/action/post-action";
import { convertObjectToFormData } from "../utils/functions";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  useMenuState,
} from "@twilio-paste/core/menu";
import {
  FileUploader,
  FileUploaderDropzone,
  FileUploaderDropzoneText,
} from "@twilio-paste/core/file-uploader";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
import moment from "moment/moment";
const Post = ({ item, user, follow }) => {
  const navigate = useNavigate();
  const [followPressed, setFollowPressed] = React.useState(false);
  const content = useRef(null);
  const [uploadImg, setUploadImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [showPostImg, setShowPostImg] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  const menu = useMenuState();
  const dispatch = useDispatch();
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  const postDetail = useSelector((state) => state.postReducer.postDetail);
  const [connection, setConnection] = useState(null);
  const handleOnLikePost = () => {
    if (userInLocal) {
      const likeObject = {
        postId: item.id,
        userId: Number(userInLocal.Id),
        like: likePressed,
      };
      dispatch(likePostAction(likeObject));
      // sendMessage(userInLocal.Id);
    } else {
      alert.info("Please sign in first !", null, Slide, "dark");
    }
  };
  // const sendMessage = async (userId) => {
  //   if (!connection) {
  //     console.error("No connection");
  //     return;
  //   }
  //   if (connection.state !== "Connected") {
  //     try {
  //       await connection.start();
  //       console.log("Reconnected to SignalR");
  //       connection
  //         .invoke("OnConnectedAsync", userId.toString())
  //         .then((response) => response)
  //         .catch((error) => console.log("Error sending request:", error));
  //     } catch (error) {
  //       console.log("Error connecting to SignalR Hub:", error);
  //       return;
  //     }
  //   }
  // };
  const renderLikeIcon = () => {
    if (item?.reactionDTO.length > 0) {
      let isLike = false;
      item?.reactionDTO.map((ele) => {
        if (ele?.userId == userInLocal?.Id) {
          isLike = true;
        }
      });
      return isLike;
    } else {
      return false;
    }
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Id: postDetail?.id,
      Content: postDetail?.content,
      UserId: postDetail?.userId,
      Image: postDetail?.image || null,
    },
    onSubmit: (values) => {
      let updatePost = convertObjectToFormData(values);
      dispatch(updatePostAction(updatePost, navigate));
      setUploadImg(null);
      content.current.value = "";
    },
  });

  const handleUploadImage = (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setUploadImg(event.target.result);
      };
      formik.setFieldValue("Image", file);
    }
  };
  const [likePressed, setLikePressed] = useState(false);
  const renderFollowButton = (follow) => {
    if (userInLocal.Role !== "Admin") {
      follow?.map((element) => {
        console.log(item);
        if (
          item?.userId !== element?.followingId &&
          Number(userInLocal.Id) !== element?.folowerId
        ) {
          return (
            <div>
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
            </div>
          );
        } else return <></>;
      });
    }
  };
  const renderMenuMoreOption = () => {
    if (userInLocal?.Role === "Admin") {
      if (item?.isBlocked === false) {
        return (
          <div>
            <MenuButton {...menu} variant="reset" size="reset">
              <MoreIcon decorative={false} title="More options" />
            </MenuButton>
            <Menu {...menu} aria-label="Preferences">
              <MenuItem
                {...menu}
                onClick={() => {
                  setModalType("BLOCK");
                  handleOpen();
                }}
              >
                Block Post
              </MenuItem>
              {renderModal()}
              <MenuSeparator {...menu} />
              <MenuItem
                {...menu}
                onClick={() => {
                  setModalType("DELETE");
                  handleOpen();
                }}
              >
                Delete Post
              </MenuItem>
            </Menu>
          </div>
        );
      } else {
        return (
          <div>
            <MenuButton {...menu} variant="reset" size="reset">
              <MoreIcon decorative={false} title="More options" />
            </MenuButton>
            <Menu {...menu} aria-label="Preferences">
              <MenuItem
                {...menu}
                onClick={() => {
                  setModalType("UNBLOCK");
                  handleOpen();
                }}
              >
                UnBlock Post
              </MenuItem>
              {renderModal()}
              <MenuSeparator {...menu} />
              <MenuItem
                {...menu}
                onClick={() => {
                  setModalType("DELETE");
                  handleOpen();
                }}
              >
                Delete Post
              </MenuItem>
            </Menu>
          </div>
        );
      }
    } else {
      if (item?.userId == userInLocal.Id) {
        return (
          <div>
            <MenuButton {...menu} variant="reset" size="reset">
              <MoreIcon decorative={false} title="More options" />
            </MenuButton>
            <Menu {...menu} aria-label="Preferences">
              <MenuItem
                {...menu}
                onClick={() => {
                  dispatch(getPostByIdAction(item?.id));
                  setModalType("UPDATE");
                  setShowPostImg(true);
                  handleOpen();
                }}
              >
                Edit Post
              </MenuItem>
              {renderModal()}
              <MenuSeparator {...menu} />
              <MenuItem
                {...menu}
                onClick={() => {
                  setModalType("DELETE");
                  handleOpen();
                }}
              >
                Delete Post
              </MenuItem>
            </Menu>
          </div>
        );
      } else return <></>;
    }
  };
  const renderModal = () => {
    if (modalType === "DELETE") {
      return (
        <Modal
          ariaLabelledby={modalHeadingID}
          isOpen={isOpen}
          onDismiss={handleClose}
          size="default"
        >
          <ModalHeader>
            <ModalHeading as="h3" id={modalHeadingID}>
              Are you sure to DELETE Post?
            </ModalHeading>
          </ModalHeader>
          <ModalFooter>
            <ModalFooterActions>
              <Button variant="destructive_secondary" onClick={handleClose}>
                No
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(deletePostAction(item?.id));
                  handleClose();
                }}
              >
                Yes
              </Button>
            </ModalFooterActions>
          </ModalFooter>
        </Modal>
      );
    } else if (modalType === "BLOCK") {
      return (
        <Modal
          ariaLabelledby={modalHeadingID}
          isOpen={isOpen}
          onDismiss={handleClose}
          size="default"
        >
          <ModalHeader>
            <ModalHeading as="h3" id={modalHeadingID}>
              Are you sure to BLOCK Post?
            </ModalHeading>
          </ModalHeader>
          <ModalFooter>
            <ModalFooterActions>
              <Button variant="destructive_secondary" onClick={handleClose}>
                No
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(blockPostAction(item?.id));
                  handleClose();
                }}
              >
                Yes
              </Button>
            </ModalFooterActions>
          </ModalFooter>
        </Modal>
      );
    } else if (modalType === "UNBLOCK") {
      return (
        <Modal
          ariaLabelledby={modalHeadingID}
          isOpen={isOpen}
          onDismiss={handleClose}
          size="default"
        >
          <ModalHeader>
            <ModalHeading as="h3" id={modalHeadingID}>
              Are you sure to UNBLOCK Post?
            </ModalHeading>
          </ModalHeader>
          <ModalFooter>
            <ModalFooterActions>
              <Button variant="destructive_secondary" onClick={handleClose}>
                No
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(unBlockPostAction(item?.id));
                  handleClose();
                }}
              >
                Yes
              </Button>
            </ModalFooterActions>
          </ModalFooter>
        </Modal>
      );
    } else {
      return (
        <Modal
          ariaLabelledby={modalHeadingID}
          isOpen={isOpen}
          onDismiss={handleClose}
          size="default"
        >
          <ModalHeader>
            <ModalHeading as="h3" id={modalHeadingID}>
              Update your post
            </ModalHeading>
          </ModalHeader>
          <ModalBody>
            <div className="w-full">
              <div className="pt-3 w-full">
                <div className="mb-2">
                  <label htmlFor="text" className="font-bold text-md">
                    Content of Post
                  </label>
                </div>
                <textarea
                  name="Content"
                  value={formik?.values?.Content}
                  ref={content}
                  onChange={formik.handleChange}
                  className="w-full border border-gray-500 focus:border-[#1473BB] rounded-md transition-all duration-300"
                  placeholder="Create a new post..."
                ></textarea>
                <div className="my-2">
                  <label htmlFor="text" className="font-bold text-md">
                    Image of Post
                  </label>
                </div>
                <div className="flex justify-between">
                  <div className="pb-3">
                    {formik?.values?.Image !== null && showPostImg === true ? (
                      <div className="relative py-3 px-3">
                        <img
                          className="w-60 h-60 object-cover"
                          src={formik?.values?.Image}
                        />
                        <p
                          onClick={() => {
                            setShowPostImg(false);
                            setUploadImg(null);
                          }}
                          className="absolute top-0 right-0 cursor-pointer"
                        >
                          <i className="fa-solid fa-circle-xmark"></i>
                        </p>
                      </div>
                    ) : (
                      <>
                        {uploadImg === null ? (
                          <FileUploader name="Default File Uploader">
                            <FileUploaderDropzone
                              onInputChange={handleUploadImage}
                              acceptedMimeTypes={["image/*"]}
                            >
                              <FileUploaderDropzoneText>
                                Browse Image or drag them here
                              </FileUploaderDropzoneText>
                            </FileUploaderDropzone>
                          </FileUploader>
                        ) : (
                          <div className="relative py-3 px-3">
                            <img
                              className="w-60 h-60 object-cover"
                              src={uploadImg}
                            />
                            <p
                              onClick={() => {
                                setUploadImg(null);
                              }}
                              className="absolute top-0 right-0 cursor-pointer"
                            >
                              <i className="fa-solid fa-circle-xmark"></i>
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalFooterActions>
              <Button variant="destructive_secondary" onClick={handleClose}>
                No
              </Button>
              <Button variant="primary" onClick={formik.handleSubmit}>
                Yes
              </Button>
            </ModalFooterActions>
          </ModalFooter>
        </Modal>
      );
    }
  };
  return (
    <div className=" bg-white rounded-lg border-2 border-red-500 w-full h-auto shadow-md shadow-gray-400 flex">
      <div className="p-5 border-r-2 border-red-500 w-1/2 h-fix">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
          }}
          modules={[Pagination]}
          className="mySwiper relative"
        >
          <SwiperSlide>
            <img
              className="h-[450px] w-full object-cover"
              src={item?.image !== "string" ? item?.image : avatar}
              alt="image of post"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div key={item?.id} className="p-3 w-1/2">
        <div className="flex justify-between">
          <div className="flex items-stretch">
            <img
              src={item?.userDTO.image !== null ? item?.userDTO.image : avatar}
              className="w-[60px] h-[60px] rounded-lg object-cover"
            />
            <div className="ml-2 rounded-md">
              <h1
                onClick={() => {
                  navigate(`/profile/${item?.userId}`);
                }}
                className="font-bold text-[16px] pl-1 cursor-pointer hover:text-gray-700 transition-all duration-200"
              >
                {item?.userDTO.userName}
              </h1>
              <p className="text-[12px] text-gray-500 pl-1">
                {item?.userDTO.position}
              </p>
              <p className="text-[10px] text-gray-500 pl-1">
                {moment(item?.createdAt).format("LLLL")}
                {item?.createdAt}
              </p>
            </div>
          </div>
          <div className="pt-1">{renderMenuMoreOption()}</div>
          {/* {renderFollowButton(follow)} */}
        </div>
        <p className="text-justify pt-3">{item?.content}</p>
        <div className="flex mt-3">
          <div className="flex mr-5 ">
            <Button
              variant="secondary_icon"
              size="reset"
              pressed={likePressed}
              onClick={() => {
                setLikePressed(!likePressed);
                handleOnLikePost();
              }}
            >
              {renderLikeIcon() ? (
                <ProductCodeExchangeCommunityIcon
                  key={Math.random()}
                  decorative={false}
                  color="#DF3F47"
                  size="sizeIcon40"
                  title="Like"
                />
              ) : (
                <ProductCodeExchangeCommunityIcon
                  key={Math.random()}
                  decorative={false}
                  size="sizeIcon40"
                  title="Like"
                />
              )}
            </Button>
            <span className="pl-2 pt-1">{item?.likeCount}</span>
          </div>
          <div className="flex ">
            <ProductMessagingIcon
              decorative={false}
              color="#1473BB"
              size="sizeIcon40"
              title="Comment"
            />
            <span className="pl-2 pt-1">{item?.commentCount}</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mb-3 mt-2"></div>
        <WriteComment postId={item?.id} user={user} />
        <div
          className="max-h-[200px] overflow-y-scroll w-full mt-3"
          key={Math.random()}
        >
          {item?.commentDTO.map((item) => {
            return (
              <div key={Math.random()}>
                <Comment item={item} postId={item?.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
