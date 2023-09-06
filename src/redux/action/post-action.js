import { data } from "autoprefixer";
import {
  createPostService,
  getListPostService,
  getPostByIdService,
  likePostService,
  updatePostService,
  deletePostService,
  unBlockPostService,
  blockPostService,
} from "../../services/endpoints/post-service";
import {
  getListPostReducer,
  getPostByIdReducer,
} from "../reducer/post-reducer";

export const createPostAction = (data) => {
  return async (dispatch) => {
    try {
      await createPostService(data);
      const result = await getListPostService();
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getListPostAction = () => {
  return async (dispatch) => {
    try {
      const result = await getListPostService();
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPostByIdAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await getPostByIdService(id);
      dispatch(getPostByIdReducer(result));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};

export const likePostAction = (data) => {
  return async (dispatch) => {
    try {
      await likePostService(data);
      let result = await getListPostService();
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePostAction = (data, navigate) => {
  return async (dispatch) => {
    try {
      await updatePostService(data);
      const result = await getListPostService();
      setTimeout(() => {
        navigate("/home");
      }, 500);
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePostAction = (id) => {
  return async (dispatch) => {
    try {
      await deletePostService(id);
      const result = await getListPostService();
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const blockPostAction = (id) => {
  return async (dispatch) => {
    try {
      await blockPostService(id);
      const result = await getListPostService();
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const unBlockPostAction = (id) => {
  return async (dispatch) => {
    try {
      await unBlockPostService(id);
      const result = await getListPostService();
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};
