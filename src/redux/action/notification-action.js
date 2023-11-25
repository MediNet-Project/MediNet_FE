import {
  createNotiService,
  getNotiByIdService,
} from "../../services/endpoints/notification-service";
import { getListUserService } from "../../services/endpoints/user-service";
import { getListUserReducer } from "../reducer/user-reducer";
import { getNotiByIdReducer } from "../reducer/notification-reducer";

export const createPostAction = (data) => {
  return async (dispatch) => {
    try {
      await createNotiService(data);
      const result = await getListUserService();
      dispatch(getListUserReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getListNotiAction = (data) => {
  return async (dispatch) => {
    try {
      const result = await getNotiByIdService(data);
      dispatch(getNotiByIdReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};
