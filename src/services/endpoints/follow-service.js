import { http } from "../interceptor";
import { toast } from "react-toastify";

export const createFollowService = (data) => {
  return toast.promise(
    http.post("/follows/create-follow", data),
    {
      pending: "Wait a sec!",
      success: "You have followed!",
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

export const getListFollowService = () => {
  return http.get("/follows/get-list-follow");
};

export const deleteFollowService = (id) => {
  return toast.promise(
    http.patch(`/follows/delete-follow/${id}`),
    {
      pending: "Wait a sec!",
      success: "You have unfollowed!",
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
