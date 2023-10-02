import {
  createFollowService,
  deleteFollowService,
  getListFollowService,
} from "../../services/endpoints/follow-service";
import { getListUserService } from "../../services/endpoints/user-service";
import { getListUserReducer } from "../reducer/user-reducer";
import { getListFollowReducer } from "../reducer/follow-reducer";

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

export const getListFollowAction = () => {
  return async (dispatch) => {
    try {
      const result = await getListFollowService();
      dispatch(getListFollowReducer(result));
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
