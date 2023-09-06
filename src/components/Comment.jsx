import React, { Fragment, useState, useRef } from "react";
import avatar from "./../assets/img/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  useMenuState,
} from "@twilio-paste/core/menu";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalFooterActions,
  ModalHeader,
  ModalHeading,
} from "@twilio-paste/core/modal";
import { Button } from "@twilio-paste/core/button";
import { useFormik } from "formik";
import moment from "moment/moment";
import {
  updateCommentAction,
  deleteCommentAction,
  blockCommentAction,
  unBlockCommentAction,
} from "../redux/action/comment-action";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useUID } from "@twilio-paste/core/uid-library";
import { MoreIcon } from "@twilio-paste/icons/esm/MoreIcon";
const Comment = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  const content = useRef(null);
  const menu = useMenuState();
  const dispatch = useDispatch();
  const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.item?.id || "",
      content: props.item?.content || "",
      userId: props.item?.userId || "",
      postId: props.item?.postId || "",
    },
    // validationSchema:{}
    onSubmit: (values) => {
      dispatch(updateCommentAction(values, navigate));
      content.current.value = "";
    },
  });
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
              Are you sure to DELETE your comment?
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
                  dispatch(deleteCommentAction(props.item?.id));
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
              Are you sure to BLOCK Comment?
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
                  dispatch(blockCommentAction(props.item?.id));
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
              Are you sure to UNBLOCK Comment?
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
                  dispatch(unBlockCommentAction(props.item?.id));
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
              Edit your comment
            </ModalHeading>
          </ModalHeader>
          <ModalBody>
            <div className="pt-3 w-full">
              <textarea
                className="w-full border border-gray-300 focus:border-[#1473BB] rounded-md p-1 transition-all duration-300"
                placeholder="Write your comment..."
                onChange={formik.handleChange}
                name="content"
                value={formik?.values?.content}
                ref={content}
              ></textarea>
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
  const renderMenuMoreOption = () => {
    if (userInLocal?.Role === "Admin") {
      if (props.item?.isBlocked === false) {
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
                Block Comment
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
                Delete Comment
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
                UnBlock Comment
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
                Delete Comment
              </MenuItem>
            </Menu>
          </div>
        );
      }
    } else {
      if (props.item?.userId == userInLocal.Id) {
        return (
          <div>
            <MenuButton {...menu} variant="reset" size="reset">
              <MoreIcon decorative={false} title="More options" />
            </MenuButton>
            <Menu {...menu} aria-label="Preferences">
              <MenuItem
                {...menu}
                onClick={() => {
                  // dispatch(getPostByIdAction(props?.id));
                  setModalType("UPDATE");
                  handleOpen();
                }}
              >
                Edit Comment
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
                Delete Comment
              </MenuItem>
            </Menu>
          </div>
        );
      } else return <></>;
    }
  };
  return (
    <div className="rounded-lg border-2 h-fit shadow-sm shadow-gray-200 p-2 mb-1 ">
      <div className="flex items-stretch">
        <img
          src={
            props.item?.userDTO.image !== null
              ? props.item?.userDTO.image
              : avatar
          }
          className="w-[40px] h-[40px] rounded-lg object-cover"
        />
        <div className="flex justify-between bg-[#f7f5f5] rounded-md w-full ml-2">
          <div>
            <h1 className="font-bold text-sm pl-1 pt-1">
              {props.item?.userDTO.userName}
            </h1>
            <p className="text-sm text-gray-500 pl-1">
              {moment(props.item?.createdAt).format("LLLL")}
            </p>
            <p className="text-sm p-1">{props.item?.content}</p>
          </div>
          <div className="pt-1">{renderMenuMoreOption()}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
