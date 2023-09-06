import {
  createCommentService,
  updateCommentService,
  deleteCommentService,
  unBlockCommentService,
  blockCommentService,
} from "../../services/endpoints/comment-service";
import {
  getPostByIdService,
  getListPostService,
} from "../../services/endpoints/post-service";

import {
  getPostByIdReducer,
  getListPostReducer,
} from "../reducer/post-reducer";

export const createCommentAction = (data) => {
  return async (dispatch) => {
    try {
      await createCommentService(data);
      const result = await getListPostService();
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

// export const getCommentByIdAction = (id) => {
//   return async (dispatch) => {
//     try {
//       const result = await get
//     } catch (error) {

//     }
//   }
// }

export const updateCommentAction = (data, navigate) => {
  return async (dispatch) => {
    try {
      await updateCommentService(data);
      let result = await getListPostService();
      setTimeout(() => {
        navigate("/home");
      }, 500);
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCommentAction = (id) => {
  return async (dispatch) => {
    try {
      await deleteCommentService(id);
      const result = await getListPostService();
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const blockCommentAction = (id) => {
  return async (dispatch) => {
    try {
      await blockCommentService(id);
      const result = await getListPostService();
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const unBlockCommentAction = (id) => {
  return async (dispatch) => {
    try {
      await unBlockCommentService(id);
      const result = await getListPostService();
      dispatch(getListPostReducer(result));
    } catch (error) {
      console.log(error);
    }
  };
};
