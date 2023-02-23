import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./User/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
