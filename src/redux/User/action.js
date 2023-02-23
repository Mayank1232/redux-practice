import {
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
} from "./type";

import { getUsers } from "../../services/UserServices";

export const fetchUserDataRequest = () => {
  return {
    type: FETCH_USER_DATA_REQUEST,
  };
};

export const fetchUserDataSuccess = (users) => {
  console.log("IN");
  return {
    type: FETCH_USER_DATA_SUCCESS,
    payload: users,
  };
};

export const fetchUserDataFailure = (error) => {
  return {
    type: FETCH_USER_DATA_FAILURE,
    payload: error,
  };
};

// export const fetchUserThunkAction = (params) => {
//   return async (dispatch) => {
//     dispatch(fetchUserDataRequest());
//     await getUsers(params)
//       .then((response) => {
//         const users = response?.data;
//         // console.log(users.results.map((item) => item.email));
//         console.log(users);
//         dispatch(fetchUserDataSuccess(users));
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch(fetchUserDataFailure(errorMsg));
//       });
//   };
// };

export const fetchUserThunkAction = (params, onSuccess, onError) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserDataRequest());
      const { data } = await getUsers(params);
      console.log(data);
      // if (data.success !== true) {
      //   throw new Error(data.message);
      // }
      dispatch(fetchUserDataSuccess(data.results));
      onSuccess();
    } catch (error) {
      const errorMsg = "Error";
      dispatch(fetchUserDataFailure(errorMsg));
      onError(errorMsg);
    }
  };
};
