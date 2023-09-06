import {
  getListUserService,
  loginService,
  createUserService,
  deleteUserService,
  updateUserService,
  getUserByIdService,
  changePasswordService,
  changeAvatarService,
} from "../../services/endpoints/user-service";
import {
  getListUserReducer,
  loginReducer,
  logoutReducer,
  getUserByIdReducer,
  getUserSignedInDetailReducer,
} from "../reducer/user-reducer";
import jwt from "jwt-decode";
const userInLocal = JSON.parse(localStorage.getItem("userSignedIn"));
export const loginAction = (data, navigate) => {
  return async (dispatch) => {
    try {
      let result = await loginService(data);
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);
      const decodedData = jwt(result.accessToken);
      localStorage.setItem("userSignedIn", JSON.stringify(decodedData));
      navigate("/");
      dispatch(loginReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutAction = (navigate) => {
  return async (dispatch) => {
    localStorage.removeItem("userSignedIn");
    localStorage.removeItem("accessToken");
    dispatch(logoutReducer());
    navigate("/login");
  };
};

export const getListUserAction = () => {
  return async (dispatch) => {
    try {
      const result = await getListUserService();
      dispatch(getListUserReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserByIdAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await getUserByIdService(id);
      dispatch(getUserByIdReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserSignedInDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await getUserByIdService(id);
      dispatch(getUserSignedInDetailReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};
export const createUserAction = (data, navigate) => {
  return async (dispatch) => {
    try {
      await createUserService(data);
      const result = await getListUserService();
      setTimeout(() => {
        navigate("/user-dashboard");
      }, 500);
      dispatch(getListUserReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserAction = (id, navigate) => {
  return async (dispatch) => {
    try {
      await deleteUserService(id);
      const result = await getListUserService();
      dispatch(getListUserReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUserAction = (data, navigate) => {
  return async (dispatch) => {
    try {
      await updateUserService(data);
      const result = await getListUserService();
      if (userInLocal.Role === "Admin") {
        setTimeout(() => {
          navigate("/user-dashboard");
        }, 500);
      } else {
        setTimeout(() => {
          navigate(`/profile/${userInLocal?.Id}`);
        }, 500);
      }
      console.log(userInLocal);
      dispatch(getListUserReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changePasswordAction = (data, navigate) => {
  return async (dispatch) => {
    try {
      await changePasswordService(data);
      setTimeout(() => {
        navigate(`/profile/${userInLocal?.Id}/update`);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeAvatarAction = (id, data, navigate) => {
  return async (dispatch) => {
    try {
      await changeAvatarService(data);
      const result = await getUserByIdService(id);
      dispatch(getUserByIdReducer(result));
      // setTimeout(() => {
      //   navigate(`/profile/${userInLocal?.Id}/update`);
      // }, 500);
    } catch (error) {
      console.log(error);
    }
  };
};
