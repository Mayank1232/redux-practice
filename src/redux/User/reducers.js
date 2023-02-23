import {
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "./type";

const initialState = {
  loading: false,
  users: [],
  error: "",
  favorite: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
