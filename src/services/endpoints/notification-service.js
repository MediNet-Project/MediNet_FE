import { http } from "../interceptor";
import { toast } from "react-toastify";

export const createNotiService = (data) => {
  return toast.promise(
    http.post("/notifications/create-notification", data),
    {
      pending: "Wait a sec!",
      success: "Notification has been created!",
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

export const getNotiByIdService = (data) => {
  return http.get("/notifications/get-list-notification", data);
};
