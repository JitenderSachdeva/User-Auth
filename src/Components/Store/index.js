import { createStore } from "redux";
import usersReducer from "./reducers/userReducers";
const store = createStore(usersReducer);
export default store;
