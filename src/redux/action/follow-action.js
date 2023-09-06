import {
  createFollowService,
  deleteFollowService,
} from "../../services/endpoints/follow-service";
import {
  getUserByIdService,
  getListUserService,
} from "../../services/endpoints/user-service";
import { getListUserReducer } from "../reducer/user-reducer";

export const createFollowAction = (data) => {
  return async (dispatch) => {
    try {
      await createFollowService(data);
      const result = await getListUserService();
      dispatch(getListUserReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFollowAction = (id) => {
  return async (dispatch) => {
    try {
      await deleteFollowService(id);
      const result = await getListUserService();
      dispatch(getListUserReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};
