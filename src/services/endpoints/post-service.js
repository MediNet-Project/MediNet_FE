import { http } from "../interceptor";
import { toast } from "react-toastify";

export const createPostService = (data) => {
  return toast.promise(
    http.post("/posts/create-post", data),
    {
      pending: "Wait a sec!",
      success: "Post has been created!",
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

export const getListPostService = () => {
  return http.get("/posts/get-list-post");
};

export const getPostByIdService = (id) => {
  return http.get(`/posts/get-post-detail/${id}`);
};

export const likePostService = (data) => {
  return http.put("/posts/reaction-post", data);
};

export const updatePostService = (data) => {
  return toast.promise(
    http.put("/posts/update-post", data),
    {
      pending: "Wait a sec!",
      success: "Post has been updated",
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

export const deletePostService = (id) => {
  return toast.promise(
    http.patch(`/posts/${id}`),
    {
      pending: "Wait a sec!",
      success: "Post has been deleted",
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

export const blockPostService = (id) => {
  return toast.promise(
    http.patch(`/posts/block-post/${id}`),
    {
      pending: "Wait a sec!",
      success: "Post has been blocked",
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

export const unBlockPostService = (id) => {
  return toast.promise(
    http.patch(`/posts/unblock-post/${id}`),
    {
      pending: "Wait a sec!",
      success: "Post has been unblocked",
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
