import { http } from "../interceptor";
import { toast } from "react-toastify";
export const loginService = (data) => {
  return toast.promise(
    http.post("/users/login", data),
    {
      pending: "Wait a sec!",
      success: "Login Success!",
      error: "Email or Password incorrect!",
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

export const getListUserService = () => {
  return http.get("/users/get-list-user");
};

export const createUserService = (data) => {
  return toast.promise(
    http.post("/users/create-user", data),
    {
      pending: "Wait a sec!",
      success: "User has been created",
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

export const deleteUserService = (id) => {
  return toast.promise(
    http.patch(`/users/${id}`),
    {
      pending: "Wait a sec!",
      success: "User has been deleted",
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
export const updateUserService = (data) => {
  return toast.promise(
    http.put("/users/update-user", data),
    {
      pending: "Wait a sec!",
      success: "User has been updated",
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

export const getUserByIdService = (id) => {
  return http.get(`/users/get-user-detail/${id}`);
};
