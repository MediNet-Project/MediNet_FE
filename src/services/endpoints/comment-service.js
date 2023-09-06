import { http } from "../interceptor";
import { toast } from "react-toastify";

export const createCommentService = (data) => {
  return toast.promise(
    http.post("/comments/create-comment", data),
    {
      pending: "Wait a sec!",
      success: "You have been written comment!",
      error: "Unexception error!",
    },
    {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
};
export const updateCommentService = (data) => {
  return toast.promise(
    http.put("/comments/update-comment", data),
    {
      pending: "Wait a sec!",
      success: "Your comment has been updated!",
      error: "Unexception error!",
    },
    {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
};
export const deleteCommentService = (id) => {
  return toast.promise(
    http.patch(`/comments/delete-comment/${id}`),
    {
      pending: "Wait a sec!",
      success: "Your comment has been deleted!",
      error: "Unexception error!",
    },
    {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
};

export const blockCommentService = (id) => {
  return toast.promise(
    http.patch(`/comments/block-comment/${id}`),
    {
      pending: "Wait a sec!",
      success: "Comment has been blocked",
      error: "Unexception error",
    },
    {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
};

export const unBlockCommentService = (id) => {
  return toast.promise(
    http.patch(`/comments/unblock-comment/${id}`),
    {
      pending: "Wait a sec!",
      success: "Comment has been unblocked",
      error: "Unexception error",
    },
    {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
};
